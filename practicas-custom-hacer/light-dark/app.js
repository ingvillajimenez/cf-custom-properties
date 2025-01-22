
// window.matchMedia('(prefers-color-scheme: dark)').matches

const buttonToggle = document.querySelector(".toggle-mode");
const root = document.documentElement;

buttonToggle.addEventListener("click", function(){

    if(root.dataset.theme === "light"){
        root.dataset.theme = "dark";
    }else{
        root.dataset.theme = "light";
    }

});