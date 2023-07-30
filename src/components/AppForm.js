import React from "react";

export default function AppForm() {
  return (
    <div className="w-[62%] bg-white">
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
                <input type="text" name="invoice" className="block w-full h-full flex-1 border-0 py-1.5 text-right text-4xl font-thin text-gray-900"
                defaultValue="Invoice"
                >
                </input>
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


      </form>
    </div>
  );
}
