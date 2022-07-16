const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const container = document.querySelector(".container2");
const comment = document.querySelector(".comment");
const copyright = document.querySelector(".copyright");
let counter = 0;

function reload() {
    reload = location.reload();
}


hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if(counter%2 == 0) {
        comment.style.display = "none";
        container.style.display = "none";
        copyright.style.display = "none";
    }else{
        reload();
    }

    counter++
    console.log(counter);

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        reload();
}))