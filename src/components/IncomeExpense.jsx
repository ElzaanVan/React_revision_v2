export const IncomeExpense = () => {
    return (
        <div className="income_expense_container">
                <div className="i-e-container">
                    <h4>Income</h4>
                    <p id="money-plus" className="money plus">+R0.00</p>
                </div>
                <div className="i-e-container">
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus">-R0.00</p>
                </div>
        </div>
    )
}