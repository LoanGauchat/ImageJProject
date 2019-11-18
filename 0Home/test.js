'use strict';

let imp = IJ.getImage();
IJ.run(imp, "Median...", "radius=4");
IJ.run(imp, "Subtract Background...", "rolling=50 light");
IJ.setAutoThreshold(imp, "Otsu dark");
imp.show();
