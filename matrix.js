function efeitoMatrix(neo) {
    var largura = neo.width = window.innerWidth;
    var altura = neo.height = window.innerHeight;
    var letras = Array(256).join(1).split('');

    function desenhaMatrix() {
        var ctx = neo.getContext('2d');
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(0, 0, largura, altura);
        ctx.fillStyle = '#0F0';

        letras.map(function(pos_y, index) {
            var texto = String.fromCharCode(48 + Math.random() * 33);
            var pos_x = index * 10;

            if (pos_x < 100 || pos_x > largura - 100 || pos_y < 100 || pos_y > altura - 100) {
                ctx.fillText(texto, pos_x, pos_y);
            }

            letras[index] = (pos_y > altura + Math.random() * 1e4) ? 0 : pos_y + 10;
        });
    }

    setInterval(desenhaMatrix, 60);
}

function carregar() {
    var canvas = document.getElementById('canvas');
    efeitoMatrix(canvas);
}

window.onload = carregar;
