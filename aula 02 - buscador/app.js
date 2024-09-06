// Dados dos atletas
let dados = [
    {
        título: "Rayssa Leal",
        descrição: "Rayssa Leal, a Fadinha, é uma skatista brasileira",
        link: "https://pt.wikipedia.org/wiki/Rayssa_Leal",
        tags: "skate fada sk8"
    },
    {
        título: "Beatriz Souza",
        descrição: "Beatriz Souza é uma judoca brasileira que se destacou nas olimpíadas de Paris",
        link: "https://pt.wikipedia.org/wiki/Beatriz_Souza",
        tags: "judô judo judoca judoka"
    },
    {
        título: "Rebeca Andrade",
        descrição: "Rebeca Andrade é uma ginasta brasileira",
        link: "https://pt.wikipedia.org/wiki/Rebeca_Andrade",
        tags: "ginástica ginastica ouro"
    }
];

// Função para pesquisar atletas
function pesquisar() {
    // Obtém o valor do input de pesquisa
    let nome = document.getElementById("input-nome").value.toLowerCase().trim();

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        // Verifica se o nome do atleta inclui o texto de pesquisa
        if (dado.título.toLowerCase().includes(nome)) {
            // Cria um novo HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${dado.link}" target="_blank">${dado.título}</a>
                </h2>
                <p class="descrição-meta">${dado.descrição}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
            `;
        }
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;

    // Se nenhum resultado for encontrado, exibe uma mensagem
    if (resultados === "") {
        section.innerHTML = "<p>Nenhum atleta encontrado.</p>";
    }
}
