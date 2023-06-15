const btn = document.getElementById("burger");
const menu = document.getElementById("menu")

btn.addEventListener("click", ()=>{
    if (menu.classList.contains("hidden")){
        menu.classList.remove("hidden")
    }
    else{
        menu.classList.add("hidden")
    }
})