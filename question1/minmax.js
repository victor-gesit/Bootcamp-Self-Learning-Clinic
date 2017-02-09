'use strict'

module.exports = {
 findMinMax: function(data) {
   var max = Math.max.apply(null,data);
   var min = Math.min.apply(null, data);
   return [min, max];
 }
}