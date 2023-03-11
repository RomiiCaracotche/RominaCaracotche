const btnMenu = document.querySelector(".menu")

btnMenu.addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("nav__disabled") 
})

function animacionFuncionando() {
        setInterval(() => {
            document.querySelector(".main-info__animation").style.animation = "blink-cursor 0.75s infinite";
        }, 6000);      
}

animacionFuncionando()