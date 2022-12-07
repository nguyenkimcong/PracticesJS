const btn = document.getElementById('btn');
const image = document.getElementById('image');
const breedList = document.getElementById('breed-list');

function getBreedList() {
    let res = axios.get("https://dog.ceo/api/breeds/list/all")
    res
    .then((respon) => {
        renderBreed(respon.data.message);
    })
    .catch(error => { 
        console.log(error);
    })
};
function renderBreed(breeds) {
    for (key in breeds){
        let list =  document.createElement("list")
        list.textContent = key;
        breedList.appendChild(list);
    }
}
btn.addEventListener("click", function(){
    getRandomImage()
});
function getRandomImage (){
    let res = axios.get("https://dog.ceo/api/breeds/image/random")
    res
    .then(function(respon) {
        return image.src = respon.data.message;
    })
    .catch(error => { 
        console.log(error);
    })
    }
getBreedList();

