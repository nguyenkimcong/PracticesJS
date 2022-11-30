//:Bài 4: Viết một hàm nhận tham số là một chuỗi là một đoạn văn. Hàm trả về chuỗi nhận được từ tham số với
// cả các chữ cái đầu của các từ viết hoa. Ví dụ tham số là “It is a good day”, kết quả trả về “It Is A Good Day”

function upperCaseString(string) {
    let convert = string.toLowerCase().split(" ");
    for(var i = 0; i< convert.length; i++){
       convert[i] = convert[i][0].toUpperCase() + convert[i].slice(1);
    }
    return convert.join(" ");
  }
  console.log(upperCaseString('It is a good day'));

// Bài 3: Viêt 1 hàm nhận vào 2 tham số, trong đó:
// Tham số đầu là 1 mảng,
// Tham số sau là 1 số nguyên
// Function này có chức năng tách mảng nhận vào ban đầu thành các mảng nhỏ hơn, và các mảng nhỏ hơn này có số phần tử bằng với tham số thứ 2 được truyền vào
// Vdu: chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]

function chunk(arr, num) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i += num) {
    let chunk = arr.slice(i, i + num);
    arr2.push(chunk);
  }
  return arr2;
}
chunk([1, 2, 3, 4, 5], 2);
