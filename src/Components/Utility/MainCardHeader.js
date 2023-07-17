import React, { memo } from "react";

const MainCardHeader = ({ name }) => {
  return (
    <div className="flex justify-between border-b pb-3 " >
      <h2 className="font-semibold text-base ">{name}</h2>
      <button className="pColor font-semibold " >See All</button>
    </div>
  );
};

export default memo(MainCardHeader);
