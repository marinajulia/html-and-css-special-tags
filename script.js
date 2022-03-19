var nome = '';

if(typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome");
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;

//spread operator para juntar dados de um array em outro ou um objeto em outro:

let pessoa = {
    nome: "Matheus",
    idade: 34,
    cargo: "Programador"
}
console.log("pessoa com spread: ", pessoa);

let novaPessoa = {
    ...pessoa,
    ano: 200,
    cidade: "Franca"
}

console.log("Pessoa nova com spreads: ", novaPessoa);

//rest operator:

function minhaLista(...nomes){
console.log("Com rest: ", nomes);
}
minhaLista("Matheus", "Lucas", "Joao");