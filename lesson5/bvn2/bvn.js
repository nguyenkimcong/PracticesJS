// Bài 1: Thay đổi phần tử đầu tiên và cuối cùng trong 1 danh sách
// Viết function thay đổi phần tử đầu và cuối trong mọi list có trên web page dưới dây. Phần tử đầu tiên trong list thay thành "first", phần tử cuối cùng thay thành "last"

let listArray = document.querySelectorAll("ul");
for (let i = 0; i < listArray.length; i++) {
    listArray[i].firstElementChild.textContent = "first";
    listArray[i].lastElementChild.textContent = "last";
}

// Bài 3: Thay đổi dấu
// Viết function thay thế tất cả các dấu ? bằng text why? và tất cả các dấu ! bằng text what? trong đoạn văn bản sau:
let paragraph = document.querySelector("p");
let text = paragraph.innerHTML;
text = text.replaceAll("?", "<b> why?</b>");
text = text.replaceAll("!", "<b> what?</b>");
paragraph.innerHTML = text;