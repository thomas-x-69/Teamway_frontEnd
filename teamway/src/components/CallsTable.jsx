import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CallsTable = () => {
  const [calls, setCalls] = useState([
    {
      employee: "زياد وليد",
      duration: "8:00",
      status: "تم الرد عليها",
      customer: "محمد الحسيني",
      notes: "تم حل المشكلة بنجاح",
      code: "1129",
    },
    {
      employee: "أحمد خالد",
      duration: "5:30",
      status: "لم يتم الرد",
      customer: "فاطمة السيد",
      notes: "العميل غير متاح",
      code: "1130",
    },
    {
      employee: "سارة محمود",
      duration: "12:15",
      status: "تم الرد عليها",
      customer: "علي حسن",
      notes: "طلب متابعة في وقت لاحق",
      code: "1131",
    },
    {
      employee: "محمد عبدالله",
      duration: "3:45",
      status: "تم الرد عليها",
      customer: "نور أحمد",
      notes: "تم تقديم عرض جديد",
      code: "1132",
    },
    {
      employee: "ليلى حسين",
      duration: "6:20",
      status: "تم الرد عليها",
      customer: "عمر فاروق",
      notes: "استفسار عن المنتج الجديد",
      code: "1133",
    },
    {
      employee: "يوسف إبراهيم",
      duration: "4:10",
      status: "لم يتم الرد",
      customer: "هدى محمد",
      notes: "ترك رسالة صوتية",
      code: "1134",
    },
    {
      employee: "رانيا أحمد",
      duration: "9:30",
      status: "تم الرد عليها",
      customer: "كريم سعيد",
      notes: "طلب معلومات إضافية عن الخدمة",
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
      </div>
      <div
        className={`overflow-auto ${
          isScrollable ? "max-h-[280px]" : ""
        } w-full`}
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
                اسم الموظف
              </th>
              <th
                scope="col"
                className="px-2 sm:px-3 py-2 sm:py-3 text-[10px] sm:text-xs border border-gray-300"
              >
                المدة
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
                اسم العميل
              </th>
              <th
                scope="col"
                className="px-2 sm:px-3 py-2 sm:py-3 text-[10px] sm:text-xs border border-gray-300"
              >
                ملاحظات
              </th>
              <th
                scope="col"
                className="px-2 sm:px-3 py-2 sm:py-3 text-[10px] sm:text-xs border border-gray-300"
              >
                كود المكالمة
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
                  {call.notes}
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

export default CallsTable;
