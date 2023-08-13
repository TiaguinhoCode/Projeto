document.addEventListener("DOMContentLoaded", function() {

    /* Pega meu ID */
    const produtosDiv = document.getElementById("produtos-container");

    /* Vou fazer requisição */
    fetch("../dados/produtos.json")
        .then(response => response.json())
        .then(data => {
            const produtos = data.produtos;
            var produtosHTML = "<ul>";

            produtos.forEach(produto => {
                produtosHTML += `
            <li>
                ID: ${produto.ID}<br>
                <strong>Produto: ${produto.descricao}</strong><br>
                Código de Barras: ${produto.codigo_de_barras}<br>
                Preço de Varejo: R$ ${produto.preco_de_varejo}<br>
                Preço de Atacado: R$ ${produto.preco_de_atacado}<br>
                Estoque: ${produto.estoque}<br>
                Última Compra: ${produto.data_da_ultima_compra}
            </li>
          `;
            });

            produtosHTML += "</ul>";
            produtosDiv.innerHTML = produtosHTML;
        })
        .catch(error => {
            console.error("Erro ao carregar os produtos:", error);
        });
});