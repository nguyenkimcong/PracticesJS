const btn = document.getElementById("btn");
const image = document.getElementById("image");

// Lắng nghe sự kiện khi bấm vào nút "random"
btn.addEventListener("click", function () {
    getRandomImage()
})

// Gọi API để lấy dữ liệu và hiển thị
function getRandomImage() {
    // Gọi API lấy ảnh random của dog
    let res = axios.get("https://dog.ceo/api/breeds/image/random")

    // Gán URL cho thẻ image
    image.src = res.data.message 

res
.then(function(respon) {
    debugger;
    return image.src = respon.data.message;
})
.catch(error => { 
    console.log(error);
})
}

