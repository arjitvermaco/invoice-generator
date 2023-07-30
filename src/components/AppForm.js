import React from "react";

export default function AppForm() {
  return (
    <div className="w-[62%] bg-white px-6 py-8">
      <form>
        {/* Div for logo and invoice and invoice number  */}

        <div className="flex justify-between items-center">
          <div className="w-3/12">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md text-blue-600 "
            >
              <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                <div>
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className="flex text-sm text-gray-600">
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </div>
                  <p className="text-xs text-gray-500">Add Your Logo</p>
                </div>
              </div>
            </label>
          </div>

          <div className="w-9/12 flex items-end flex-col">
            <div className="w-7/12 h-14">
              <input
                type="text"
                name="invoice"
                className="block w-full h-full flex-1 border-0 py-1.5 text-right text-4xl font-thin text-gray-900"
                defaultValue="Invoice"
              ></input>
            </div>

            <div className="flex rounded-md shadow-md">
              <span className="inline-flex items-center rounded-l-md bg-green-50 text-gray-500 px-2 ">
                #
              </span>
              <input
                type="text"
                name="company-website"
                id="company-website"
                className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
                defaultValue="1"
              />
            </div>
          </div>
        </div>

        {/* Div for invoice from and date and bill section  */}
        <div className="flex">
          <div className="flex flex-col mt-10">
            <div className="w-6/12">
              <div className="mt-2">
                <textarea
                  id="from"
                  rows="2"
                  className="mt-1 block w-full pl-3 rounded-mg border-0 text-gray-900 shadow-sm ring-1 ring-gray-300"
                  placeholder="Who is this invoice from?"
                ></textarea>
              </div>
            </div>

            <div className="mt-3 w-6/12 flex justify-between gap-3">
              <div className="w-6/12">
                <label>Bill To</label>
                <textarea
                  id="bill-to"
                  rows="2"
                  className="mt-1 block w-full rounded-md pl-3  border-0 text-gray-900 shadow-sm ring-1 ring-inset "
                ></textarea>
              </div>

              <div className="w-6/12">
                <label>Ship To</label>
                <textarea
                  id="bill-to"
                  rows="2"
                  className="mt-1 block w-full rounded-md pl-3  border-0 text-gray-900 shadow-sm ring-1 ring-inset "
                ></textarea>
              </div>
            </div>
          </div>
          <div className="w-6/12 flex flex-col items-end gap-2">
            <div className="flex gap-3 justify-center items-center">
              <label>Date</label>
              <input
                type="date"
                name="date"
                id="date"
                style={{ width: "170px" }}
                className="block flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
              />
            </div>


            <div className="flex gap-3 justify-center items-center">
              <label>Payment Terms</label>
              <input
                type="text"
                name="payment-terms"
                id="payment-terms"
                style={{ width: "170px" }}
                className="block flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
              />
            </div>


            <div className="flex gap-3 justify-center items-center">
              <label>Due Date</label>
              <input
                type="date"
                name="due-date"
                id="due-date"
                style={{ width: "170px" }}
                className="block flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
              />
            </div>

            <div className="flex gap-3 justify-center items-center">
              <label>PO Number</label>
              <input
                type="text"
                name="po-number"
                id="po-number"
                style={{ width: "170px" }}
                className="block flex-1 rounded-none border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end pr-3"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
