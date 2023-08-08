function printDetails(person){
if(typeof person!== "object"){
  return "please provide valid object"
}
else{
  const name =person.name|| "nai";
  const age =person.age|| "nai";
  const email =person.email || "nai";
  const bou =person.bou|| "nai";

  return "amar nam "+name+". amar boyos "+age+". amar email "+email+". amar bou "+bou;
}

}

const obj ={
  name:"Alfaz",
  age:28,
  email:"alfaz.cse@gmail.com"
};

console.log(printDetails(obj));