"use client";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  Pie,
  PieChart,
} from "recharts";
const data = [
  { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 500, pv: 300, amt: 2500 },
  { name: "Mar", uv: 600, pv: 2600, amt: 1600 },
  { name: "April", uv: 900, pv: 2700, amt: 2700 },
  { name: "May", uv: 900, pv: 2700, amt: 2700 },
  { name: "Jun", uv: 900, pv: 2700, amt: 2700 },
  { name: "Jul", uv: 900, pv: 2700, amt: 2700 },
  { name: "Aug", uv: 900, pv: 2700, amt: 2700 },
  { name: "Sept", uv: 900, pv: 2700, amt: 2700 },
  { name: "Oct", uv: 1200, pv: 2700, amt: 2700 },
  { name: "Nov", uv: 900, pv: 2700, amt: 2700 },
  { name: "Dec", uv: 900, pv: 2700, amt: 2700 },
];

const AdminHome = () => {
  return (
    <div className="flex gap-5   md:flex-row mt-5 flex-col">
      <div className="bg-white  w-full p-5 ">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>{" "}
      <div className="bg-white    w-full p-5 ">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="uv"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={data}
              dataKey="pv"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminHome;
