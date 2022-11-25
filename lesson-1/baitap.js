function compareAge(name, name1, age, age1) {
    if (age > age1){
      console.log( name + " lon hon " + name1 + ( age - age1 ) + " tuoi " )
     }
     if (age = age1) {
      console.log(name + " bang tuoi " + name1 )
     }
     if (age < age1) {
      console.log(name + " nho hon "  + name1 + (age1 - age) )
     }
     compareAge("cong" , "hai" ,22 ,20)
  
  }
  function bmi (height, weight){
    var result = weight/(height** 2);
    console.log(weight/(height** 2))
    if (bmi < 18.5){
        console.log("underweight")
    
}else if(result < 24.99 ){
    console.log(result + "Normal weight ");
}else if(result < 29.99 ){
    console.log(result + " Pre-obesity");

}else {
    console.log("Obesity");
}
}
bmi(1.70,55);
