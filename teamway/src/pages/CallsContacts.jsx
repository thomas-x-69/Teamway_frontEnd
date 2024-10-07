import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  Filter,
  ArrowUpDown,
  Plus,
  Search,
  Edit,
  Trash2,
  X,
} from "lucide-react";
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

const ContactsTable = () => {
  const { t } = useTranslation();
  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "احمد خالد",
      position: "مدير التسويق",
      company: "تيم واي",
      phone: "+20 1234567899",
      access: "للكل",
      email: "Ahmed@gmail.com",
      createdAt: "2024-09-20",
    },
    {
      id: 2,
      name: "محمد علي",
      position: "مطور برمجيات",
      company: "تك سوليوشنز",
      phone: "+20 1987654321",
      access: "محدود",
      email: "Mohamed@gmail.com",
      createdAt: "2024-09-18",
    },
    {
      id: 3,
      name: "فاطمة حسن",
      position: "مدير مبيعات",
      company: "سمارت تيك",
      phone: "+20 1122334455",
      access: "للكل",
      email: "Fatima@gmail.com",
      createdAt: "2024-09-15",
    },
    {
      id: 4,
      name: "تسنيم الطباخ",
      position: "مهندس برمجيات",
      company: "تيم واي",
      phone: "+20 1122334455",
      access: "للكل",
      email: "tasneem   @gmail.com",
      createdAt: "2024-09-15",
    },
    {
      id: 5,
      name: "عبدالله",
      position: "المدير التنفيذي",
      company: "تيم واي",
      phone: "+20 1234567899",
      access: "للكل",
      email: "abdullah@gmail.com",
      createdAt: "2024-09-20",
    },
    {
      id: 6,
      name: "روان انصاري",
      position: "مصمم واجهات مستخدم",
      company: "تيم واي",
      phone: "+20 1234567899",
      access: "للكل",
      email: "rawan@gmail.com",
      createdAt: "2024-09-20",
    },
    // Add more dummy data as needed
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    company: "",
    access: "",
    dateAfter: "",
  });
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);

  const filterRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilterMenu(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setShowSortMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ company: "", access: "", dateAfter: "" });
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const resetSort = () => {
    setSortConfig({ key: null, direction: "asc" });
  };

  const filteredContacts = contacts.filter((contact) => {
    return (
      (searchTerm === "" ||
        Object.values(contact).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )) &&
      (filters.company === "" ||
        contact.company
          .toLowerCase()
          .includes(filters.company.toLowerCase())) &&
      (filters.access === "" || contact.access === filters.access) &&
      (filters.dateAfter === "" ||
        new Date(contact.createdAt) >= new Date(filters.dateAfter))
    );
  });

  const sortedContacts = [...filteredContacts].sort((a, b) => {
    if (sortConfig.key !== null) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  const handleCheckboxChange = (id) => {
    setSelectedContacts((prev) =>
      prev.includes(id)
        ? prev.filter((contactId) => contactId !== id)
        : [...prev, id]
    );
  };

  const handleDelete = () => {
    setContacts((prev) =>
      prev.filter((contact) => !selectedContacts.includes(contact.id))
    );
    setSelectedContacts([]);
  };

  const handleEdit = () => {
    // Implement edit functionality
    console.log("Edit contacts:", selectedContacts);
  };

  return (
    <div className="min-h-screen pb-10">
      <DashboardHeader />
      <div className="container mx-auto px-4 pt-6">
        <AnimatedCard delay={400}>
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{t("جهات الاتصال")}</h2>
              <div className="flex space-x-2">
                <button className="bg-green-500 ml-2 text-white px-4 py-2 rounded-lg flex items-center text-sm relative">
                  <span className="mr-2">{t("اضافة جهة اتصال")}</span>
                  <span className="absolute right-[-18px] top-[-1px] bg-blue-500 rounded-full p-[.1rem]">
                    <Plus size={34} className="text-white" />
                  </span>
                </button>
                <button className="bg-green-100 text-green-600 px-3 py-1.5 rounded-lg text-sm">
                  {t("اجراء مكالمة جديده")}
                </button>
                <div className="relative" ref={filterRef}>
                  <button
                    className="border border-gray-300 mr-4 px-3 py-1.5 rounded-lg flex items-center text-sm"
                    onClick={() => {
                      setShowFilterMenu(!showFilterMenu);
                      setShowSortMenu(false);
                    }}
                  >
                    <Filter size={16} className="mr-1" />
                    {t("الفلتر")}
                  </button>
                  {showFilterMenu && (
                    <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-4">
                      <input
                        type="text"
                        placeholder={t("الشركة")}
                        className="w-full mb-2 p-2 border border-gray-300 rounded"
                        value={filters.company}
                        onChange={(e) =>
                          handleFilterChange("company", e.target.value)
                        }
                      />
                      <select
                        className="w-full mb-2 p-2 border border-gray-300 rounded"
                        value={filters.access}
                        onChange={(e) =>
                          handleFilterChange("access", e.target.value)
                        }
                      >
                        <option value="">{t("الوصول")}</option>
                        <option value="للكل">{t("للكل")}</option>
                        <option value="محدود">{t("محدود")}</option>
                      </select>
                      <input
                        type="date"
                        className="w-full mb-2 p-2 border border-gray-300 rounded"
                        value={filters.dateAfter}
                        onChange={(e) =>
                          handleFilterChange("dateAfter", e.target.value)
                        }
                      />
                      <button
                        className="w-full bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm"
                        onClick={resetFilters}
                      >
                        {t("إعادة تعيين")}
                      </button>
                    </div>
                  )}
                </div>
                <div className="relative" ref={sortRef}>
                  <button
                    className="border border-gray-300 px-3 py-1.5 rounded-lg flex items-center text-sm"
                    onClick={() => {
                      setShowSortMenu(!showSortMenu);
                      setShowFilterMenu(false);
                    }}
                  >
                    <ArrowUpDown size={16} className="mr-1" />
                    {t("ترتيب")}
                  </button>
                  {showSortMenu && (
                    <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-10 p-4">
                      <button
                        className="w-full text-right mb-2 p-2 hover:bg-gray-100 rounded"
                        onClick={() => handleSort("name")}
                      >
                        {t("الاسم")}
                        {sortConfig.key === "name" && (
                          <span className="float-left">
                            {sortConfig.direction === "asc" ? "▲" : "▼"}
                          </span>
                        )}
                      </button>
                      <button
                        className="w-full text-right mb-2 p-2 hover:bg-gray-100 rounded"
                        onClick={() => handleSort("company")}
                      >
                        {t("الشركة")}
                        {sortConfig.key === "company" && (
                          <span className="float-left">
                            {sortConfig.direction === "asc" ? "▲" : "▼"}
                          </span>
                        )}
                      </button>
                      <button
                        className="w-full text-right mb-2 p-2 hover:bg-gray-100 rounded"
                        onClick={() => handleSort("createdAt")}
                      >
                        {t("تاريخ الإنشاء")}
                        {sortConfig.key === "createdAt" && (
                          <span className="float-left">
                            {sortConfig.direction === "asc" ? "▲" : "▼"}
                          </span>
                        )}
                      </button>
                      <button
                        className="w-full bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm"
                        onClick={resetSort}
                      >
                        {t("إعادة تعيين")}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("ابحث هنا")}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            {selectedContacts.length > 0 && (
              <div className="mb-4 flex justify-end space-x-2">
                {selectedContacts.length === 1 && (
                  <button
                    className="bg-blue-500 ml-2 text-white px-3 py-1.5 rounded-lg flex items-center text-sm"
                    onClick={() => handleEdit(selectedContacts[0])}
                  >
                    <Edit size={16} className="ml-1" />
                    {t("تعديل")}
                  </button>
                )}
                <div className="mr-4">
                  <button
                    className="bg-red-500 text-white px-3 py-1.5 rounded-lg flex items-center text-sm"
                    onClick={handleDelete}
                  >
                    <Trash2 size={16} className="ml-1" />
                    {t("حذف")}
                  </button>
                </div>
              </div>
            )}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b text-sm">
                    <th className="py-2 px-4 text-right">{t("اسم العميل")}</th>
                    <th className="py-2 px-4 text-right">{t("اسم الشركة")}</th>
                    <th className="py-2 px-4 text-right">{t("رقم الهاتف")}</th>
                    <th className="py-2 px-4 text-right">{t("الوصول")}</th>
                    <th className="py-2 px-4 text-right">
                      {t("البريد الالكتروني")}
                    </th>
                    <th className="py-2 px-4 text-right">
                      {t("تاريخ الانشاء")}
                    </th>
                    <th className="py-2 px-4 text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  {sortedContacts.map((contact) => (
                    <tr
                      key={contact.id}
                      className="border-b hover:bg-gray-50 text-sm"
                    >
                      <td className="py-2 px-4">
                        <div>{contact.name}</div>
                        <div className="text-xs text-gray-500">
                          {contact.position}
                        </div>
                      </td>
                      <td className="py-2 px-4">{contact.company}</td>
                      <td className="py-2 px-4">{contact.phone}</td>
                      <td className="py-2 px-4">
                        {contact.access === "محدود" ? (
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                            {contact.access}
                          </span>
                        ) : (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            {contact.access}
                          </span>
                        )}
                      </td>
                      <td className="py-2 px-4">{contact.email}</td>
                      <td className="py-2 px-4">{contact.createdAt}</td>
                      <td className="py-2 px-4">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-blue-600"
                          checked={selectedContacts.includes(contact.id)}
                          onChange={() => handleCheckboxChange(contact.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default ContactsTable;
