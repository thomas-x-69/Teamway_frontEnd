import React from "react";
import StatCards from "../components/StatCards";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import BarChart from "../components/BarChart";
import RecentCalls from "../components/RecentCalls";
import DashboardHeader from "../components/DashboardHeader";

const DashboardHome = () => {
  return (
    <div className="min-h-screen pb-4">
      <DashboardHeader />
      <div className="container mx-auto px-2 pt-4">
        <div className="grid grid-cols-12 gap-2">
          {/* StatCards - Full width */}
          <div className="col-span-12">
            <StatCards />
          </div>

          {/* LineChart - 8 columns */}
          <div className="col-span-12 lg:col-span-7">
            <LineChart />
          </div>

          {/* DoughnutChart - 4 columns */}
          <div className="col-span-12 lg:col-span-5">
            <DoughnutChart />
          </div>

          {/* BarChart - 6 columns */}
          <div className="col-span-12 md:col-span-5">
            <BarChart />
          </div>

          {/* RecentCalls - 6 columns */}
          <div className="col-span-12 md:col-span-7">
            <RecentCalls />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
