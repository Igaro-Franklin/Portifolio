// REVELAR NO SCROLL

function revelar(){
    var revelaçao = document.querySelectorAll(".revelar");
    
    revelaçao.forEach((revelar) => {
        var windowHeigth = window.innerHeight;
        var elementTop = revelar.getBoundingClientRect().top;
        var elementVisible = 100;
    
        if(elementTop < windowHeigth - elementVisible) {
            revelar.classList.add("ativar");
        } else {
            revelar.classList.remove("ativar");
        }
    });
    }
    
window.addEventListener("scroll", revelar);





// MOSTRAR DIV'S -----------------------------------------------

// Linkedin

const botaoLinkedin = document.getElementById("btn-um");
const divLinkedin = document.getElementById("mostrar-logoUm");

botaoLinkedin.addEventListener("click", function() {
  divLinkedin.style.display = "block";
});

// GitHub

const botaoGitHub = document.getElementById("btn-dois");
const divGithub = document.getElementById("mostrar-logoDois");

botaoGitHub.addEventListener("click", function() {
  divGithub.style.display = "block";
});

// Email

const botaoEmail = document.getElementById("btn-tres");
const divEmail = document.getElementById("mostrar-logoTres");

botaoEmail.addEventListener("click", function() {
  divEmail.style.display = "block";
});

// Whatsapp

const botaoWhatsapp = document.getElementById("btn-quatro");
const divWhatsapp = document.getElementById("mostrar-logoQuatro");

botaoWhatsapp.addEventListener("click", function() {
  divWhatsapp.style.display = "block";
});