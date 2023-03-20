import { Skeleton } from "@mui/material";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";

const OrdersSkeleton = () => {
  return (
    <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
      <div className="flex">
        <div className="bg-purple-100 p-3 rounded-lg">
          <FaShoppingBag className="text-purple-800" />
        </div>
        <div className="pl-4">
          <p className="text-gray-800 text-sm">
            <Skeleton width={"200px"} height={"70px"} />
          </p>
        </div>
      </div>
      <p className="text-gray-600 sm:text-left text-right">
        <span>
          <Skeleton width={"200px"} height={"70px"} />
        </span>
      </p>
      <p className="hidden md:flex">
        <Skeleton width={"200px"} height={"70px"} />
      </p>
      <div className="sm:flex hidden justify-between items-center">
        <Skeleton width={"200px"} height={"70px"} />
        <BsThreeDotsVertical />
      </div>
    </li>
  );
};

export default OrdersSkeleton;
