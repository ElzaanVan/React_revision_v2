export const TransactionList = () => {
    return (
        <div className="trans-list">
            <h3>History</h3>
            <ul id="list" className="list">
                <li className="minus">
                    Cash <span>-R200</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}