import { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransactions } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount: +amount
        }
        addTransactions(newTransaction);
    
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form action="" id="form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" name="text" id="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} required />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                    <input type="number" name="amount" id="amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </div>

                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    )
}