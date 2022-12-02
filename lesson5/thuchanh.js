//b1:
const test = document.getElementsByClassName("text-content");
console.log(test[0]);
//b2:
const test2 = document.getElementsByTagName("p");
console.log(test2[1]);
//b3:
const test3 = document.getElementsByClassName("text-li");
console.log(test3[0]);
//b4:
const test4 = document.getElementsByClassName('text-content')[0].querySelectorAll('p')
array = [...test4];
console.log(array);


//bai 1.1:
const test5 = document.querySelector('p').innerHTML =  'New-second'
console.log(test5)
// // bai1.2:


//bài 1.3:
function editSelector3(selector, action) {
    paragraph = document.querySelector(selector);
    if (paragraph == null) {
        return;
    }
    if (action == "add") {
        paragraph.classList.add("active");
    } else if (action == "remove") {
        paragraph.classList.remove("active");
    }
    console.log(document.querySelector(selector));
}

editSelector3(".first-text", "add");
editSelector3(".first-text", "remove");




