import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import Avatar from "../assets/Avatar.jpg";
import { Settings } from "lucide-react";

const DashboardHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAvatarFlipped, setIsAvatarFlipped] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavButton = ({ label, to }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        className={`flex-1 px-4 py-2 text-center transition-all rounded-lg text-sm ${
          isActive
            ? "bg-primary text-white"
            : "bg-white text-primary hover:bg-gray-100 border-primary"
        }`}
      >
        {label}
      </Link>
    );
  };

  const renderNavBar = () => {
    if (location.pathname.includes("/dashboard/messages")) {
      return (
        <div className="flex space-x-2 rtl:space-x-reverse mt-3">
          <NavButton label="الداشبورد الرئيسية" to="/dashboard/messages" />
          <NavButton label="الرسائل" to="/dashboard/messages/whatsapp" />
          <NavButton label="قوالب الرسائل" to="/dashboard/messages/templates" />
        </div>
      );
    } else if (location.pathname.includes("/dashboard/calls")) {
      return (
        <div className="flex space-x-2 rtl:space-x-reverse mt-3">
          <NavButton label="الداشبورد الرئيسية" to="/dashboard/calls" />
          <NavButton label="جهات الاتصال" to="/dashboard/calls/Contacts" />
          <NavButton label="الفرص" to="/dashboard/calls/opportunities" />
        </div>
      );
    } else if (location.pathname.includes("/dashboard/crm")) {
      return (
        <div className="flex space-x-2 rtl:space-x-reverse mt-3">
          <NavButton label="الداشبورد الرئيسية" to="/dashboard/crm" />
          <NavButton label="الفرص" to="/dashboard/crm/opportunities" />
        </div>
      );
    } else return null;
  };

  return (
    <motion.div
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all ${
        isSticky ? "py-3" : "py-2"
      } hidden md:block pb-0`}
    >
      <div className="container mx-auto px-3">
        <div
          className={`bg-white rounded-xl shadow-sm transition-all duration-300 ${
            isSticky ? "py-2 px-3" : "py-3 px-4 mt-2"
          }`}
        >
          <div className="flex items-center">
            <motion.div
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-base font-bold mr-3 overflow-hidden cursor-pointer"
              animate={{ rotateY: isAvatarFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.img
                src={Avatar}
                alt="avatar"
                className="w-full h-full object-cover"
                animate={{ opacity: isAvatarFlipped ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <Settings
                className="w-6 h-6 text-white"
                style={{ transform: "rotateY(180deg)" }}
              />
            </motion.div>
            <div className="relative">
              <motion.button
                className="flex flex-col items-start space-y-1 rounded-full px-4 py-3 pt-4"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onHoverStart={() => setIsAvatarFlipped(true)}
                onHoverEnd={() => setIsAvatarFlipped(false)}
                whileHover={{
                  backgroundColor: "rgba(var(--color-primary-rgb), 0.1)",
                }}
              >
                <h1 className="text-primary text-base">
                  <span className="font-bold">مرحبا</span>, حنين علاء
                  <motion.svg
                    className="w-4 h-4 ml-1 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </h1>
                <p className="text-xs text-[#2626269c]">
                  فريق الكول سنتر والمبيعات
                </p>
              </motion.button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      حسابي
                    </motion.a>
                    <motion.a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      الإعدادات
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          {renderNavBar()}
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardHeader;
