/*
  *K-means used for clustering shapes (squares, trangles, circles)
  *20/11/2019
  *Loan Gauchat
  
*/
'use strict';

////////// MAIN //////////

// Import helper functions (aka modules)
const IJ_PLUGINS = IJ.getDir('plugins');
load(`${IJ_PLUGINS}/javascript/nashorn_polyfill.js`);
load(`${IJ_PLUGINS}/javascript/tml.js`);

//Step 1: Create a DataFrame object
let table = ResultsTable.getResultsTable();
let df = new DataFrame();
df.fromIJ(table);

let df2 = df.select('Area','Circ.');
console.log(df2.shape);
console.log(df2.headings);

//Step 2: Run K-means

let K = 3; //Nb of objects
let km = new Kmeans(K);
km.fit(df2); //Learning
let clusters = km.clusters;

//Step 3: Get image and call function that draw circle
let imp = IJ.getImage();
IJ.run(imp, "RGB Color", "");
let ip = imp.getProcessor();

let x = df.column('X').array();
let y = df.column('Y').array();

drawSymbols(x,y,ip,clusters);

imp.updateAndDraw();


////////// FUNCTIONS //////////
function drawSymbols(x,y,ip,clusters){
	
	const colors = [
			new java.awt.Color(255,0,0),
			new java.awt.Color(0,255,0),
			new java.awt.Color(0,0,255)
				]
	
	const diam = 10;
	
	for(let i = 0; i < clusters.length; i++){
	
		ip.setColor(colors[i]);
		
		for(let j = 0; j < clusters[i].length; j++){
			let idx = clusters[i][j];
			let cx = x[idx];
			let cy = y[idx];
			let half = diam/2; 
			ip.fillOval(cx-half,cy-half,diam,diam);
		}
	}
}

/*
let area = df.column('Area'); //Return data frame;
let area_array = area.array();


*/




