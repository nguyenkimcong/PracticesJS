//bài 1:
    const type = {
        name: "chó",
        breed: "đực",
        hairColor: "đen",
        favoriteFood: "thịt"
    }
    const type1 = {
        name: "mèo",
        breed: "đực",
        hairColor: "trắng",
        favoriteFood: "cá"
    }
    const type2 = {
        name: "chim",
        breed: "cái",
        hairColor: "vàng",
        favoriteFood: "cám"
    }

Object.keys(type1);
//bai2:
console.log(type1);
//bai3:
type.yearOld = 3;
//bai4:
function createString(object) {
    return `Nhà tôi có một con ${object.type} tên là ${object.name}, nó thích ăn ${object.favoriteFood}.`
}

console.log(createString(type));


//bai 5: 
var alltype = [
    type,
     {
        name: "mèo",
        breed: "đực",
        hairColor: "trắng",
        favoriteFood: "cá"
    },
    {
        name: "chim",
        breed: "cái",
        hairColor: "vàng",
        favoriteFood: "cám"
    }

]
