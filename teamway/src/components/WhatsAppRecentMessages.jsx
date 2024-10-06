import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { User, Clock, PhoneCall, UserCheck, Hash } from "lucide-react";

const RecentCalls = () => {
  const [calls, setCalls] = useState([
    {
      employee: "زياد وليد",
      duration: "8:00",
      status: "تم الرد عليها",
      customer: "محمد الحسيني",
      code: "1129",
    },
    {
      employee: "أحمد خالد",
      duration: "5:30",
      status: "لم يتم الرد",
      customer: "فاطمة السيد",
      code: "1130",
    },
    {
      employee: "سارة محمود",
      duration: "12:15",
      status: "تم الرد عليها",
      customer: "علي حسن",
      code: "1131",
    },
    {
      employee: "محمد عبدالله",
      duration: "3:45",
      status: "تم الرد عليها",
      customer: "نور أحمد",
      code: "1132",
    },
    {
      employee: "ليلى حسين",
      duration: "6:20",
      status: "تم الرد عليها",
      customer: "عمر فاروق",
      code: "1133",
    },
    {
      employee: "يوسف إبراهيم",
      duration: "4:10",
      status: "لم يتم الرد",
      customer: "هدى محمد",
      code: "1134",
    },
    {
      employee: "رانيا أحمد",
      duration: "9:30",
      status: "تم الرد عليها",
      customer: "كريم سعيد",
      code: "1135",
    },
  ]);

  const [isScrollable, setIsScrollable] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    const checkScrollable = () => {
      if (tableRef.current) {
        setIsScrollable(calls.length > 4);
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => window.removeEventListener("resize", checkScrollable);
  }, [calls]);

  const container = {
    hidden: { opacity: 1, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className="bg-white p-4 sm:p-6 rounded-[1.5rem] shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          المكالمات الأخيرة
        </h2>
        {/* <button className="bg-[#e6f7ff] text-[#1F94C4] px-2 sm:px-4 py-1 sm:py-2 rounded-lg flex items-center text-xs sm:text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
              clipRule="evenodd"
            />
          </svg>
          الفلتر
        </button> */}
      </div>
      <div
        className={`overflow-auto ${isScrollable ? "max-h-[280px]" : ""}`}
        ref={tableRef}
      >
        <motion.table
          className="w-full min-w-full divide-y divide-gray-200"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <thead className="bg-gray-100 text-gray-600 sticky top-0">
            <tr>
              <th
                scope="col"
                className="px-2 sm:px-3 py-2 sm:py-3 text-[10px] sm:text-xs border border-gray-300"
              >
                الراسل
              </th>
              <th
                scope="col"
                className="px-2 sm:px-3 py-2 sm:py-3 text-[10px] sm:text-xs border border-gray-300"
              >
                مده الاستجابة
              </th>
              <th
                scope="col"
                className="px-2 sm:px-3 py-2 sm:py-3 text-[10px] sm:text-xs border border-gray-300"
              >
                الحالة
              </th>
              <th
                scope="col"
                className="px-2 sm:px-3 py-2 sm:py-3 text-[10px] sm:text-xs border border-gray-300"
              >
                المستلم
              </th>
              <th
                scope="col"
                className="px-2 sm:px-3 py-2 sm:py-3 text-[10px] sm:text-xs border border-gray-300"
              >
                تاريح الارسال
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {calls.map((call, index) => (
              <motion.tr
                key={index}
                variants={item}
                className="hover:bg-[#f9fafb]"
              >
                <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900">
                  {call.employee}
                </td>
                <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500">
                  {call.duration}
                </td>
                <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap">
                  <span
                    className={`px-1 sm:px-3 inline-flex text-[10px] sm:text-xs leading-5 rounded-[14px] p-1 sm:p-2 ${
                      call.status === "لم يتم الرد"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {call.status}
                  </span>
                </td>
                <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500">
                  {call.customer}
                </td>
                <td className="px-2 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500">
                  {call.code}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </motion.div>
  );
};

export default RecentCalls;
