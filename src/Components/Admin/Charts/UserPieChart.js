import { Radar } from "@mui/icons-material";
import React from "react";
import {
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const UserPieChart = () => {

  const data02 = [
    {
      "name": "User",
      "value": 100
    },
    {
      "name": "Customer",
      "value": 150
    },
    {
      "name": "Admin",
      "value": 10
    },

    {
      "name": "Root",
      "value": 2
    },
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-2  border-b-2 border-gray-100 pb-5 items-center  ">
        <i className="uil uil-user pColor bg-gray-100 w-6 h-6 text-sm p-1 grid place-items-center rounded-full" />
        <h4 className="font-semibold text-base ">User Authorization</h4>
      </div>{" "}
      <div className="  text-[10px]  font-semibold text-gray-300 h-[250px] md:h-[300px] md:text-xs   -ml-10 md:-ml-5 ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={730} height={250}>
           
            <Pie
              data={data02}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={100}
              fill="blue"
              label
              
            />
            <Tooltip/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserPieChart;
