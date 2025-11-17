import { useState, useCallback } from "react";
import Balance from "./Balance";

function Transaction({onSubmitTransaction,balance}) {
  
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");

    let isDisplayed = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello")
    if (!desc || !amount) return;
    if((balance>0&&amount>balance) && !isDisplayed){
      console.log("you are going out of your balance")
      isDisplayed = true;
    }
    let transaction = {desc,amount : parseInt(amount)}
    onSubmitTransaction(transaction);
    setAmount("")
    setDesc("")
    // console.log(transaction)
  };

  return (
    <div>
    <div className="transactionBox  m-auto  h-80 sm:h-auto w-80 sm:w-150 pt-5 sm:pt-10 border-0.5 shadow-lg p-4 rounded-xl bg-slate-900 text-white">
        <h2 className="text-blue-600  sm:m-3 text-center text-xl sm:text-3xl">Transaction Entry</h2>
      <form onSubmit={handleSubmit} className="InputForTransaction w-full">
        <lable htmlFor="des">Enter Description</lable>
        <input
          type="text"
          id="des"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border p-2 rounded w-full mb-10"
          required
        />
        <lable htmlFor="amount">Enter Amount</lable>
        <input
          type="number"
          id="amount"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded w-full mb-10"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded text-center mx-auto block lg:w-100 hover:bg-blue-800"
        >
          Submit Transaction
        </button>
      </form>
      </div>
    </div>
  );
}

export default Transaction;
