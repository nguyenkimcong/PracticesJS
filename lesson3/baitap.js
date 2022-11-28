//bai1:
function doubleValue() {
    const array = [2, 4, 6];
    var result = array.map(number => {
     return number * 2;
    });
    console.log(result);
}
doubleValue();
//bai3:
function checkArray(number) {
    const array = [];
    for(var i = 0; i <= number; i++ ){
        array.push(i);
    }
    console.log(array);
}
checkArray(5);


//bai3.2:

function arrayName(arr){
    if(arr.length == 1 ){
       return arr[0];
    }
    var lastName =  arr.pop();
    var arr2 = arr.join(",")
    console.log(arr2 + " và "+ lastName);
}
arrayName(["Mai", "Vân", "Tùng", "Khánh"]);






  














