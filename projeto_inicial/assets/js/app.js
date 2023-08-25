// 1 - Acessando os elementos e declarando em variavéis

// 2 - Visualizando o texto da task

// 3 - Trocando texto da task


//1
const inCampoTexto = document.querySelector('.form-input');

const btNovoItem = document.querySelector('.form-button');

let inList = document.querySelector('.list');

let tarefa = document.querySelector('.task');

let tarefaTexto = document.querySelector('.content');


//2
console.log(tarefaTexto.textContent)


//3
tarefaTexto.textContent = "Novo texto"
