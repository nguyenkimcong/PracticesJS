// Quy ước giá trị từ 0 - 6 đại diện cho các ngày trong tuần (0 -
//     Chủ Nhật, 1 - Thứ Hai,...). Tạo một biến chứa giá trị số trong khoảng
//     trên, sử dụng switch/case và mệnh đề điều kiện để in ra cửa sổ
//     console giá trị theo biến trên theo dạng “Thứ Tư - Ngày trong tuần”,
//     “Thứ Bảy - Ngày cuối tuần”...

function dayOfWeek(day) {
switch (day){
    case 0:
        console.log( "Sunday");
        break;
    case 1:
        console.log("Monday");
            break;
    case 2:
        console.log( "Tuesday");
        break;
    case 3:
        console.log("Wednesday is the day of the week");
        break;
    case 4:
        console.log( "Thursday");
        break;
    case 5:
        console.log( "Friday");
        break;
    case 6:
        console.log("tSaturday is the weekend")
        break;
}
}
dayOfWeek(3);

        

