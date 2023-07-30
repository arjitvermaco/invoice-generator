import React from "react";
import currency from "../currency";
export default function AppSidebar() {
  return (
    <div className="px-8 py-10 w-[35%]">
      <button  className="flex flex-grow items-center gap-2 bg-blue-700 text-white px-4 py-3 shadow-xl rounded disabled:bg-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        Download Invoice
      </button>

      <h3 className="mt-3 uppercase font-bold text-gray-500">Currency</h3>

      <select className="py-2 bg-gray-100 w-full">
        {currency.map((item)=>{
            return(
                <option className="w-full" key={item.name}>{item.name} ({item.symbol})</option>
            )
        })}

      </select>
    </div>
  );
}
