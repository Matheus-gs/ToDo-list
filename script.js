// Fazendo o form ficar na mesma tela quando enviar a task
document.forms[0].addEventListener("click", event => {
    event.preventDefault();
})


function addTask() {
    // input
    const inputTask = document.querySelector("form input")

    // Lista
    const taskList = document.querySelector("ul")

    const id = Math.random()
    // Tarefas
    const task = document.createElement("li")
    task.setAttribute("id", id)


    // Div para os botões
    const featuresDiv = document.createElement("div")
    featuresDiv.setAttribute("id", "featuresDiv")

    // botão de remover
    const removeButton = document.createElement("a")
    removeButton.setAttribute("href", "#")
    removeButton.setAttribute("class", "far fa-trash-alt")
    removeButton.setAttribute("onclick", "removeTask(" + id + ")")
    // removeButton.textContent = "X"

    // botão de editar
    const editButton = document.createElement("a")
    editButton.setAttribute("href", "#")
    editButton.setAttribute("class", "far fa-edit")
    editButton.setAttribute("onclick", "editTask(" + id + ")")
    // editButton.textContent = "I"

    // botão de marcar como concluido
    const checkButton = document.createElement("a")
    checkButton.setAttribute("href", "#")
    checkButton.setAttribute("class", "far fa-check-circle")
    checkButton.setAttribute("onclick", "checkTask(" + id + ")")
    // checkButton.textContent = "V"


    // mostrando na tela
    taskList.appendChild(task)
    task.append(inputTask.value)
    task.append(featuresDiv)
    featuresDiv.append(removeButton)
    featuresDiv.append(editButton)
    featuresDiv.append(checkButton)

    // debugging
    console.log(inputTask.value)
    console.log(task)
}

// Apagando a task
function removeTask(id) {
    const removed_task = document.getElementById(id)
    removed_task.remove()
}

// Editando A task
function editTask(id) {
    const edited_task = document.getElementById(id)

    // Trocar por um pop up para editar a task
    const new_task = window.prompt()
    // Colocando o valor do pop up na task
    edited_task.textContent = new_task

    // Div para os botões
    const featuresDiv = document.createElement("div")
    featuresDiv.setAttribute("id", "featuresDiv")

    // botão de remover
    const removeButton = document.createElement("a")
    removeButton.setAttribute("href", "#")
    removeButton.setAttribute("class", "far fa-trash-alt")
    removeButton.setAttribute("onclick", "removeTask(" + id + ")")
    // removeButton.textContent = "X"

    // botão de editar
    const editButton = document.createElement("a")
    editButton.setAttribute("href", "#")
    editButton.setAttribute("class", "far fa-edit")
    editButton.setAttribute("onclick", "editTask(" + id + ")")
    // editButton.textContent = "I"


    // botão de marcar como concluido
    const checkButton = document.createElement("a")
    checkButton.setAttribute("href", "#")
    checkButton.setAttribute("class", "far fa-check-circle")
    checkButton.setAttribute("onclick", "checkTask(" + id + ")")
    // checkButton.textContent = "V"

    // Mostrando na tela
    edited_task.append(featuresDiv)
    featuresDiv.append(removeButton)
    featuresDiv.append(editButton)
    featuresDiv.append(checkButton)
}

function checkTask(id) {
    // Fazendo um risco no texto
    const checked_task = document.getElementById(id)
    checked_task.style.textDecoration = 'line-through'


    const myInterval = setInterval(() => {
        removeTask(id)
        clearInterval(myInterval)
    }, 400);
}