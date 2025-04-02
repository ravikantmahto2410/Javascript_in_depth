document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list')
    const totalAmountDisplay = document.getElementById('total-amount');

    let expenses = JSON.parse(localStorage.getItem("expenses")) || []
    let totalAmount = calculateTotal()

    renderExpenses();

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();//because we want to grab the only  after form submission
        const name = expenseNameInput.value.trim()
        // console.log(typeof expenseAmountInput.value.trim()); //Note : whenever any form is submitted , no matter where , every single input comes in the 'String' Format

        const amount = parseFloat(expenseAmountInput.value.trim());
        if(name !== "" && !isNaN(amount) && amount > 0){
            const newExpense = {
                id: Date.now(),
                name: name,
                amount: amount,

                /*we can also write also like this 
                    id: Date.now(),
                    name,
                    amount

                    if we write just name and amount like this internally means that the  key and value are same

                */
            }
            expenses.push(newExpense)
            saveExpensesTolocal() //for storing the expenses to the local storage
            renderExpenses()
            updateTotal();

            //lets clear input
            expenseNameInput.value=""
            expenseAmountInput.value=""

        }
    })

    function renderExpenses(){
        expenseList.innerHTML = ""
        expenses.forEach(expense => {
            const li = document.createElement('li')
            li.innerHTML= `
            ${expense.name} - ${expense.amount}
            <button data-id="${expense.id}">Delete</button>
            `
            expenseList.appendChild(li)
        })
    }

    function calculateTotal(){
        return expenses.reduce((sum, expense) => sum + expense.amount, 0) //here 0 is initial value
    }
    function saveExpensesTolocal(){
        localStorage.setItem("expenses", JSON.stringify(expenses)) //we can't save expenses directly so we have to do JSON.stringify
    }

    function updateTotal(){
        totalAmount = calculateTotal()
        totalAmountDisplay.textContent = totalAmount.toFixed(2);
    }

    expenseList.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON'){
            const expenseId = parseInt(e.target.getAttribute('data-id'))
            expenses = expenses.filter(expense => expense.id !== expenseId)

            saveExpensesTolocal()
            renderExpenses()
        }
    })
})

