var elbtn = document.querySelector(".hero-link")
var elmodal = document.querySelector(".modal")
var ellink = document.querySelector(".modal__link")

elbtn.addEventListener("click", function() {
    elmodal.classList.add("open__modal")
})

ellink.addEventListener("click", function() {
    elmodal.classList.remove("open__modal")
})

elmodal.addEventListener("click", function() {
    elmodal.classList.remove("open__modal")
})






