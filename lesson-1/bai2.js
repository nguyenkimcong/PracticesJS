// bai 2" Viết function kiểm tra số nhập vào có thỏa mãn điều kiện không? 
// Nếu có log ra console tương ứng như sau:
// Nếu chia hết cho 3 => Log ra Foo
// Nếu chia hết cho 5 => Log ra Bar
// Nếu chia hết cho cả 3 và 5 => Log ra FooBar
// Nếu không chia hết cho cả 3 và 5 => Log ra Not FooBar
// Nếu số nhập vào không phải là Number => Log ra Not a Number!

 function Foobar (number) {
    if (number % 3 == 0 && number % 5 == 0){
        console.log("FooBar");
    } else if (number % 3 == 0 ){
        console.log("Foo");
    }else if (number % 5 == 0){
        console.log("Bar");
    } else if (typeof number !="number"){
        console.log("not a number");
    }else {
         console.log("Not FooBar");
    }
}
Foobar(60);
Foobar(6);
Foobar(10);
Foobar("cong");
Foobar(22);