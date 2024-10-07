import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import {
  Home,
  PhoneCall,
  MessageCircleMore,
  BriefcaseBusiness,
  Info,
  LogOut,
  User,
} from "lucide-react";
import TeamPlus from "../assets/Logo2.png";
const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };
  const navItems = [
    { path: "/dashboard/home", icon: Home, label: "الرئيسية" },
    {
      path: "/dashboard/calls",
      icon: PhoneCall,
      label: "الاتصالات",
    },
    {
      path: "/dashboard/messages",
      icon: MessageCircleMore,
      label: "الواتس اب",
    },
    { path: "/dashboard/crm", icon: BriefcaseBusiness, label: "CRM" },
  ];

  const mobileNavItems = [
    { path: "/dashboard/account", icon: User, label: "الحساب" },
    {
      path: "/dashboard/messages",
      icon: MessageCircleMore,
      label: "الرسائل",
    },
    { path: "/dashboard/home", icon: Home, label: "الرئيسية" },
    { path: "/dashboard/crm", icon: BriefcaseBusiness, label: "الفريق" },
    { path: "/dashboard/calls", icon: PhoneCall, label: "الاتصالات" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const renderNavItems = (items, isMobile = false) => (
    <>
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`p-2 flex flex-col items-center justify-center rounded-lg relative transition-all duration-300 ${
            isMobile ? "flex-1" : ""
          } ${
            isActive(item.path)
              ? isMobile
                ? "text-primary"
                : "text-white"
              : "text-[#9FB4CD] hover:text-white hover:bg-primary/70"
          }`}
        >
          <item.icon
            className={`${isMobile ? "w-5 h-5" : "w-6 h-6"} mb-1 z-10`}
          />
          <span className="text-xs text-center z-10">{item.label}</span>
          {isActive(item.path) && !isMobile && (
            <motion.span
              layoutId="nav-highlight"
              className="absolute inset-0 bg-primary rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          {isActive(item.path) && isMobile && (
            <motion.span
              layoutId="mobile-nav-highlight"
              className="absolute inset-x-0 top-0 h-0.5 bg-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="bg-white text-[#333] h-screen w-[8rem] flex-col items-center py-4 shadow-md hidden md:flex">
        <div className="mb-4">
          <img
            src={TeamPlus}
            className="w-[5rem] h-[5rem] mt-4"
            alt="Team Plus Logo"
          />
        </div>
        <nav className="flex-grow flex flex-col space-y-6 justify-center relative">
          {renderNavItems(navItems)}
        </nav>
        <div className="mt-auto flex flex-col items-center space-y-4">
          <button className="w-16 h-16 flex flex-col items-center justify-center text-[#9FB4CD] rounded-lg hover:text-white hover:bg-gray-400 transition-all duration-300">
            <Info className="w-5 h-5 mb-1" />
            <span className="text-xs">اعرف المزيد</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-16 h-16 flex flex-col items-center justify-center rounded-lg text-red-600 hover:text-white hover:bg-red-400 transition-all duration-300"
          >
            <LogOut className="w-5 h-5 mb-1" />
            <span className="text-xs">تسجيل خروج</span>
          </button>
        </div>
      </div>

      {/* Mobile Footer Menu */}
      <div className="bg-white text-[#333] fixed bottom-0 left-0 right-0 shadow-md md:hidden z-10">
        <nav className="flex justify-between items-center px-4 pb-2">
          {renderNavItems(mobileNavItems, true)}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
