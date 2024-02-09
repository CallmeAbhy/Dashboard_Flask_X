import React from "react";

import { HiOutlineLink } from "react-icons/hi";

const RecentSorces = ({ data }) => {
  // Extract unique topics
  const uniqueTopics = [...new Set(data.map((item) => item.topic))];

  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Reliable sources</h1>
      <ul>
        {uniqueTopics.map((topic, id) => {
          // Find the first item with the current topic
          const order = data.find((item) => item.topic === topic);
          return (
            <li
              key={id}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
            >
              <div className="bg-purple-100 rounded-lg p-3">
                <HiOutlineLink
                  className="text-purple-800"
                  onClick={() => window.open(order.url, "_blank")}
                />
              </div>
              <div className="pl-4">
                <p className="text-gray-800 font-bold">{topic}</p>
                <p className="text-gray-400 text-sm">{order.source}</p>
              </div>
              <p className="lg:flex md:hidden absolute right-6 text-sm">
                {order.start_year}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentSorces;
