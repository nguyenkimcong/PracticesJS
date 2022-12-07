//Bài 1: Trong HTML, viết một thẻ có content là một số (mặc định là 0) và hai nút button có nội dung là “+” và “-”. 
// Khi click vào nút cộng hoặc nút trừ sẽ cập nhật giá trị của số trên.
const btnAdd = document.querySelector(".add");
const btnMinus = document.querySelector(".minus");
const textElem = document.querySelector(".textElem")
let count = 0 ;

btnAdd.addEventListener("click", () => {
 textElem.textContent = ++count ;
});
btnMinus.addEventListener("click", () => {
 textElem.textContent = --count ;
});

// Bài 2: Giả sử cửa sổ trình duyệt của bạn là một căn phòng, nền trắng là đang bật đèn. Hãy tạo một nút button để 
// tắt đèn của căn phòng này. Hay quy định content hoặc style cho nút này để người dùng biết ấn vào sẽ thế nào 
// (Ví dụ đèn đang sáng thì content ghi là “On”, ấn tắt đi thì chuyển sang “Off”). Có thể thêm icon hình bóng đèn và 
// đổi màu nền của button sang màu tối hơn khi đèn tắt.
const btnLamp = document.querySelector('.lamp-button');
btnLamp.addEventListener("click", () => {
    let room = document.querySelector('.room');
    if (room.style.backgroundColor == "white") {
        room.style.backgroundColor = "black";
    } else {
        room.style.backgroundColor = "white";
    }
});
//bài 3





