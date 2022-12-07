const btnGroupE1 = document.querySelector(".buttons-group");
btnGroupE1.addEventListener("click", (event) => {
    const clickTarget = event.target;
    if (clickTarget.classList.contains("buttons-group")){
        return;
    }
    console.log(clickTarget.textContent);

});



