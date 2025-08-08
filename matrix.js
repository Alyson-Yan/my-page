// Função para gerar um número aleatório dentro de um intervalo
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para criar e adicionar uma coluna à "matrix"
function createMatrixColumn(index, container) {
    const column = document.createElement('div');
    column.classList.add('column');
    column.style.left = `${index * 20}px`; // Posiciona a coluna horizontalmente
    column.innerText = '0'; // Inicializa com '0'

    // Adiciona a coluna ao container
    container.appendChild(column);

    // Definir um delay aleatório para a animação de cada coluna
    const animationDelay = getRandomInt(1, 5) + 's';
    column.style.animationDelay = animationDelay;
}

// Função para inicializar o efeito Matrix
function startMatrixEffect() {
    const matrixContainer = document.getElementById('matrix');
    const numColumns = Math.floor(window.innerWidth / 20); // Número de colunas baseado na largura da tela

    // Cria as colunas dinamicamente
    for (let i = 0; i < numColumns; i++) {
        createMatrixColumn(i, matrixContainer);
    }
}

// Função para iniciar o efeito após o carregamento da página
window.onload = startMatrixEffect;
