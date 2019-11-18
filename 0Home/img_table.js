/*
  *Draw red circle around blob according to ferret's diameter
  *18/11/2019
  *Loan Gauchat
*/
'use strict';

////////// FUNCTIONS //////////
function drawcirc()
{
	for(let i = 0; i < x.length; i++){
		ip.drawOval(x,y,f/2,f/2);
	}
}

////////// MAIN //////////


// Step 1: get columns from Results
let table = ResultsTable.getResultsTable();

let xi = table.getColumnIndex('X');
let yi = table.getColumnIndex('Y');
let fi = table.getColumnIndex('Feret');
let x = table.getColumn(xi);
let y = table.getColumn(yi);
let f = table.getColumn(fi);

for(let i = 0; i < x.length; i++){
	IJ.log(`${i} Feret[x:${x[i]} y:${x[i]}] = ${f[i]}\n`)
}

//Step 2 : draw red corc;e/ 
let imp = IJ.getImage();
IJ.run(imp, "RGB Color", "");
let ip = imp.getProcessor();
ip.setColor(new java.awt.Color(255,0,0));
for(let i = 0; i < x.length; i++){
	let cx = x[i];
	let cy = y[i];
	let diam = f[i];
	let half = diam/2;
	ip.drawOval(cx-half,cy-half,diam,diam);
}


imp.updateAndDraw();
