module.exports = {
 fizzBuzz: function(number) {
   if(number % 3 === 0 && number % 5!=0){
   	return "Fizz";
   } else if(number %5 ===0 && number %3 != 0){
   	return "Buzz";
   } else if (numbe %5 === 0 && number && 3 ===0){
   	return "FizzBuzz";
   } else{
   	return number;
   }
 }
}