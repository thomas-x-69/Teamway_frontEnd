import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-grow overflow-y-auto pb-16 lg:pb-0">{children}</div>
    </div>
  );
};

export default DashboardLayout;
