// import CustomerSatisfactionChart from "../components/CustomerSatisfactionChart";
// import PotentialCustomersChart from "../components/PotentialCustomersChart";
// import MostRequestedChallenges from "../components/MostRequestedChallenges";
// import TeamEfficiency from "../components/TeamEfficiency";
// import EmployeePerformance from "../components/EmployeePerformance";
import CRMBarChart from "../components/CRMBarChart";
import CRMDonutChart from "../components/CRMDoughnutChart";
import CRMGuageChart from "../components/CRMGuageChart";
import CRMLineChart from "../components/CRMLineChart";
import CRMProgressBarChart from "../components/CRMProgressBarChart";
import CRMStatCards from "../components/CRMStatCards";
import DashboardHeader from "../components/DashboardHeader";
// import CallsLineChart from "../components/CallsLineChart";

const CRMDashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="bg-[#ECEFFA] p-4 min-h-screen">
        <div className="grid grid-cols-6 gap-2">
          {/* Top row - StatCards */}
          <div className="col-span-6">
            <CRMStatCards />
          </div>

          {/* Second row - 3 components */}
          <div className="col-span-3">
            <CRMLineChart />
            <div className="mt-2">
              <CRMBarChart />
            </div>
          </div>
          <div className="col-span-2">
            <CRMDonutChart />
            <div className="mt-2">
              <CRMProgressBarChart />
            </div>
          </div>
          <div className="col-span-1">
            <CRMGuageChart />
          </div>

          {/* Third row - 2 components */}
        </div>
        <div className="col-span-3">{/* <EmployeePerformance /> */}</div>
      </div>
    </>
  );
};

export default CRMDashboard;
