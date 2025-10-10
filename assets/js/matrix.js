    // MATRIX EFFECT — versão otimizada por GPT-5
    (() => {
    // Cria o canvas
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // Define tamanho inicial
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Configura fonte e colunas
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    // Função principal de desenho
    function draw() {
        // Fundo translúcido (para o rastro)
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        // Desenha letras em cada coluna
        for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reinicia a coluna ao fim da tela, aleatoriamente
        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
        }

        // Chama o próximo frame
        requestAnimationFrame(draw);
    }

    // Redimensiona dinamicamente
    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
    });

    // Inicia a animação
    draw();
    })();
