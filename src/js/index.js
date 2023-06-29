const botaoAlterarTema = document.getElementById("botao-alterar-tema")
const botaoeikko = document.getElementById("botaoeikko")
const eikko = document.getElementById("eikko");
const imagemtrocartema = document.querySelector(".imagem-botao");
const darkstar = document.querySelector(".logo")
const body = document.querySelector("body");
let contador = 0;

botaoeikko.addEventListener("click", function(){
    contador++;

    if(contador === 11){
        body.classList.add("modo-eikko");
        imagemtrocartema.setAttribute("src", "./src/imagens/eye.png");
        darkstar.setAttribute("src", "./src/imagens/stardark.png");
        eikko.style.display = 'block'
        botaoAlterarTema.disabled = true;
    }
});


botaoAlterarTema.addEventListener("click", () => {
    const modoescuroativo = body.classList.contains("modo-escuro");

    if (modoescuroativo) {
        body.classList.remove("modo-escuro")
        imagemtrocartema.setAttribute("src", "./src/imagens/sun.png");
    }else {
        body.classList.add("modo-escuro");
        imagemtrocartema.setAttribute("src", "./src/imagens/moon.png");

    }
})



