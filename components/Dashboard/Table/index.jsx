import Chevron from "@assets/Icons/Chevron";
import { mockData } from "@mocks/tableData";

import { classNames } from "@utils/classNames";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectChange = (e) => {
    setItemsPerPage(e.target.value);
  };

  useEffect(() => {
    // Simulating an API call to fetch data
    const fetchData = async () => {
      setIsLoading(true);
      const response = await mockApiCall(currentPage);
      setData(response);
      setIsLoading(false);
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  // Simulating the API call
  const mockApiCall = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const slicedData = mockData.slice(startIndex, endIndex);
        resolve(slicedData);
      }, 500); // Simulating a delay of 500ms
    });
  };

  const handlePageChange = (pageNumber) => {
    console.log("page", currentPage);
    setCurrentPage(pageNumber);
  };

  const renderTable = () => {
    if (data.length === 0) {
      return <div>No data available</div>;
    }

    return (
      <div className="bg-white rounded-2xl mt-[22px] overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-b-E9E7FD">
              <th className="py-4 text-left text-[13px] text-8B909A uppercase font-medium px-9">
                ID
              </th>
              <th className="py-4 text-left text-[13px] text-8B909A uppercase font-medium">
                Customer
              </th>
              <th className="py-4 text-left text-[13px] text-8B909A uppercase font-medium">
                Date
              </th>
              <th className="py-4 text-left text-[13px] text-8B909A uppercase font-medium">
                Total
              </th>
              <th className="py-4 text-left text-[13px] text-8B909A uppercase font-medium">
                Method
              </th>
              <th className="py-4 text-left text-[13px] text-8B909A uppercase font-medium">
                Status
              </th>
              <th className="py-4 text-left text-[13px] text-8B909A uppercase font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-E9E7FD">
            {data.map((item) => (
              <tr key={item.id}>
                <td className="py-[18px] text-[15px] px-9">#{item.id}</td>
                <td className="py-[18px] text-[15px] capitalize min-w-[148px]">
                  {item.customer}
                </td>
                <td className="py-[18px] text-[15px] min-w-[130px]">
                  {item.date}
                </td>
                <td className="py-[18px] text-[15px] min-w-[75px]">
                  {item.total}
                </td>
                <td className="py-[18px] text-[15px] uppercase min-w-[85px]">
                  {item.method}
                </td>
                <td
                  className={classNames(
                    "py-[18px] text-[15px] capitalize min-w-[100px]",
                    item.status === "pending"
                      ? "text-FFC600"
                      : item.status === "succeeded"
                      ? "text-28C76F"
                      : "text-EA5455"
                  )}
                >
                  {item.status}
                </td>
                <td
                  className="py-[18px] text-[15px] capitalize text-0F60FF cursor-pointer min-w-[100px]"
                  onClick={() => {
                    console.log("TODO: add action");
                  }}
                >
                  View Details
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-between py-4 px-6 border-t border-t-E9E7FD flex-col md:flex-row gap-4 md:gap-0">
          <div className="flex text-8B909A text-[15px] tracking-[0.43] items-center gap-2">
            <span className="">Showing </span>
            <select
              name="pagination"
              id="pagination"
              className="border border-E9E7FD rounded-md w-[78px] h-[38px] px-5"
              value={itemsPerPage}
              onChange={handleSelectChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <span>of {mockData.length}</span>
          </div>
          <div>{renderPagination()}</div>
        </div>
      </div>
    );
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(mockData.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="pagination flex gap-0.5">
        <button
          onClick={
            currentPage > 1 ? () => handlePageChange(currentPage - 1) : () => {}
          }
          disabled={currentPage <= 1}
          className={classNames(
            "text-[13px] w-7 h-[30px] rounded text-8B909A bg-F1F2F6 flex justify-center items-center",
            currentPage <= 1 && "cursor-not-allowed"
          )}
        >
          <Chevron className="-rotate-90" />
        </button>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={classNames(
              "text-[13px] w-7 h-[30px] rounded",
              currentPage === pageNumber
                ? "text-white bg-0F60FF"
                : "text-8B909A bg-F1F2F6"
            )}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={
            currentPage < totalPages
              ? () => handlePageChange(currentPage + 1)
              : () => {}
          }
          disabled={currentPage >= totalPages}
          className={classNames(
            "text-[13px] w-7 h-[30px] rounded text-8B909A bg-F1F2F6 flex justify-center items-center",
            currentPage >= totalPages && "cursor-not-allowed"
          )}
        >
          <Chevron className="rotate-90" />
        </button>
      </div>
    );
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <React.Fragment>{renderTable()}</React.Fragment>
      )}
    </div>
  );
};

export default Table;
