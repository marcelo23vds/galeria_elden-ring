'use strict'

const imagens = [
    {
        nome: "MESA REDONDA",
        url: './img/1.jpeg'
    },
    {
        nome: "DRAGÃO",
        url: './img/2.jpg'
    },
    {
        nome: "CASTELO DO GODRICK",
        url: './img/3.jpg'
    },
    {
        nome: "TERRAS INTERMÉDIAS",
        url: './img/4.jpeg'
    },
    {
        nome: "ÁRVORE SACRA",
        url: './img/5.jpg'
    },
    {
        nome: "ALEXSANDER",
        url: './img/6.jpg'
    },
    {
        nome: "DENTRO DA ÁRVORE",
        url: './img/7.png'
    },
    {
        nome: "FINAL DA LUA",
        url: './img/8.jpeg'
    },
    {
        nome: "ELDEN RING",
        url: './img/9.jpg'
    }
]

function criarImagem(srcImagem){
        const galeria = document.getElementById('galeria')

        const imagem = document.createElement('img')
        const legenda = document.createElement('span')

        imagem.src = srcImagem.url
        legenda.textContent = srcImagem.nome

        galeria.appendChild(imagem)
        galeria.appendChild(legenda)
}

function carregarImagens(){
    imagens.forEach(criarImagem)
}

carregarImagens()