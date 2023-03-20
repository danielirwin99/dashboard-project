import React, { useEffect, useState } from "react";
import { data } from "../data/data";
import { FaShoppingBag } from "react-icons/fa";
import { Skeleton } from "@mui/material";

const RecentOrders = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {loading
          ? new Array(8).fill(0).map((_, index) => (
              <>
                <li className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer">
                  <div className="bg-purple-100 rounded-lg p-3">
                    <FaShoppingBag className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">
                      <Skeleton width={"150px"} height={"50px"} />
                    </p>
                    <p className="text-gray-400 text-sm">
                      <Skeleton width={"80px"} height={"40px"} />
                    </p>
                  </div>
                  <p className="lg:flex md:hidden absolute right-6 text-sm">
                    <Skeleton width={"100px"} height={"60px"} />
                  </p>
                </li>
              </>
            ))
          : data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
              >
                <div className="bg-purple-100 rounded-lg p-3">
                  <FaShoppingBag className="text-purple-800" />
                </div>
                <div className="pl-4">
                  <p className="text-gray-800 font-bold">${order.total}</p>
                  <p className="text-gray-400 text-sm">{order.name.first}</p>
                </div>
                <p className="lg:flex md:hidden absolute right-6 text-sm">
                  {order.date}
                </p>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
