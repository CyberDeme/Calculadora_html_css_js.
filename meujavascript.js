 alert("Seja Bem-Vindo!")

 function calculadora() {
    // Obtém os valores de entrada
    var valor1 = parseFloat(document.getElementById('iValor1').value);
    var valor2 = parseFloat(document.getElementById('iValor2').value);
    
    // Verifica qual operação foi selecionada
    var operacao = document.querySelector('input[name="calc"]:checked');
    
    // Verifica se todos os campos necessários foram preenchidos
    if (isNaN(valor1) || isNaN(valor2)) {
        alert('Por favor, insira números válidos!');
        return;
    }

    if (!operacao) {
        alert('Por favor, selecione uma operação!');
        return;
    }

    // Realiza a operação
    var resultado;
    switch (operacao.value) {
        case 'soma':
            resultado = valor1 + valor2;
            break;
        case 'subtracao':
            resultado = valor1 - valor2;
            break;
        case 'multiplicacao':
            resultado = valor1 * valor2;
            break;
        case 'divisao':
            if (valor2 === 0) {
                alert('Divisão por zero não é permitida!');
                return;
            }
            resultado = valor1 / valor2;
            break;
        default:
            alert('Operação inválida!');
            return;
    }

    // Exibe o resultado
    alert('O resultado é: ' + resultado);
}
