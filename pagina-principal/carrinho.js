document.addEventListener('DOMContentLoaded', () => {
    const btnAdicionar = document.querySelectorAll('.btn_comprar');
    const listaCarrinho = document.getElementById('produtos-CC');
    const valorTotal = document.getElementById('valor-total');
    
    let carrinho = [];

    btnAdicionar.forEach((botao) => {
        botao.addEventListener('click', () => {
            const nome = botao.dataset.nome;
            const preco = Number(botao.dataset.preco)
            const imagem = botao.dataset.img;

            carrinho.push({nome, preco, imagem});

            atualizarCarrinho();
        })
    })

    function atualizarCarrinho() {
        listaCarrinho.innerHTML = '';

        if (carrinho.length === 0) {
            listaCarrinho.innerHTML = '<p>O carrinho está vazio.</p>';
            valorTotal.textContent = 'R$ 0,00';
            return;
        }

        carrinho.forEach((item, index) => {
            const cardItem = document.createElement('div');
            cardItem.classList.add('card_item');

            cardItem.innerHTML = `
                <img src="${item.imagem}">
                <div class = "infoProduto_Carrinho">
                    <h3>${item.nome}</h3>
                    <p>${item.preco}</p>
                    <button class = "btn-delete">Delete</button>
                </div>
            `;

            listaCarrinho.appendChild(cardItem);
        });
    }

});

