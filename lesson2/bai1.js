//Viết lại cách tính chỉ số BMI và trả kết quả bằng switch/case.

function bmi(height, weight){
    var result = (weight/ (height **2));

    switch(true){
        case result <= 18,5 :
            console.log(result + " underweight");
            break;
        case result < 24.99 :
            console.log(result + " Normal weight");
            break;
        case result >= 25 :
            console.log(result + " Pre-obesity");
            break;
        default:
            console.log("failed");
    }
}
bmi(1.70, 55);