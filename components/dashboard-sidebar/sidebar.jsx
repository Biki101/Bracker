import React from "react";
import { RiRefreshLine } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { CgNotes, CgProfile } from "react-icons/cg";
import { BsBookmarkPlus } from "react-icons/bs";
const Sidebar = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-4xl text-white gap-20 rounded-l-xl">
      <div className="flex flex-col gap-10 px-4">
        <RiRefreshLine className="mt-5 border-b-2 pb-2" />
        <BiSearchAlt className="border-b-2  pb-2" />
        <BsBookmarkPlus className="border-b-2  pb-2" />
        <CgNotes className="border-b-2  pb-2" />
      </div>
      <CgProfile className="ml-4 mb-5 border-b-2 pb-2" />
    </div>
  );
};

export default Sidebar;
