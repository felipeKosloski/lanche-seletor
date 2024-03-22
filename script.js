document.addEventListener('DOMContentLoaded', function() {
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

    generateButton.addEventListener('click', function() {
        const lanches = Object.keys(cardapio.lanches);
        const randomLancheKey = lanches[Math.floor(Math.random() * lanches.length)];
        const randomLanche = cardapio.lanches[randomLancheKey];
        
        const adicionais = Object.keys(cardapio.adicionais);
        const randomAdicionalKey = adicionais[Math.floor(Math.random() * adicionais.length)];
        const randomAdicionalPrice = cardapio.adicionais[randomAdicionalKey];

        const bebidas = Object.keys(cardapio.bebidas);
        const randomBebidaKey = bebidas[Math.floor(Math.random() * bebidas.length)];
        const randomBebidaPrice = cardapio.bebidas[randomBebidaKey];

        const totalPrice = randomLanche.preco + randomAdicionalPrice + randomBebidaPrice;

        randomPedidoElement.innerHTML = `
            <h2 class="${randomLancheKey}">${randomLancheKey}</h2>
            <p>Preço do Lanche: R$ ${randomLanche.preco.toFixed(2)}</p>
            <p>Ingredientes: ${randomLanche.ingredientes.join(', ')}</p>
            <p>Adicional: ${randomAdicionalKey} (+ R$ ${randomAdicionalPrice.toFixed(2)})</p>
            <p>Bebida: ${randomBebidaKey} (+ R$ ${randomBebidaPrice.toFixed(2)})</p>
            <p>Total: R$ ${totalPrice.toFixed(2)}</p>
        `;
    });
});
