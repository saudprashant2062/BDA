document.addEventListener('DOMContentLoaded', () => {

    let expenses = loadExpenses();
    
    const form = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');
    const totalAmount = document.getElementById('totalAmount');
    const expenseName = document.getElementById('expenseName');
    const expenseAmount = document.getElementById('expenseAmount');

    form.addEventListener('submit', handleFormSubmit);
    expenseList.addEventListener('click', handleListClick); 

    render();

    function handleFormSubmit(e) {
        e.preventDefault();
        
        const name = expenseName.value.trim();
        const amount = parseFloat(expenseAmount.value);
        
        if (name && amount > 0) {
            addExpense(name, amount);
            form.reset();
            expenseName.focus();
        }
    }

    function handleListClick(e) {

        if (e.target.classList.contains('delete-btn')) {
            const id = e.target.dataset.id;
            deleteExpense(id);
        }
    }

    function addExpense(name, amount) {
        const expense = {
            id: Date.now().toString(),
            name,
            amount
        };
        
        expenses.push(expense);
        saveExpenses();
        render();
    }

    function deleteExpense(id) {
        expenses = expenses.filter(expense => expense.id !== id);
        saveExpenses();
        render();
    }

    function calculateTotal() {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    function render() {

        if (expenses.length === 0) {
            expenseList.innerHTML = '<li class="text-gray-400 text-center py-4">No expenses yet</li>';
        } else {
            expenseList.innerHTML = expenses.map(expense => `
                <li class="flex items-center justify-between bg-zinc-800 rounded-lg p-4 hover:bg-zinc-750 transition-colors">
                    <div class="flex-1">
                        <span class="text-white font-medium">${escapeHtml(expense.name)}</span>
                    </div>
                    <div class="flex items-center gap-4">
                        <span class="text-green-400 font-semibold">$${expense.amount.toFixed(2)}</span>
                        <button 
                            class="delete-btn bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                            data-id="${expense.id}"
                        >
                            Delete
                        </button>
                    </div>
                </li>
            `).join('');
        }
        
        totalAmount.textContent = calculateTotal().toFixed(2);
    }

    function saveExpenses() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    function loadExpenses() {
        const stored = localStorage.getItem('expenses');
        return stored ? JSON.parse(stored) : [];
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});