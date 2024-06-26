import { verificarTema, trocarTema } from "../../helpers/tema-helpers.js"

const botaoTema=document.querySelector(".tema button")
const body=document.querySelector("body")
const assunto =localStorage.getItem("assunto")

botaoTema.addEventListener("click", () =>{
    trocarTema( body, botaoTema)
})

verificarTema( body, botaoTema)


function alterarAssunto(){

    const divIcone= document.querySelector(".assunto_icone")
    const iconeImg=document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")
    
        divIcone.classList.add(assunto.toLowerCase())
        iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
        iconeImg.setAttribute("alt", `icone de ${assunto}`)
        assuntoTitulo.innerText=assunto
    }

 alterarAssunto()

 function inserirResultado(){
    const sectionPontuacao=document.querySelector(".pontuacao")
    const divAssunto=document.querySelector(".assunto")

    const pontos=localStorage.getItem("pontos")

    sectionPontuacao.innerHTML=`
  ${divAssunto.outerHTML}

    <h1>Acessibilidade</h1>

</div>
<strong>${pontos}</strong>
<p>de 10</p>
    `

 }

inserirResultado()