import { trocarTema , verificarTema } from "./helpers/tema-helpers.js"



const botaoTema=document.querySelector(".tema button")
const body=document.querySelector("body")

botaoTema.addEventListener("click", () =>{
    trocarTema( body, botaoTema)
})

verificarTema( body, botaoTema)

const botoesAssunto =document.querySelectorAll(".assuntos button")
console.log(botoesAssunto)
botoesAssunto.forEach(botao => {
    botao.addEventListener("click",selecionarAssunto)

})

function selecionarAssunto(evento){
    const assunto = evento.target.innerText
    localStorage.setItem("assunto", assunto)
    window.location.href="./pages/quiz/quiz.html"
}
