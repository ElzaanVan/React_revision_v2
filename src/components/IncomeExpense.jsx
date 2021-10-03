import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"


export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    let amounts = transactions.map((transaction) => transaction.amount);

    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

    let expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

    expense = Math.abs(expense);
    return (
        <div className="income_expense_container">
                <div className="i-e-container">
                    <h4>Income</h4>
                    <p id="money-plus" className="money plus">+R{income}</p>
                </div>
                <div className="i-e-container">
                    <h4>Expense</h4>
                    <p id="money-minus" className="money minus">-R{expense}</p>
                </div>
        </div>
    )
}