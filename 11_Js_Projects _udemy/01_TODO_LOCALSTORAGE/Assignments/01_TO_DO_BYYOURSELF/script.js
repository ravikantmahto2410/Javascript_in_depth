const todoInput = document.getElementById('todo-input')
const addTask = document.getElementById('add-task-btn')
const todoList = document.getElementById('todo-list')


let tasks = []

addTask.addEventListener('click', () => {
    const taskText = todoInput.value.trim()
    if(todoInput === '') return

    document.createElement(li)
    
    const newTask = {
        id : Date.now(),
        text : taskText,
        isCompleted : false
    }

    todoInput.value = '' // to clear the input

})