const toggleThemeButton = document.querySelector(".toggle-mode");
const root = document.documentElement;

if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    root.dataset.theme = "dark";
}else{
    root.dataset.theme = "light";
}

toggleThemeButton.addEventListener("click", ()=>{

    if(root.matches("[data-theme='dark']")){
        root.dataset.theme = "light";
    }else{
        root.dataset.theme = "dark";
    }

});


// window.matchMedia('(prefers-color-scheme: dark)').matches
