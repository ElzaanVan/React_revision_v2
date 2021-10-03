import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext);
    return (
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span className="amount">{sign}R{Math.abs(transaction.amount).toFixed(2)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>
    )
  }