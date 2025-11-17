import React from "react";
import Transaction from "./Transaction";

function Balance({ balance, allTransactions }) {
  console.log(allTransactions.length)
  let transactionCount = allTransactions.length
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-xl p-6 w-96  mt-10 text-white h-50 ">
        <h2 className="text-2xl">
          Total Balance
        </h2>
        <div className="flex flex-col mt-20  ">
        <span id="balance">₹{balance}</span>
        <span id="transationNum">{transactionCount} Total Transation</span>
        </div>
      
    </div>
  );
}

export default Balance;
