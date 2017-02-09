module.exports = {
 aritGeo: function(data) {
 	var AP = true;
 	var GP = true;
 	if(data.length === 0 || data.length === 1){
 		return 0;
 	}

 	var commonDiff = data[0] - data[1];
 	for(var i = 0; i < data.length-1; i++){
 		var diff2 = data[i] - data[i+1];
 		if(commonDiff != diff2){
 			AP = false;
 			break;
 		}
 	}



 	if(AP){
 		return "Arithmetic";
 	}
 	if(AP){
 		return "Geometric";
 	}
 }
}