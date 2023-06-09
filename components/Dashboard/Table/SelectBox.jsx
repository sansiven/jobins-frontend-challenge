import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { headers } from "./TabHeaders";
import Chevron from "@assets/Icons/Chevron";

const SelectBox = ({ selectedOption, setSelectedOption }) => (
  <Listbox as={"div"} value={selectedOption} onChange={setSelectedOption}>
    <div className="relative w-[136px] h-10 bg-white shadow-input rounded-md flex flex-col justify-center items-center px-2 text-[15px] text-8B909A">
      <Listbox.Button className="capitalize w-full flex justify-between">
        {selectedOption.tag}
        <Chevron className="rotate-180" />
      </Listbox.Button>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options className="absolute w-full top-0 mt-11 bg-white rounded">
          {headers.map((header, index) => (
            <Listbox.Option
              key={index}
              value={header}
              className="capitalize px-2 py-2 cursor-pointer hover:bg-8B909A hover:bg-opacity-30 hover:rounded"
            >
              {header.tag}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
);

export default SelectBox;
