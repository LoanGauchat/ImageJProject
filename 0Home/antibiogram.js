/*
  *Process and Analyse Antibiogram
  *13/11/2019
  *Loan Gauchat
*/

//Step 1: Load image
let imp = IJ.getImage();
let w = imp.getWidth();
let h = imp.getHeight();
let halfw = w/2;
let halfh = h/2;

//Step 2: Resize image
IJ.run(imp, "Size...", `width=${halfw} height=${halfh} depth=1 constrain average interpolation=Bilinear`);

//Step 3: Split channels image
let channels = ChannelSplitter.split(imp);
let green = channels[1];

//Step 4:Image Enhancement
IJ.run(green, "Median...", "radius=4");
IJ.run(green, "Median...", "radius=4");
IJ.run(green, "Median...", "radius=4");
IJ.run(green, "Subtract Background...", "rolling=40");


//Step 5: Image segmentation
IJ.setAutoThreshold(green, "Otsu dark b&w");

//Step 6:Image Analyse
IJ.run(green, "Analyze Particles...", "size=500-Infinity circularity=0.60-1.00 show=Outlines display clear");

