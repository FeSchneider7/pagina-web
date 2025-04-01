const produtos = {
    categoria1: [
        { nome: "Produto 1", img: "https://via.placeholder.com/150" },
        { nome: "Produto 2", img: "https://via.placeholder.com/150" },
        { nome: "Produto 3", img: "https://via.placeholder.com/150" },
        { nome: "Produto 4", img: "https://via.placeholder.com/150" },
        { nome: "Produto 5", img: "https://via.placeholder.com/150" },
        { nome: "Produto 6", img: "https://via.placeholder.com/150" },
        { nome: "Produto 7", img: "https://via.placeholder.com/150" },
        { nome: "Produto 8", img: "https://via.placeholder.com/150" }
    ],
    categoria2: [
        { nome: "Produto A", img: "https://via.placeholder.com/150" },
        { nome: "Produto B", img: "https://via.placeholder.com/150" },
        { nome: "Produto C", img: "https://via.placeholder.com/150" },
        { nome: "Produto D", img: "https://via.placeholder.com/150" },
        { nome: "Produto E", img: "https://via.placeholder.com/150" },
        { nome: "Produto F", img: "https://via.placeholder.com/150" },
        { nome: "Produto G", img: "https://via.placeholder.com/150" },
        { nome: "Produto H", img: "https://via.placeholder.com/150" }
    ]
};

function mostrarProdutos(categoria) {
    const produtosContainer = document.getElementById('produtos-container');
    produtosContainer.innerHTML = '';
    
    produtos[categoria].forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <img src="${produto.img}" alt="${produto.nome}">
            <p>${produto.nome}</p>
        `;
        produtosContainer.appendChild(produtoDiv);
    });
    
    document.getElementById('produtos').style.display = 'block';
}
