import React from "react";

const DashBoard = () => {
  return (
    <div className="dashboard">
      <h2 className="record-book">Records</h2>
      <div className="records">
        <div className="side-bar">sidebar</div>
        <section className>
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
