// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn).
// Yêu cầu:
    // Đặt màu văn bản thành #777
    // Đặt kích thước phông chữ thành 2rem
    // Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.

const paragraph = document.querySelector("#text");
      paragraph.style.color = "#777";
      paragraph.style.fontSize = "2rem";
      paragraph.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";
    
// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
    // <ul>
    //     <li>Item 1</li>
    //     <li>Item 2</li>
    //     <li>Item 3</li>
    // </ul>
const paragraph1 = document.querySelector("#list1");
      paragraph1.style.color = "blue";

    // Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
    // <ul id="list">
    //    <li>Item 1</li>
    //    <li>Item 2</li>
    //    <li>Item 3</li>
    //    <li>Item 4</li>
    //    <li>Item 5</li>
    //    <li>Item 6</li>
    //    <li>Item 7</li>
    // </ul>
    // Sử dụng javascript để thực hiện những công việc sau:
    //1: Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
    //2: Sửa style cho thẻ <li> 1 thành màu đỏ (color)
    //3: Sửa background cho thẻ <li> 3 thành màu xanh lá (background-color)
    //4: Remove thẻ <li> 4
    //5: Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const paragraph2 = document.getElementById("list");
//1:
       paragraph2.innerHTML += "<li>Item 8</li> <li>Item 9</li> <li>Item 10</li>";
//2:     
const paragraph3 = document.querySelectorAll("li");
       paragraph3[0].style.color = "red";
//3:
      paragraph3[2].style.backgroundColor = "green";
//4:
      paragraph3[3].remove();
//5:
const newItem = document.createElement("li");
      newItem.innerHTML = "new item";
      paragraph2.insertBefore(newItem, paragraph3[4]);
      
