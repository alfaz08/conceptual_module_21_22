function gemsToDiamond(first,second,third){
  if (typeof first!=="number"||typeof second!=="number"||typeof third!=="number"){
      return "please provide a valid number";
  
  }
  else if(first<0||second<0||third<0){
    return "please enter all positive number"
  }
  
  else{
    let totalDiamond = ((first*21)+(second*32)+(third*43))
    if(totalDiamond>2000){
      return totalDiamond-2000
    }
    else{
      return totalDiamond
    }
  }
  
}

let a=1;
let b=1;
let c=1;
let total = gemsToDiamond(a,b,c);
console.log(total);
