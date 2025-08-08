function efeitoMatrix(neo) {
    // Variáveis globais
    var tela = window.screen;
    var largura = neo.width = tela.width;
    var altura = neo.height = tela.height;
    var letras = Array(256).join(1).split('');
    
    // Desenha o efeito matrix na tela
    var desenhaMatrix = function () {
        var ctx = neo.getContext('2d');
        
        // Fundo Preto e transparência em .05
        ctx.fillStyle = 'rgba(0,0,0,.05)';
        ctx.fillRect(0, 0, largura, altura);

        // Letras verdes
        ctx.fillStyle = '#0F0';

        // Desenha as letras em cada coluna
        letras.map(function (posicao_y, index) {
            var texto = String.fromCharCode(48 + Math.random() * 33);
            var posicao_x = index * 10;
            ctx.fillText(texto, posicao_x, posicao_y);

            // Movimenta as letras para baixo, reinicia a coluna quando chega ao final
            letras[index] = (posicao_y > altura + Math.random() * 1e4) ? 0 : posicao_y + 10;
        });
    }

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
