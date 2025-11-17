import {useState, useEffect} from "react"

function MonthlyTransaction({allTransactions}){


const [monthlyTransactions, setMonthlyTransactions] = useState([]);
  const [monthlyBalance, setMonthlyBalance] = useState(0);

  useEffect(() => {
    const now = new Date();
    const month = now.getMonth();
    const year = now.getFullYear();

    const filtered = allTransactions.filter(t => {
      const d = new Date(t.date);
      return d.getMonth() === month && d.getFullYear() === year;
    });

    const balance = filtered.reduce((acc, t) => acc + t.amount, 0);

    setMonthlyTransactions(filtered);
    setMonthlyBalance(balance);
  }, [allTransactions]);


    return(
        <div>
             <div className=" bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-xl p-6 w-96  mt-10 text-white h-50 ">
        <h2 className="text-2xl">
          This Month
        </h2>
        <div className="flex flex-col mt-20  ">
        <span id="balance">₹{monthlyBalance}</span>
        <span id="transationNum">{monthlyTransactions.length} Total Transation</span>
        </div>
      
    </div>
        </div>
    )
}

export default MonthlyTransaction