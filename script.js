document.addEventListener('DOMContentLoaded', function () {
    const cardapio = {
        "lanches": {
            "grifinoria": {
                "preco": 12.00,
                "ingredientes": [
                    "molho",
                    "2 salsichas",
                    "cheddar",
                    "bacon",
                    "milho",
                    "batata palha",
                    "maionese",
                    "ketchup",
                    "mostarda",
                ],
            },
            "sonserina": {
                "preco": 11.00,
                "ingredientes": [
                    "molho",
                    "2 salsichas",
                    "purê de batata",
                    "mussarela",
                    "milho",
                    "batata palha",
                    "ketchup",
                    "mostarda",
                    "maionese",
                ],
            },
            "lufa-lufa": {
                "preco": 10.00,
                "ingredientes": [
                    "molho",
                    "2 salsichas",
                    "mussarela",
                    "milho",
                    "batata palha",
                    "maionese",
                    "ketchup",
                    "mostarda",
                ],
            },
            "corvinal": {
                "preco": 8.00,
                "ingredientes": [
                    "molho",
                    "1 salsicha",
                    "milho",
                    "batata palha",
                    "maionese",
                    "ketchup",
                    "mostarda",
                ],
            },
        },
        "adicionais": {
            "cheddar": 1.00,
            "bacon": 2.00,
            "mussarela": 1.50,
            "maionese caseira": 1.00,
            "alface": 1.00,
            "salsicha": 1.00,
            "purê de batata": 1.50,
        },
        "bebidas": {
            "refrigerante mini": 3.00,
            "coca cola 350ml": 5.00,
            "água com gás": 3.50,
            "água sem gás": 3.00,
        },
    };

    const generateButton = document.getElementById('generateButton');
    const randomPedidoElement = document.getElementById('randomPedido');
    const randomTituloPedidoElement = document.getElementById('randomTituloPedido');
    
    let isButtonDisabled = false;

    generateButton.addEventListener('click', function () {
        if (isButtonDisabled) return; // Evita cliques repetidos enquanto o temporizador está ativo
        isButtonDisabled = true;
        generateButton.disabled = true; // Desabilita o botão para evitar cliques repetidos
        generateButton.classList.add("disabled");
        randomTituloPedidoElement.innerHTML = `
            <p>sonserina não... sonserina não<p/>
            <img id="chapéu-seletor" src="imagens/chapeu.png" alt="Chapéu Seletor" style="width: 100px; height: 100px;">`;


        const lanches = Object.keys(cardapio.lanches);
        const randomLancheKey = lanches[Math.floor(Math.random() * lanches.length)];
        const randomLanche = cardapio.lanches[randomLancheKey];

        const adicionais = Object.keys(cardapio.adicionais);
        const randomAdicionalKey = adicionais[Math.floor(Math.random() * adicionais.length)];
        const randomAdicionalPrice = cardapio.adicionais[randomAdicionalKey];

        const bebidas = Object.keys(cardapio.bebidas);
        const randomBebidaKey = bebidas[Math.floor(Math.random() * bebidas.length)];
        const randomBebidaPrice = cardapio.bebidas[randomBebidaKey];
        const imgPath = `imagens/${randomLancheKey}.png`;

        const totalPrice = randomLanche.preco + randomAdicionalPrice + randomBebidaPrice;
        setTimeout(function () {
            isButtonDisabled = false;
            generateButton.disabled = false; // Habilita o botão após 5 segundos
            generateButton.classList.remove("disabled");
            randomTituloPedidoElement.innerHTML = `
                <h2 class="${randomLancheKey}">${randomLancheKey}</h2>
                <img src="${imgPath}" alt="${randomLancheKey}" style="width: 100px; height: 100px;">
                `;

            randomPedidoElement.innerHTML = `
                <p><strong>Preço do Lanche:</strong> R$ ${randomLanche.preco.toFixed(2)}</p>
                <p><strong>Ingredientes:</strong> ${randomLanche.ingredientes.join(', ')}</p>
                <p><strong>Adicional:</strong> ${randomAdicionalKey} (+ R$ ${randomAdicionalPrice.toFixed(2)})</p>
                <p><strong>Bebida:</strong> ${randomBebidaKey} (+ R$ ${randomBebidaPrice.toFixed(2)})</p>
                <p><strong>Total:</strong> R$ ${totalPrice.toFixed(2)}</p>
            `;
        }, 5000); // Atraso de 5 segundos (5000 milissegundos)
    });
});
