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
    for (const i of products) {
        if(i.price > 20000000){
            return i;
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
function addProduct(product){
    products.push(product);
}
addProduct({
        name: "vertu",
        price: 1000000000,
        brand: "vertu",
        count: 2,
    });

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
        return a.count - b.count;
    })
}
sortByCount();

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
function randomProduct() {
    let n = products.length;
    if (n < 2) {
        return "k đủ sản phẩm để lấy!!!";
    }
    let a = Math.floor(Math.random() * n);
    let b = Math.floor(Math.random() * n);
    while (a == b) {
        b = Math.floor(Math.random() * n);
    }
    return [products[a], products[b]];
}
console.log(randomProduct());