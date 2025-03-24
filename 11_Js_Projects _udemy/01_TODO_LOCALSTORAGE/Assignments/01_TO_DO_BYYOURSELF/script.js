document.addEventListener('DOMContentLoaded',() => {
    const todoInput = document.getElementById('todo-input')
    const addTask = document.getElementById('add-task-btn')
    const todoList = document.getElementById('todo-list')

    let tasks = JSON.parse(localStorage.getItem('tasks')) || []

    tasks.forEach(task => renderTasks(task))

    addTask.addEventListener('click', () => {
        const taskText = todoInput.value.trim()
        if(todoInput === '') return

        const newTask = {
            id : Date.now(),
            text : taskText,
            isCompleted : false
        }
        tasks.push(newTask)
        saveTasks();
        renderTasks(newTask)
        todoInput.value = '' // to clear the input
        console.log(tasks)

    })

    function renderTasks(task){ //this will pickup the tasks form the local storage and we will grab it
        const li = document.createElement('li')
        li.setAttribute('data-id', task.id)
        if(task.completed) li.classList.add('completed')

        li.innerHTML = `
        <span>${task.text}</span>
        <button>Delete</button>
        `
        li.addEventListener('click',(e)=>{
            if(e.target.tagName === 'BUTTON') return
            task.completed = !task.completed
            li.classList.toggle('completed')
            saveTasks()
        })
        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation() //this is to prevent toggle from firing
            tasks = tasks.filter(t => t.id !== task.id)
            li.remove()
            saveTasks()
        })

        todoList.appendChild(li)
    }
    function saveTasks(){ // this function is used to add tasks to the local storage
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

})