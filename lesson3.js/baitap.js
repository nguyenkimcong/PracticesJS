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













