function efeitoMatrix(neo) {
    // Inicializa o tamanho do canvas
    var largura = neo.width = window.innerWidth;
    var altura = neo.height = window.innerHeight;

    // Array que controla a posição vertical de cada coluna de letras
    var letras = Array(256).join(1).split('');

    // Função que desenha o efeito Matrix
    function desenhaMatrix() {
        var ctx = neo.getContext('2d');

        // Fundo preto
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(0, 0, largura, altura);

        // Letras verdes
        ctx.fillStyle = '#0F0';

        letras.map(function(posicao_y, index) {
            var texto = String.fromCharCode(48 + Math.random() * 33); // caracteres aleatórios
            var posicao_x = index * 10;

            // Bordas esquerda
            if (posicao_x < 100) ctx.fillText(texto, posicao_x, posicao_y);

            // Bordas direita
            if (posicao_x > largura - 100) ctx.fillText(texto, posicao_x, posicao_y);

            // Bordas superior e inferior
            if (posicao_y < 100 || posicao_y > altura - 100) ctx.fillText(texto, posicao_x, posicao_y);

            // Atualiza posição vertical da letra
            letras[index] = (posicao_y > altura + Math.random() * 1e4) ? 0 : posicao_y + 10;
        });
    }

    // Inicia a animação
    var animacao = setInterval(desenhaMatrix, 60);

    // Função para ajustar canvas ao redimensionar a tela
    window.addEventListener('resize', function() {
        largura = neo.width = window.innerWidth;
        altura = neo.height = window.innerHeight;

        // Reinicializa posições das letras
        letras = Array(256).join(1).split('');
    });
}

// Função de inicialização ao carregar a página
function carregar() {
    var canvas = document.getElementById('canvas'); // ID do canvas no HTML
    efeitoMatrix(canvas);
}

// Chama a função carregar quando a página estiver pronta
window.onload = carregar;
