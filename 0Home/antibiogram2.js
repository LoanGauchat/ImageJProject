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

green.show();

//Step 4:Image Enhancement
IJ.run(green, "Maximum...", "radius=1.5");
/*
IJ.run(green, "Median...", "radius=5");



//Step 5: Image segmentation
IJ.setAutoThreshold(green, "Triangle dark b&w");
let proc = green.getProcessor();
let binary = proc.createMask();
green.setProcessor(binary);


IJ.run(green, "Fill Holes", "");
IJ.run(green, "Watershed", "");

//Step 6:Image Analyse
IJ.run(green, "Analyze Particles...", "  circularity=0.75-1.00 show=Outlines display clear");


*/
