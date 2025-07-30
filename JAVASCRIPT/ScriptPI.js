/* Função Slide Show */
const Imagens = [
    "IMG/img1.png",
    "IMG/img2.png",
    "IMG/img3.png",
    "IMG/img4.png"
];

let ValorAtual = 0;

// Atualização da Imagem Automatica
function AtualizarSlides() {
    ValorAtual = (ValorAtual + 1) % Imagens.length;
    atualizarImagem();
}

// Atualização da Imagem pelo botão
function Direcionar(indice) {
    ValorAtual = indice;
    atualizarImagem();
}

// Função para trocar a imagem e o estilo dos botões
function atualizarImagem() {
    document.getElementById("Imagem").src = Imagens[ValorAtual];

    // Animação dos botões em virtude da imagem
    for (let i = 0; i < Imagens.length; i++) {
        const btn = document.getElementById("btn" + i);
        if (i === ValorAtual) {
            btn.classList.add("ativo");
        } else {
            btn.classList.remove("ativo");
        }
    }
}

// Função de repetição
setInterval(AtualizarSlides, 5000);
/* Fim da Função Slide Show */