// Bài 2: Trong bài tập so sánh tuổi trong buổi 1, hãy thêm 2 biến mới là
// “olderPerson” và “youngerPerson” để lưu giá trị tuổi theo tên người lớn
// tuổi nhất và người nhỏ nhất, sử dụng toán tử ba ngôi để gán giá trị
// cho 2 biến này. Kết quả chỉ cần báo là ai lớn hơn ai bao nhiêu tuổi.
// Không xét đến trường hợp bằng tuổi.

function comparisonaage(oldAge, youngAge){
    var olderPerson = "Cong";
    var youngerPerson = "Hai";
    var result = oldAge > youngAge ? console.log(olderPerson + " lon hon " + youngerPerson + " " + (oldAge - youngAge)+ " age")  : console.log("false");
}
comparisonaage(10, 20);