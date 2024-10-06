import { useState, useEffect } from "react";
import WhatsAppStatCards from "../components/WhatsAppStatCards";
import WhatsAppAreaChart from "../components/WhatsAppAreaChart";
import WhatsAppPieChart from "../components/WhatsAppPieChart";
import WhatsAppBarChart from "../components/WhatsAppBarChart";
import WhatsAppRecentMessages from "../components/WhatsAppRecentMessages";
import DashboardHeader from "../components/DashboardHeader";

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

const WhatsAppDashboard = () => {
  return (
    <div className="min-h-screen pb-10">
      <DashboardHeader />
      <div className="container mx-auto px-4 pt-6">
        <AnimatedCard delay={400}>
          <WhatsAppStatCards />
        </AnimatedCard>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <AnimatedCard delay={600}>
            <WhatsAppAreaChart />
          </AnimatedCard>
          <AnimatedCard delay={800}>
            <WhatsAppPieChart />
          </AnimatedCard>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <AnimatedCard delay={1000}>
            <WhatsAppBarChart />
          </AnimatedCard>
          <AnimatedCard delay={1200}>
            <WhatsAppRecentMessages />
          </AnimatedCard>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppDashboard;
