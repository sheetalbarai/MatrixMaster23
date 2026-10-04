

const submitBtn = document.querySelector(".btn");

submitBtn.addEventListener('click', function(e){
    e.preventDefault(); //prevents form from submitting and refreshing the page
    document.querySelector("#my-form").style.background = "red";
    document.querySelector('body').classList.add("bg-dark");
    document.querySelector('.items').lastElementChild.innerHTML = '<h1> Hello </h1>';
});
console.dir(document.getElementsByTagName("body"));
