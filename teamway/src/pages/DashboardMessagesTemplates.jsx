import React, { useState } from "react";
import {
  Search,
  Plus,
  ChevronDown,
  Edit2,
  Trash2,
  AlertTriangle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

const MessageTemplateCard = ({ template, onEdit, onDelete }) => (
  <div className="bg-gray-100 p-4 rounded-lg">
    <p className="text-sm font-medium mb-2">{template.text}</p>
    <div className="flex justify-end space-x-2 rtl:space-x-reverse">
      <button
        onClick={() => onEdit(template)}
        className="px-3 py-1 bg-blue-100 text-primary rounded-md text-xs font-medium hover:bg-blue-200 transition-colors flex items-center"
      >
        <Edit2 size={12} className="mr-1" />
        تعديل
      </button>
      <button
        onClick={() => onDelete(template)}
        className="px-3 py-1 bg-red-100 text-red-500 rounded-md text-xs font-medium hover:bg-red-200 transition-colors flex items-center"
      >
        <Trash2 size={12} className="mr-1" />
        حذف
      </button>
    </div>
  </div>
);

const ConfirmModal = ({ isOpen, onClose, onConfirm }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full"
        >
          <div className="flex items-center justify-center text-yellow-500 mb-4">
            <AlertTriangle size={48} />
          </div>
          <h2 className="text-xl font-bold mb-4 text-center">تأكيد الحذف</h2>
          <p className="text-gray-600 mb-6 text-center">
            هل أنت متأكد أنك تريد حذف جميع القوالب؟ لا يمكن التراجع عن هذا
            الإجراء.
          </p>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              نعم، احذف الكل
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
            >
              إلغاء
            </button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const MessageTemplatesDashboard = () => {
  const [templates, setTemplates] = useState([
    { id: 1, text: "اهلا بك في منصة تيم بلص كيف يمكنني مساعدتك" },
    { id: 2, text: "اهلا بك في منصة تيم بلص كيف يمكنني مساعدتك" },
    { id: 3, text: "اهلا بك في منصة تيم بلص كيف يمكنني مساعدتك" },
    { id: 4, text: "اهلا بك في منصة تيم بلص كيف يمكنني مساعدتك" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newTemplateText, setNewTemplateText] = useState("");
  const [editingTemplate, setEditingTemplate] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleEdit = (template) => {
    setEditingTemplate(template);
    setNewTemplateText(template.text);
    setIsAddingNew(true);
  };

  const handleSaveEdit = () => {
    if (editingTemplate) {
      setTemplates(
        templates.map((t) =>
          t.id === editingTemplate.id ? { ...t, text: newTemplateText } : t
        )
      );
    } else {
      setTemplates([...templates, { id: Date.now(), text: newTemplateText }]);
    }
    setEditingTemplate(null);
    setNewTemplateText("");
    setIsAddingNew(false);
  };

  const handleDelete = (template) => {
    setTemplates(templates.filter((t) => t.id !== template.id));
  };

  const handleEmptyTemplates = () => {
    setIsConfirmModalOpen(true);
  };

  const confirmEmptyTemplates = () => {
    setTemplates([]);
    setIsConfirmModalOpen(false);
  };

  const filteredTemplates = templates.filter((template) =>
    template.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#ECEFFA] min-h-screen">
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-primary">قوالب الرسائل</h1>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-4 py-2 rounded-md flex items-center space-x-2 rtl:space-x-reverse"
              onClick={() => {
                setIsAddingNew(true);
                setEditingTemplate(null);
                setNewTemplateText("");
              }}
            >
              <Plus size={20} />
              <span>اضافة رسالة</span>
            </motion.button>
          </div>
          <div className="flex space-x-4 rtl:space-x-reverse mb-6">
            <button
              className="px-6 py-2 bg-primary text-white rounded-md flex items-center"
              onClick={() => document.getElementById("searchInput").focus()}
            >
              <Search size={16} className="mr-2" />
              بحث
            </button>
            <button
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md"
              onClick={handleEmptyTemplates}
            >
              افراغ
            </button>
            <div className="relative flex-grow">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none"
                defaultValue=""
              >
                <option value="" disabled>
                  القسم الرئيسي
                </option>
                {/* Add your options here */}
              </select>
              <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            <div className="relative flex-grow">
              <input
                id="searchInput"
                type="text"
                placeholder="نص الرسالة"
                className="w-full px-4 py-2 border border-gray-300 rounded-md pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {isAddingNew && (
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <textarea
                value={newTemplateText}
                onChange={(e) => setNewTemplateText(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
                rows="3"
                placeholder="أدخل نص الرسالة الجديدة"
              />
              <div className="flex justify-end space-x-2 rtl:space-x-reverse">
                <button
                  onClick={handleSaveEdit}
                  className="px-3 py-1 bg-green-100 text-green-600 rounded-md text-xs font-medium hover:bg-green-200 transition-colors"
                >
                  حفظ
                </button>
                <button
                  onClick={() => {
                    setIsAddingNew(false);
                    setEditingTemplate(null);
                    setNewTemplateText("");
                  }}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium hover:bg-gray-200 transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </div>
          )}
          {filteredTemplates.length === 0 ? (
            <p className="text-center text-gray-500 my-8">
              لا يوجد قوالب رسائل
            </p>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {filteredTemplates.map((template) => (
                <MessageTemplateCard
                  key={template.id}
                  template={template}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        onConfirm={confirmEmptyTemplates}
      />
    </div>
  );
};

export default MessageTemplatesDashboard;
