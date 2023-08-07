
function isInteger(number){
  if (typeof number!=="string"){
    return "please provide a valid string";
  }
   else{
    if(number.endsWith(".js")===true){
      return true;
    }
    else{
      return false;
    }
   }
  
}
let number = 'javascript';
const output= isInteger(number);
console.log(output)