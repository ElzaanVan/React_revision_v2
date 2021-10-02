import './App.css';
import { Balance } from './components/Balance';
import { Header } from "./components/Header";
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <div className="App">
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
    </div>
  );
}

export default App;
