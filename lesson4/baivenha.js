//bài 1:
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
];
// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau:
function printAllProducts(){
    for(let i = 0 ; i < products.length; i ++){
        console.log(Object.values(products[i]).join(" - "));
    }
}
printAllProducts();

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count
function sumAllProducts() {
    let sum = 0;
    for (const i of products) {
        sum += i.price * i.count;
    }
    return sum;
}
console.log(" sumAllProducts " + sumAllProducts());

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
function AppleProduct(str){
    return products.filter(product => product.brand === str);
}
console.log(AppleProduct("Apple"));

// 4. Tìm các sản phẩm có giá > 20000000
function searchProduct(){ 
    for (let item of products) {
        if (item.price > 20000000) {
            console.log(item.name);
        }
    }   
}
console.log(searchProduct());

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
function searchByKey(str) {
    return products.filter(product => product.name.toLowerCase().includes(str.toLowerCase()));
}
console.log(searchByKey("pro"));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
products.push({
        name: "vertu",
        price: 1000000000,
        brand: "vertu",
        count: 2,
    })

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
function delProductByBrand(str) {
    return products = products.filter(product => product.brand !== str);
}

// 8. Sắp xếp giỏ hàng theo price tăng dần
function sortByPrice() {
    products.sort(function (a, b) {
        return a.price - b.price;
    })
}
sortByPrice();

// 9. Sắp xếp giỏ hàng theo count giảm dần
function sortByCount() {
    products.sort(function (a, b) {
        return b.count - a.count;
    })
}
sortByCount();

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

console.log(products[Math.floor(Math.random() * products.length)]);
console.log(products[Math.floor(Math.random() * products.length)]);

//bài 2: Tạo 1 constructor tên Person khi khởi tạo có name và age được truyền vào và một property tên stomach là array.
// Các instances của Person khi khởi tạo sẽ có 1 stomach là array rỗng (Chiếc bụng đói)
// Xử lý để các instances của Person có các method sau:
//     method .eat("something") , khi người ăn một cái gì đó, loại thức ăn đó sẽ được đẩy vào array stomach (Đẩy thức ăn vào bụng), method eat này không nhận quá 10 thức ăn vào bụng.
//     method .poop(), khi người thực hiện poops thì array stomach sẽ empty (Đào thải tất cả)
//     method .introduceMyself trả ra string giới thiệu về bản thân theo format sau: This is David, 50 years old

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
    this.eat = function(something) {
        if (this.stomach.length >= 10) {
            return;
        }
        this.stomach.push(something);
    }
    this.poop = function() {
        this.stomach.length = 0;
    }
    this.introduceMyself = function() {
        console.log(`This is ${this.name}, ${this.age} years old.`);
    }
}

david = new Person("David", 50);

david.eat("cơm");
david.eat("bánh mì");
david.eat("sôi");
david.eat("cơm");
david.eat("bánh mì");
david.eat("sôi");
david.eat("cơm");
david.eat("bánh mì");
david.eat("sôi");
david.eat("cơm");
david.eat("bánh mì");
david.eat("sôi");

david.poop();
console.log(david);

david.introduceMyself();
