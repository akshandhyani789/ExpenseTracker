import { useCallback, useState, useEffect } from "react";
import { Navbar, Balance, Transaction, TransactionHistory, MonthlyTransaction } from "./Componants";

function App() {
  const [allTransactions, setAllTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [latestTransaction, setLatestTransaction] = useState(() => {
    const saved = localStorage.getItem("latestTransaction");
    return saved ? JSON.parse(saved) : null;
  });

  const [balance, setBalance] = useState(() => {
    const saved = localStorage.getItem("balance");
    if (saved) return JSON.parse(saved);

    // If nothing in localStorage → calculate from transactions
    return 0;
  });

  // Sync all to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(allTransactions));
    localStorage.setItem("balance", JSON.stringify(balance));
    localStorage.setItem("latestTransaction", JSON.stringify(latestTransaction));
  }, [allTransactions, balance, latestTransaction]);

  // Add new transaction
  const handleTransaction = useCallback((transaction) => {
    const createdAt = new Date().toISOString();
    const formatted = new Date().toLocaleString();

    const tx = {
      ...transaction,
      id: Date.now(),
      displaydate: formatted,
      date: createdAt
    };

    setAllTransactions(prev => [...prev, tx]);
    setBalance(prev => prev + tx.amount);
    setLatestTransaction(tx);

  }, []);

  // Delete transaction
  const handleDelete = useCallback((id) => {
    setAllTransactions(prev => {
      const updated = prev.filter(item => item.id !== id);
      
      // Recalculate balance after deletion
      const newBalance = updated.reduce((acc, item) => acc + item.amount, 0);
      setBalance(newBalance);

      return updated;
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <div className="flex justify-between items-center p-10 flex-col xl:flex-row">
        <Transaction onSubmitTransaction={handleTransaction} balance={balance}/>
        <div>
        <Balance balance={balance} allTransactions={allTransactions} />
        <MonthlyTransaction allTransactions={allTransactions}/>
        </div>
      </div>
      <TransactionHistory history={allTransactions} deleteOne={handleDelete} />
    </div>
  );
}

export default App;
