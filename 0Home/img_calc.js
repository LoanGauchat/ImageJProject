/*
  *Image mathematic
  *18/11/2019
  *Loan Gauchat
*/

//Step 1: 


let imp = IJ.getImage();
let ip = imp.getProcessor();
let w = imp.getWidth();
let h = imp.getHeight(); 

for(let i = 0; i < w * h; i++){
	//Get Pixel value
	let pix = ip.get(i);
	//Calc
	let newPix = pix/2; 
	//Set new Pixel value
	ip.set(i,newPix);
}

imp.updateAndDraw();

/*
Read 1 pixel

public int getPixel(int x, int y)
public float getPixelValue(int x, int y)
public int get(int x, int y)
public int get(int index)
public double getValue(int x, int y)
public float getf(int x,int y)
public float getf(int index)

*/


/*
Write 1 pixel

public void set(int x, int y, float value)
public void set(int index, float value)
public void setPixels(java.lang.Object pixels)
public void setf(int x, int y, float value)
public void setf(int index, float value)
public void putPixel(int x, int y, int value)
public void putPixelValue(int x, int y, double value)
*/

