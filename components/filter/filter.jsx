import React from "react";
import { BiSearchAlt, BiFilterAlt } from "react-icons/bi";
import { HiSortAscending } from "react-icons/hi";
const SearchandFilter = () => {
  return (
    <div className="mt-5 flex flex-row justify-between w-5/6 pb-2 mx-auto border-b-2 border-gray-200">
      <section className="flex flex-row bg-white rounded-full w-3/6">
        <BiSearchAlt className="mt-2 ml-3 text-3xl text-green-600" />
        <input
          className="rounded-r-full focus:outline-none m-2"
          placeholder="eg.10/5/2020"
        />
      </section>
      <section className="p-2 bg-white rounded-full px-10 flex flex-row gap-10">
        <span className="flex flex-row hover:text-green-500">
          <BiFilterAlt className="text-2xl mr-2" />
          <p>filter</p>
        </span>
        <span className="flex flex-row hover:text-green-500">
          <HiSortAscending className="text-2xl mr-2 mt-1" />
          <p>Sort</p>
        </span>
      </section>
    </div>
  );
};

export default SearchandFilter;
