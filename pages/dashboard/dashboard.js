import React from "react";
import Sidebar from "../../components/dashboard-sidebar/sidebar";

const DashBoard = () => {
  return (
    <div className="bg-gray-100 w-3/4 mt-20 rounded-xl mx-auto flex flex-row">
      <Sidebar classname="" />
      <div className="records">
        <h2 className="">DashBoard</h2>
        <section className="">
          <span className="enter-record">create button</span>
        </section>
        <section>
          <span className="search">search record</span>
          <section className="filter">filter</section>
        </section>
        <div className="record-list">record list</div>
      </div>
    </div>
  );
};

export default DashBoard;
