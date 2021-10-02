import { useState } from "react"

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    return (
        <div>
            <h3>Add New Transaction</h3>
            <form action="" id="form">
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