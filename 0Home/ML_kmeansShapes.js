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
let stack = IJ.getImage();
let df = new DataFrame();
df.fromIJ(stack);
console.log(df.shape);



//Step 2: Run K-means
let K = 7; //Nb of objects
let km = new Kmeans(K);
km.fit(df); //Learning
let clusters = km.clusters;

for(let i = 0; i < clusters.length; i++){

	if(clusters[i] == undefined){
		console.log(i,"@","--");
	}
	else{
		console.log(i,"@",clusters[i].length);
	}
	
}

//Step 3: Run function thtat extract shapes
extractShape(stack.getImageStack(),clusters);

/////////////FUNCTION//////////////////////////
function extractShape(stack,clusters){

	for(let i = 0; i < clusters.length; i++){
		
		let imp = IJ.createImage("cluster", "32-bit black", 33, 33, clusters[i].length);
		
		for(let j = 0; j < clusters[i].length; j++){
		
			let idx = clusters[i][j];
			let tmp = stack.getProcessor(idx+1);
			imp.getImageStack().setProcessor(tmp,j+1);
		
		}
		
		imp.show();
	}
}

/*


/*
let area = df.column('Area'); //Return data frame;
let area_array = area.array();


*/




