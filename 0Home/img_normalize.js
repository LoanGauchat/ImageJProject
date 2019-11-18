/*
  *Image Normarlize
  *18/11/2019
  *Loan Gauchat
  p = (p - min)/(max-min) * 255
*/
'use strict';

////////// FUNCTIONS //////////
function minMax(ip){
	let w = ip.getWidth();
	let h = ip.getHeight(); 
	let minVal = ip.get(0);
	let maxVal = ip.get(0);
	for(let i = 1; i < w * h;i++){
		let pix = ip.get(i);
		if(pix < minVal) minVal = pix;
		if(pix > maxVal) maxVal = pix;
	}
	return[minVal,maxVal];
	
}

function calcNormalize(pix,minVal,maxVal){
	return retnewPix = ((pix - minVal)/(maxVal-minVal))*255;
}

function Normarlize(){
	let w = ip.getWidth();
	let h = ip.getHeight(); 
	let mM = minMax(ip);
	for(let i = 0; i < w * h; i++){
		let pix = ip.get(i);
		let newPix = calcNormalize(pix,mM[0],mM[1]);
		ip.set(i,newPix);
	}
}

////////// MAIN //////////
let imp = IJ.getImage();
let ip = imp.getProcessor();
Normarlize(ip);
imp.updateAndDraw();
