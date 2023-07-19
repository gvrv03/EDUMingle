import React, { memo } from "react";

const MainCardHeader = ({ name,styleCus }) => {
  return (
    <div className="flex justify-between" >
      <h2 className={`${styleCus}`}  >{name}</h2>
    </div>
  );
};

export default memo(MainCardHeader);
