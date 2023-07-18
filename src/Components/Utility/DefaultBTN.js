import React from "react";
import { BtnSpinnerWhite } from "../LoadingSpinner";

const DefaultBTN = ({ nameBtn, func, btnStyle, loading }) => {
  return (
    <button
      onClick={func}
      type="submit"
      disabled={loading ? true : false}
      className={`${btnStyle} grid ${loading && "py-5"}  place-items-center`}
    >
      {loading ? <BtnSpinnerWhite /> : nameBtn}
    </button>
  );
};

export default DefaultBTN;
