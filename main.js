'use strict'

const imagens = [
    {
        nome: "Mesa redonda",
        url: './img/1.jpeg'
    },
    {
        nome: "Dragão",
        url: './img/2.jpg'
    },
    {
        nome: "Castelo do Godrick",
        url: './img/3.jpg'
    },
    {
        nome: "Terras intermédias",
        url: './img/4.jpeg'
    },
    {
        nome: "Árvore Sacra",
        url: './img/5.jpg'
    },
    {
        nome: "Alexsander",
        url: './img/6.jpg'
    },
    {
        nome: "Dentro da Arvore",
        url: './img/7.png'
    },
    {
        nome: "Final da Lua",
        url: './img/8.jpeg'
    },
    {
        nome: "Elden Ring",
        url: './img/9.jpg'
    }
]

function criarImagem(srcImagem){
        const galeria = document.getElementById('galeria')
        const imagem = document.createElement('img')
        imagem.src = srcImagem.url
        galeria.appendChild(imagem)
}

function carregarImagens(){
    const galeria = document.getElementById('galeria')

    // let contador = 0
    // while(contador <= 7) {
    //     const imagem = document.createElement('img')
    //     imagem.src = imagens[contador]
    //     galeria.appendChild(imagem)
    //     contador++
    // }

    imagens.forEach(criarImagem)
    
}

carregarImagens()