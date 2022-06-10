const num = 54;
const isPerfectSquare = num => {
   let i = 1;
   while(i * i <= num){
      if(i * i !== num){
         i++;
         continue;
      };
      return true;
   };
   return false;
};
console.log(isPerfectSquare(num));



