/* Função Slide Show */
const Imagens = [
    "IMG/Logo.jpeg",
    "IMG/Ifood.jpg",
    "IMG/AceitamosEncomendas.jpeg",
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

/* Animação Section */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, {
    threshold: 0.2 // 20% visível já ativa
});

document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
});
