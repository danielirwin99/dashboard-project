import React from "react";
import { Skeleton } from "@mui/material";
import { BsPersonFill } from "react-icons/bs";

const CustomersSkeleton = () => {
  return (
    <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
      <div className="flex items-center">
        <div className="bg-purple-100 p-3 mr-4 rounded-lg">
          <BsPersonFill className="text-purple-800" />
        </div>
        <Skeleton width={"200px"} height={"70px"} />
      </div>
      <p className="text-gray-600 sm:text-left text-right">
        <Skeleton width={"200px"} height={"70px"} />
      </p>
      <p className="hidden md:flex">
        <Skeleton width={"200px"} height={"70px"} />
      </p>
      <div className="sm:flex hidden justify-between items-center">
        <Skeleton width={"200px"} height={"70px"} />
      </div>
    </li>
  );
};

export default CustomersSkeleton;
