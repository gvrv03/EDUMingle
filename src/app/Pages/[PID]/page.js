import React from "react";

const DynamicPage = ({ params }) => {
  return (
    <section className="p-5 bg-white ">
      <h2 className="text-xl  md:text-5xl font-bold text-black ">
        {params.PID}
      </h2>

      
    </section>
  );
};

export default DynamicPage;
