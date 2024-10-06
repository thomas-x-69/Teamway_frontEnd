import { useState, useEffect } from "react";
import DashboardHeader from "../components/DashboardHeader";
import CallsStatCards from "../components/CallsStatCards";
import CallsLineChart from "../components/CallsLineChart";
import CallsPieChart from "../components/CallsPieChart";
import CallsBarChart from "../components/CallsBarChart";
import CallsTable from "../components/CallsTable";

const AnimatedCard = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

const CallsDashboard = () => {
  return (
    <div className="min-h-screen pb-10">
      <DashboardHeader />
      <div className="container mx-auto px-4 pt-6">
        <AnimatedCard delay={400}>
          <CallsStatCards />
        </AnimatedCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <AnimatedCard delay={600}>
            <CallsLineChart />
          </AnimatedCard>
          <AnimatedCard delay={800}>
            <CallsPieChart />
          </AnimatedCard>
        </div>
        <div className=" gap-6 mt-6">
          <AnimatedCard delay={1000}>
            <CallsBarChart />
          </AnimatedCard>
        </div>
        <div className="gap-6 mt-6">
          <AnimatedCard delay={1200}>
            <CallsTable />
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default CallsDashboard;
