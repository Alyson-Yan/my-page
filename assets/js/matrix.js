function efeitoMatrix(neo) {
    // Variáveis globais
    var tela = window.screen;
    var largura = neo.width = tela.width;
    var altura = neo.height = tela.height;
    var letras = Array(256).join(1).split('');
    
    // Ajuste para desenhar o efeito nas bordas (margens)
    var desenhaMatrix = function () {
        var ctx = neo.getContext('2d');
        
        // Fundo Preto e transparência em .05
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(0, 0, largura, altura);
        
        // Letras verdes
        ctx.fillStyle = '#0F0';

        // Definindo as posições para as bordas (margens)
        letras.map(function (posicao_y, index) {
            var texto = String.fromCharCode(48 + Math.random() * 33);
            
            // Para a borda esquerda
            var posicao_x = index * 10;
            if (posicao_x < 100) {
                ctx.fillText(texto, posicao_x, posicao_y);
            }

            // Para a borda direita
            if (posicao_x > largura - 100) {
                ctx.fillText(texto, posicao_x, posicao_y);
            }

            // Para as bordas superior e inferior
            if (posicao_y < 100 || posicao_y > altura - 100) {
                ctx.fillText(texto, posicao_x, posicao_y);
            }

            // Movimenta as letras para baixo, reinicia a coluna quando chega ao final
            letras[index] = (posicao_y > altura + Math.random() * 1e4) ? 0 : posicao_y + 10;
        });
    };

    // Inicia a animação do efeito
    setInterval(desenhaMatrix, 60);
}

// Função de carregar a página e passar o id do canvas para a função
function carregar() {
    var canvas = document.getElementById('canvas');
    efeitoMatrix(canvas);
}

// Chama a função carregar quando a página estiver pronta
window.onload = carregar;