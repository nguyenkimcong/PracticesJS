// Bài 2: Viết một hàm tính diện tích của hình tròn, tham số truyền vào
// là bán kính của hình tròn đó.

function area(radius){
 var result = Math.PI * (radius**2) ;
 console.log("diện tích hình tròn là : " + result.toFixed(2));
}

function perimeter(radius){
 var result = 2 * Math.PI * radius;
 console.log("chu vi hình tròn là : " + result.toFixed(2));
}

area(2.22);
perimeter(3.33);