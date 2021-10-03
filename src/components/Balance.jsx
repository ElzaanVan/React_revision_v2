import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"


export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    let amounts = transactions.map((transaction) => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);
    return (
        <>
        <h4>Your Balance</h4>
        <h1 id="balance">R{(total)}</h1>
        </>
    )
}