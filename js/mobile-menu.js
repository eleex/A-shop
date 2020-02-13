var openMenu = document.querySelector(".navigation__open-menu");
var navigation = document.querySelector(".navigation");

openMenu.addEventListener("click", function(evt){
    evt.preventDefault();
    openMenu.classList.toggle("opened");
    navigation.classList.toggle("display--none");
})