function mindGame(number){
  if(number<=0 || (typeof number!=="number"))
  {
    return "please enter a valid number";
  }
  else{
    const output = (((number*3)+10)/2)-5;
    return output
  }
  
   
}

let number = "dhfuikh";
let finalOutput= mindGame(number);
console.log(finalOutput);