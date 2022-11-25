//bài 1 : Viết function nhận vào 2 arguments là 2 số,
//  log ra console tên và value của 2 biến đó
//(vdu: Biến foo có giá trị bằng 2, bar có giá trị bằng 5).
// Sau đó xử lý để hoán đổi giá trị của 2 biến này và 
// log ra console để được kết quả như sau:

function arguments (){
    let foo = 2;
    let bar = 5;

    let medial = foo ;
    foo = bar ;
    bar = medial;

    console.log(foo);
    console.log(bar);
 
}
arguments();