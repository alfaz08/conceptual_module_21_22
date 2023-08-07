function isLGSeven(number){
  let a=7;
  if(typeof number!=="number")
  {
    return "please enter a valid number";
  }
  else if((number-a)<7){
    return number-a;
  }
  else{
    return number*2
  }
  }

  let number = 15;
let finalOutput= isLGSeven(number);
console.log(finalOutput);