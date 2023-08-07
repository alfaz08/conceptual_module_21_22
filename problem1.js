function isInteger(number){
  if (typeof number!=="number"){
    return "please provide a valid number";
  }
  if (number%1===0){
    return true
  }
  else{
    return false
  }
}
let number =2.35;
const output= isInteger(number);
console.log(output)