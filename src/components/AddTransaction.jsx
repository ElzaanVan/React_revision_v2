export const AddTransaction = () => {
    return (
        <div>
            <h3>Add new Transaction</h3>
            <form action="" id="form">
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" name="text" id="text" placeholder="Enter text..." required />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
                    <input type="number" name="amount" id="amount" placeholder="Enter amount..." required />
                </div>
            </form>
        </div>
    )
}