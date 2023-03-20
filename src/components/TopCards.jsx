import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";

const TopCards = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      {loading ? (
        <>
          <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold ">$7,486</p>
              <p className="text-gray-600">Daily Revenue</p>
            </div>
            <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
              <span className="text-green-700 text-lg">+18%</span>
            </p>
          </div>
          <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold ">$1,459,832</p>
              <p className="text-gray-600">YTD Revenue</p>
            </div>
            <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
              <span className="text-green-700 text-lg">+11%</span>
            </p>
          </div>
          <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
              <p className="text-2xl font-bold ">11,437</p>
              <p className="text-gray-600">Customers</p>
            </div>
            <p className="bg-green-200 flex justify-center items-center p-2 rounded-lg">
              <span className="text-green-700 text-lg">+15%</span>
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
              <Skeleton width={"200px"} height={"70px"} />
              <p className="text-gray-600">Daily Revenue</p>
            </div>
            <Skeleton
              width={"100px"}
              height={"110px"}
              className="bg-green-200 "
            />
          </div>
          <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
              <Skeleton width={"200px"} height={"70px"} />
              <p className="text-gray-600">YTD Revenue</p>
            </div>
            <Skeleton
              width={"100px"}
              height={"110px"}
              className="bg-green-200 "
            />
          </div>
          <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
            <div className="flex flex-col w-full pb-4">
              <Skeleton width={"200px"} height={"70px"} />
              <p className="text-gray-600">Customers</p>
            </div>
            <Skeleton
              width={"100px"}
              height={"110px"}
              className="bg-green-200 "
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TopCards;
