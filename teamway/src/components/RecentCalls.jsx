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
        setIsScrollable(calls.length > 5);
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
        staggerChildren: 0.1,
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
      className="bg-white p-3 rounded-2xl shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-bold text-gray-800">المكالمات الأخيرة</h2>
      </div>
      <div
        className={`overflow-auto ${isScrollable ? "max-h-[265px]" : ""}`}
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
                className="px-2 py-2 text-[10px] border border-gray-300"
              >
                <User size={10} className="inline ml-1" />
                الموظف
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-[10px] border border-gray-300"
              >
                <Clock size={10} className="inline ml-1" />
                المدة
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-[10px] border border-gray-300"
              >
                <PhoneCall size={10} className="inline ml-1" />
                الحالة
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-[10px] border border-gray-300"
              >
                <UserCheck size={10} className="inline ml-1" />
                العميل
              </th>
              <th
                scope="col"
                className="px-2 py-2 text-[10px] border border-gray-300"
              >
                <Hash size={10} className="inline ml-1" />
                الكود
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
                <td className="px-2 py-2 whitespace-nowrap text-[9px] font-medium text-gray-900">
                  {call.employee}
                </td>
                <td className="px-2 py-2 whitespace-nowrap text-[9px] text-gray-500">
                  {call.duration}
                </td>
                <td className="px-2 py-2 whitespace-nowrap">
                  <span
                    className={`px-1 inline-flex text-[8px] leading-5 rounded-[10px] ${
                      call.status === "لم يتم الرد"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {call.status}
                  </span>
                </td>
                <td className="px-2 py-2 whitespace-nowrap text-[9px] text-gray-500">
                  {call.customer}
                </td>
                <td className="px-2 py-2 whitespace-nowrap text-[9px] text-gray-500">
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
