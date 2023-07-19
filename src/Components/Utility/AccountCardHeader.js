import React, { memo } from "react";

const MainCardHeader = ({ name }) => {
  return (
    <div className="flex justify-between" >
      <h2 className="font-semibold text-base ">{name}</h2>
    </div>
  );
};

export default memo(MainCardHeader);
