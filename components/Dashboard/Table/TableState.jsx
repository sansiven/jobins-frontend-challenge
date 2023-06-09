"use client";

import { Fragment, useState } from "react";
import { headers } from "./TabHeaders";
import { Listbox, Transition } from "@headlessui/react";
import Chevron from "@assets/Icons/Chevron";
import SelectBox from "./SelectBox";
import SearchBox from "./SearchBox";
import { mockData } from "@mocks/tableData";

const TableState = ({ selectedTab, setSelectedTab }) => {
  const [selectedOption, setSelectedOption] = useState(headers[0]);

  return (
    <div className="flex mt-[18px]">
      <SelectBox
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <SearchBox data={mockData} />
    </div>
  );
};

export default TableState;
