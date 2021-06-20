let barra = document.getElementById("bar");
let number = 0;
let nav = document.getElementById("nav")
goTo = (id)=>{
    nav.classList.remove("display-flex")
    barra.classList.remove("bar-click")
    barra.classList.add("bar-normal")
    number = 0;
    document.getElementById(id).scrollIntoView(true)
}
barra.addEventListener("click", ()=>{
    if (number++ % 2 === 0){
        nav.classList.add("display-flex")
        barra.classList.remove("bar-normal")
        barra.classList.add("bar-click")
    }
    else{
        nav.classList.remove("display-flex")
        barra.classList.remove("bar-click")
        barra.classList.add("bar-normal")
    }
    number %= 2;
})
