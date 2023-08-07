// function findingBadData(numberList){
//   for(let i=0;i<numberList.length;i++){
//     if(numberList[i]<0){
//         console.log("bad data")
//     }
//     else{
//       console.log("good data")
//     }
//   }
  


//   }

//   const arr=[-5,5,6,-10,85]
//   let finalOutput = findingBadData(arr);

function findingBadData(numberList){
  if(!Array.isArray(numberList)){
    return "Please enter a number array"
  }
  else{
    let temp =0;
    for(let i=0;i<numberList.length;i++){
      if(typeof numberList[i]!=="number"){
        return "Please enter a number array"
       }
      else{
       if(numberList[i]<0){
          temp++;
         }           
    }
  }
  return temp;

}
}
  const arr=[2,-5,-7,'bangladesh',-13,'srilanka'];
 
  let finalOutput = findingBadData(arr);
  console.log(finalOutput)