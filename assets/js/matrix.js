// MATRIX EFFECT — versão adaptada GPT-5
(() => {
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, width, height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        const centerWidth = width * 0.8;
        const leftBoundary = (width - centerWidth) / 2;
        const rightBoundary = leftBoundary + centerWidth;

        for (let i = 0; i < drops.length; i++) {
            const x = i * fontSize;
            if (x < leftBoundary || x > rightBoundary) {
                const text = String.fromCharCode(0x30A0 + Math.random() * 96);
                const y = drops[i] * fontSize;
                ctx.fillText(text, x, y);

                if (y > height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }

        requestAnimationFrame(draw);
    }

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        columns = Math.floor(width / fontSize);
        drops = Array(columns).fill(1);
    }

    window.addEventListener('resize', resizeCanvas);
    draw();
})();
