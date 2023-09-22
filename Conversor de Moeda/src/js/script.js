const taxasDeCambio = {
    BRL: {
        USD: 0.20,
        EUR: 0.19,
        ARS: 71.22
    },
    USD: {
        BRL: 4.92,
        EUR: 0.94,
        ARS: 350.03
    },
    EUR: {
        BRL: 5.24,
        USD: 1.07,
        ARS: 373.06
    },
    ARS: {
        BRL: 0.014,
        USD: 0.0029,
        EUR: 0.0027
    }
};

//função para fazer a conversão de moeda quando o botão for clicado.
function converterMoeda() {

    //Essas linhas obtêm os valores selecionados pelo usuário no formulário HTML. moedaOrigem e moedaDestino representam as moedas selecionadas, e valorOrigem é o valor a ser convertido.
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
    const valorOrigem = parseFloat(document.getElementById("valorOrigem").value);

    //Verifica se o valor de entrada (valorOrigem) é um número válido. Se não for, exibe um alerta ao usuário e volta pra função.
    if (isNaN(valorOrigem)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    //Neste trecho, verifica se as moedas de origem e destino são iguais. Se forem, simplesmente exibe o valor de origem.
    //Caso contrário, usa a taxa de câmbio correspondente no objeto taxasDeCambio para calcular o valor convertido e o exibe elemento o HTML com o id "resultado".
    //A função toFixed(2) é usada para formatar o resultado com duas casas decimais.
    if (moedaOrigem === moedaDestino) {
        document.getElementById("resultado").textContent = valorOrigem.toFixed(2) + " " + moedaDestino;
    } else {
        const taxaDeCambio = taxasDeCambio[moedaOrigem][moedaDestino];
        const valorConvertido = valorOrigem * taxaDeCambio;
        document.getElementById("resultado").textContent = valorConvertido.toFixed(2) + " " + moedaDestino;
    }
}