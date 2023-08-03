const form = document.getElementById('form-contato');
let linhas = '';
const nome = [];
const numero = [];

form.addEventListener('submit', function(e) {
    e.preventDefault(e);

    adicionaLinha();
    atualizaAgenda();

    

});

function adicionaLinha() {
    const inputnome = document.getElementById('nome-contato');
    const inputddd = document.getElementById('ddd-contato');
    const inputNumero = document.getElementById('numero-contato');

    if(nome.includes(inputnome.value)){
        alert(`O nome ${inputnome.value} ja foi inserido na sua agenda !`)
    } else {
        nome.push(inputnome.value);
        numero.push(parseFloat(inputNumero));

    let linha = '<tr>';
    linha += `<td>${inputnome.value}</td>`;
    linha += `<td>${inputddd.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }

    inputnome.value = '';
    inputddd.value = '';
    inputNumero.value = '';

}

function atualizaAgenda() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}