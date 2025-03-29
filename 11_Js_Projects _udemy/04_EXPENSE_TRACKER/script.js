document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expense-form');
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseList = document.getElementById('expense-list')
    const totalAmountDisplay = document.getElementById('total-amount');

    let expenses = []
    let totalAmount = calculateTotal()

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
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
        }
    })

    function calculateTotal(){

    }
    function saveExpensesTolocal(){
        localStorage.setItem("expenses", JSON.stringify(expenses)) //we can't save expenses directly so we have to do JSON.stringify
    }

})

