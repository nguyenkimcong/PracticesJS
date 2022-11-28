// Bài 3: Viết một hàm nhận giá trị là một số hoặc một chuỗi. Hàm
// chuyển đổi tham số về giá trị số (nếu cần) và trả về kết quả dưới dạng
// “8px”, “10px”... Nếu tham số không thể chuyển đổi về dạng số, trả về
// “0px”.
    
function convert(String){
    var result = Number.parseInt(String);
    if(typeof result == "String"){
        console.log('${result}px');
    }else{
        console.log("0px");
    }
}
convert("12.3");