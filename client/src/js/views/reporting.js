import React, { useContext } from "react";
import { Link } from "react-router-dom";




import '../../styles/table.css'
import { Context } from "../store/appContext";

export default function Reporting() {
  const { store, actions } = useContext(Context);

  // {console.log(store.user[0]["expenses"])}
  return (
    //Some html code should go here
    <div className="continer mt-5 pt5" id="">
      <div className="mt-5 ">

        <div className="my-5 p-5">
 Add
        </div>
        <div className="mt-5 py-5 px-4">

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400" >
                <tr>

                  <th scope="col" className="px-6 py-3">
                    Description:
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price:
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ID:
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category:
                  </th>
                  <th scope="col-2" className="px-6 py-3">
                    Date:
                  </th>
                </tr>
              </thead>
              <tbody>
                {store.user ?
                  actions.getExpenseIncome("reporting").map((item, index) => (

                    (<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        {item["name"]}
                      </th>
                      <td className="px-6 py-4 whitespace-nowrap dark:text-black">
                        {(() => {
                          let value = null;
                          for (const key in item) {
                            if (key === "cost") {
                              value = `$-(${item[key].toLocaleString()})`;
                              break;
                            } else if (key === "income") {
                              value = `$ +${item[key].toLocaleString()}`;
                              break;
                            }
                          }
                          return value;
                        })()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap dark:text-black">
                        {item["id"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap dark:text-black">
                        {item["category"]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap dark:text-black">
                        {item["date"]}
                      </td>
                    </tr>))) : ""}

              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}
