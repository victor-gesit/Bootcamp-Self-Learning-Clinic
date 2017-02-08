(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [-10,0] for [-2,0,-5,-9,-10]', function(){
        expect(findMinMax([-2,0,-5,-9,-10])).toEqual([-10,0])
      });
      it('should return [-2,5] for [5, 0, -1, -2]', function(){
        expect(findMinMax([5,0,-1,-2])).toEqual([-2,5])
      });
      it('should return [-5.5,5.5] for [-3.3,3.3,-4.4,4.4,-5.5,5.5]', function(){
        expect(findMinMax([-3.3,3.3,-4.4,4.4,-5.5,5.5])).toEqual([-5.5,5.5]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      it('should return [-2] for [-2,-2,-2,-2]', function(){
        expect(findMinMax([-2,-2,-2,-2])).toEqual([-2])
      });
      it('should return [0] for [0,0,0,0,0]', function(){
        expect(findMinMax([0,0,0,0,0])).toEqual([0])
      });
      it('should return [2.5] for [2.5,2.5,2.5,2.5]', function(){

        expect(findMinMax([2.5,2.5,2.5,2.5,2.5])).toEqual([2.5])
      });

    });

  });

})();