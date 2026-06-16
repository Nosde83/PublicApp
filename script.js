// Produtos de exemplo
const produtos = [
    {
        id: 1,
        nome: 'Smartphone',
        descricao: 'Smartphone de última geração',
        preco: '25,000 Kz',
        emoji: '📱'
    },
    {
        id: 2,
        nome: 'Laptop',
        descricao: 'Laptop potente para trabalho',
        preco: '80,000 Kz',
        emoji: '💻'
    },
    {
        id: 3,
        nome: 'Fone Bluetooth',
        descricao: 'Fone com som de alta qualidade',
        preco: '5,000 Kz',
        emoji: '🎧'
    },
    {
        id: 4,
        nome: 'Câmera Digital',
        descricao: 'Câmera profissional HD',
        preco: '35,000 Kz',
        emoji: '📷'
    },
    {
        id: 5,
        nome: 'Tablet',
        descricao: 'Tablet com tela grande',
        preco: '30,000 Kz',
        emoji: '📲'
    },
    {
        id: 6,
        nome: 'Smartwatch',
        descricao: 'Relógio inteligente',
        preco: '15,000 Kz',
        emoji: '⌚'
    }
];

let carrinho = [];

// Carregar produtos ao iniciar
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    carregarCarrinho();
});

function carregarProdutos() {
    const grid = document.getElementById('produtos-grid');
    grid.innerHTML = produtos.map(produto => `
        <div class="produto-card">
            <div class="produto-imagem">${produto.emoji}</div>
            <div class="produto-info">
                <div class="produto-nome">${produto.nome}</div>
                <div class="produto-descricao">${produto.descricao}</div>
                <div class="produto-preco">${produto.preco}</div>
                <button class="btn-comprar" onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
            </div>
        </div>
    `).join('');
}

function adicionarAoCarrinho(produtoId) {
    const produto = produtos.find(p => p.id === produtoId);
    carrinho.push(produto);
    salvarCarrinho();
    atualizarContagemCarrinho();
    alert(`${produto.nome} adicionado ao carrinho!`);
}

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregarCarrinho() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
        atualizarContagemCarrinho();
    }
}

function atualizarContagemCarrinho() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = carrinho.length;
}

function scrollToProducts() {
    document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
}