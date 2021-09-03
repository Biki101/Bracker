import React from "react";
import Sidebar from "../../components/dashboard-sidebar/sidebar";
import { CgPrinter, CgExport, CgAddR } from "react-icons/cg";
import SearchandFilter from "../../components/filter/filter";

const DashBoard = () => {
  return (
    <div className="bg-gray-100 w-3/4 mt-20 rounded-xl mx-auto flex flex-row">
      <Sidebar />
      <div className="w-full p-5 pt-7">
        <section className="flex flex-row w-full justify-between border-b-2 pb-3 border-gray-900">
          <h2 className="text-3xl">Records</h2>
          <section className="flex flex-row text-xl">
            <span className="flex flex-row bg-white p-2 px-4 rounded-full border border-green-200">
              <CgPrinter className="mt-1 mr-2" />
              <p>Print</p>
            </span>
            <span className="flex flex-row ml-5 bg-white p-2 px-4 rounded-full border border-green-200">
              <p>Export</p>
              <CgExport className="mt-1 ml-2" />
            </span>
            <span className="flex flex-row ml-5 bg-green-500 text-white p-2 px-4 rounded-full border ">
              <span>
                <CgAddR className="mt-1 mr-2" />
              </span>
              <p>Create Record</p>
            </span>
          </section>
        </section>
        <SearchandFilter />
        <div className="record-list">record list</div>
      </div>
    </div>
  );
};

export default DashBoard;
