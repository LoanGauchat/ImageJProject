/*
  *Image mathematic
  *18/11/2019
  *Loan Gauchat
*/
'use strict';

////////// FUNCTIONS //////////
function iadd(pix,scalar){
	return pix + scalar;
}
function isub(pix,scalar){
	return pix - scalar;
}
function imul(pix,scalar){
	return pix * scalar;
}
function idiv(pix,scalar){
	return pix / scalar;
}
function clamp(pix,minVal,maxVal){
	if(pix < minVal){
		return minVal;
	}
	else if (pix > maxVal){
		return maxVal;
	}
	else
	{
		return pix;
	}}

function icalc(ip, scalar){
	for(let i = 0; i < w * h; i++){
		//Get Pixel value
		let pix = ip.get(i);
		//Calc
		let newPix = idiv(pix,scalar);
		//Set new Pixel value
		ip.set(i,newPix);
	}
}

function icalc2(ip,op,scalar){
	for(let i = 0; i < w * h; i++){
			//Get Pixel value
			let pix = ip.get(i);
			//Calc
			let func;
			switch(op){
				case 'mul':
					func = imul;
					break;
				case 'add':
					func = iadd;
					break;
				case 'sub':
					func = isub;
					break;
				case 'div':
					func = idiv;
					break;
				default:
					IJ.showMessage('ERR: Unknown Op');
					throw('End of Script');
					break;
			}
			let newPix = func(pix,scalar);
			//Set new Pixel value
			ip.set(i,clamp(newPix,0,255));
		}
}

function icalc3(ip,op,scalar){
	for(let i = 0; i < w * h; i++){
			//Get Pixel value
			let pix = ip.get(i);
			//Calc
			let func;
			if(op === 'mul'){
				func = imul;
			}
			else if(op === 'div'){
				func = idiv;
			}
			else if(op === 'add'){
				func = iadd;
			}
			else if(op === 'sub'){
				func = isub;
			}
			else{
				IJ.showMessage('ERR: Unknown Op');
				throw('End of Script');
			}
			let newPix = func(pix,scalar);
			//Set new Pixel value
			ip.set(i,clamp(newPix,0,255));
		}
}

////////// MAIN //////////
let imp = IJ.getImage();
let ip = imp.getProcessor();
let w = imp.getWidth();
let h = imp.getHeight(); 

icalc2(ip,'div',2);
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
