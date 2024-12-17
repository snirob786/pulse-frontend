import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  Cell,
} from "recharts";
import {
  salesStatistics,
  todayCustomers,
  todayOrders,
  todayRevenue,
  todayVisitors,
  salesStatisticsSet2,
  salesStatisticsSet3,
  salesStatisticsSet4,
  orderStatistics,
} from "./DefaultData";

export const DefaultOrderChart = () => {
  const formattedData = todayOrders.labels.map((label, index) => ({
    time: label,
    orders: todayOrders.datasets[0].data[index],
  }));
  const orders = formattedData.map((entry) => entry.orders);
  const minOrders = Math.min(...orders);
  const maxOrders = Math.max(...orders);

  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={formattedData}>
        <XAxis dataKey="time" tick={{ fontSize: 10 }} hide />
        <YAxis hide domain={[minOrders, maxOrders]} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#eff6ff",
            border: "none",
            fontSize: "10px",
            color: "#6783b8",
          }}
          formatter={(value) => `${value} orders`}
        />
        {/* <Legend verticalAlign="top" height={36} iconType="circle" /> */}
        <Line
          type="monotone"
          dataKey="orders"
          stroke="#0fac81"
          strokeWidth={2}
          dot={{
            stroke: "transparent",
            fill: "transparent",
          }}
          activeDot={{
            r: 5,
            fill: "#fff",
            stroke: "#0fac81",
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const DefaultCustomerChart = () => {
  const formattedData = todayCustomers.labels.map((label, index) => ({
    time: label,
    customer: todayCustomers.datasets[0].data[index],
  }));
  const customer = formattedData.map((entry) => entry.customer);
  const minCustomer = Math.min(...customer);
  const maxCustomer = Math.max(...customer);
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={formattedData}>
        <XAxis dataKey="time" tick={{ fontSize: 10 }} hide />
        <YAxis hide domain={[minCustomer, maxCustomer]} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#eff6ff",
            border: "none",
            fontSize: "10px",
            color: "#6783b8",
          }}
          formatter={(value) => `${value} customers`}
        />
        <Line
          type="monotone"
          dataKey="customer"
          stroke="#ffa353"
          strokeWidth={2}
          dot={{
            stroke: "transparent",
            fill: "transparent",
          }}
          activeDot={{
            r: 5,
            fill: "#fff",
            stroke: "#ffa353",
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const DefaultRevenueChart = () => {
  const formattedData = todayRevenue.labels.map((label, index) => ({
    time: label,
    revenue: todayRevenue.datasets[0].data[index],
  }));
  const revenue = formattedData.map((entry) => entry.revenue);
  const minRevenue = Math.min(...revenue);
  const maxRevenue = Math.max(...revenue);
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={formattedData}>
        <XAxis dataKey="time" tick={{ fontSize: 10 }} hide />
        <YAxis hide domain={[minRevenue, maxRevenue]} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#eff6ff",
            border: "none",
            fontSize: "10px",
            color: "#6783b8",
          }}
          formatter={(value) => `${value} revenue`}
        />
        {/* <Legend verticalAlign="top" height={36} iconType="circle" /> */}
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#854fff"
          strokeWidth={2}
          dot={{
            stroke: "transparent",
            fill: "transparent",
          }}
          activeDot={{
            r: 5,
            fill: "#fff",
            stroke: "#854fff",
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const DefaultVisitorChart = () => {
  const formattedData = todayVisitors.labels.map((label, index) => ({
    time: label,
    visitor: todayVisitors.datasets[0].data[index],
  }));
  const visitor = formattedData.map((entry) => entry.visitor);
  const minVisitor = Math.min(...visitor);
  const maxVisitor = Math.max(...visitor);
  return (
    <ResponsiveContainer width="100%" height={100}>
      <LineChart data={formattedData}>
        <XAxis dataKey="time" tick={{ fontSize: 10 }} hide />
        <YAxis hide domain={[minVisitor, maxVisitor]} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#eff6ff",
            border: "none",
            fontSize: "10px",
            color: "#6783b8",
          }}
          formatter={(value) => `${value} expense`}
        />
        {/* <Legend verticalAlign="top" height={36} iconType="circle" /> */}
        <Line
          type="monotone"
          dataKey="visitor"
          stroke="#ff63a5"
          strokeWidth={2}
          dot={{
            stroke: "transparent",
            fill: "transparent",
          }}
          activeDot={{
            r: 5,
            fill: "#fff",
            stroke: "#ff63a5",
            strokeWidth: 2,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const DefaultSalesStatistics = ({ state }) => {
  const [data, setData] = useState(salesStatistics);
  useEffect(() => {
    let object;
    if (state === "Daily") {
      object = salesStatisticsSet2;
    } else if (state === "Monthly") {
      object = salesStatisticsSet3;
    } else {
      object = salesStatisticsSet4;
    }
    setData(object);
  }, [state]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" hide />
        <YAxis
          tickFormatter={(value) => `$ ${value}`}
          ticks={[0, 3000, 6000, 9000, 12000]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1c2b46",
            border: "none",
            fontSize: "12px",
            color: "#fff",
          }}
          labelFormatter={() => null}
          formatter={(value) => `$${value}`}
        />
        <Legend verticalAlign="top" height={36} iconType="circle" />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#6783b8"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const DefaultOrderStatistics = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        outerRadius="80%"
        width={400}
        height={400}
        data={orderStatistics}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="Order Stats"
          dataKey="A"
          stroke="#6783b8"
          fill="#6783b8"
          fillOpacity={0.6}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1c2b46",
            border: "none",
            fontSize: "12px",
            color: "#fff",
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};
