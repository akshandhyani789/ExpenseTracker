import React from "react";

function TransactionHistory({ history,deleteOne }) {
  const safeHistory = Array.isArray(history) ? history : [];

  return (
    <div className=" shadow-lg rounded-lg p-6 mt-10 mx-auto text-white">
      <h2 className="text-xl font-bold ">Transaction History</h2>
      <h2 className="text-xl  mb-4">{safeHistory.length} expenses found</h2>

      {safeHistory.length === 0 ? (
        <p className="text-gray-500">No transactions yet</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {safeHistory.map((t, index) => (
            <li
              key={t.id || index}
              className="py-3 flex justify-between items-center border-0.5 shadow-[0_0_10px_rgba(0,0,0,0.5)] p-4 rounded-xl px-4 mt-2 mb-5"
            >
              <div className="flex flex-col">
                <span className="font-medium capitalize text-2xl">
                  {t.desc}
                </span>
                <span className="text-gray-500 text-0.5xl">At {t.date}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-2xl">₹{t.amount}</span>
                <button id="deleteOneHistory" onClick={()=>deleteOne(t.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-red-600 cursor-pointer"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 7h12M9.5 7V4.5a1.5 1.5 0 011.5-1.5h2a1.5 1.5 0 011.5 1.5V7m-.5 4v6m-4-6v6M4 7h16l-1 13H5L4 7z"
                    />
                  </svg>
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionHistory;
