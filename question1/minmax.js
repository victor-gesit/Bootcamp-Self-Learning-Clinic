'use strict'

module.exports = {
 findMinMax: function(data) {
 	var equal = true;
 	for(var i = 0; i < data.length -1; i++){
 		if(data[i] != data[i+1]){
 			equal = false;
 			break;
 		}
 	}
 	if(!equal){
	   var max = Math.max.apply(null,data);
	   var min = Math.min.apply(null, data);
	   return [min, max];
	} else {
		return [data[0]];
	}
 }
}