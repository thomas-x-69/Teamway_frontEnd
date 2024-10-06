import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png";
import { closeForm } from "../store/trialFormSlice";
import axios from "axios";

const TrialRequestForm = () => {
  const dispatch = useDispatch();
  const isFormOpen = useSelector((state) => state.trialForm.isFormOpen);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    mobileNumber: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return; // Prevent submission if already loading
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://teamwayserver20240830213215.azurewebsites.net/api/RequestDemo",
        {
          ...formData,
          requestDate: new Date().toISOString(),
        }
      );
      console.log("API Response:", response.data);
      setStatus("success");
      setTimeout(() => {
        setStatus(null);
        dispatch(closeForm());
      }, 2000);
    } catch (error) {
      console.error("API Error:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 2000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    dispatch(closeForm());
  };

  return (
    <AnimatePresence>
      {isFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative"
          >
            <button
              onClick={handleClose}
              className="absolute w-5 top-4 right-[1.5rem] text-2xl text-gray-500 hover:text-primary"
            >
              ✕
            </button>
            <div className="flex justify-center mb-6">
              <img src={Logo} alt="Team Way Logo" className="h-12 m-6" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-4 rtl:space-x-reverse">
                <input
                  type="text"
                  name="firstName"
                  placeholder="الاسم الأول"
                  className="w-1/2 p-2 bg-[#F2F2F2] rounded-md"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="الاسم الثاني"
                  className="w-1/2 p-2  bg-[#F2F2F2] rounded-md"
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="البريد الإلكتروني"
                className="w-full p-2  bg-[#F2F2F2] rounded-md"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="companyName"
                placeholder="اسم الشركة"
                className="w-full p-2  bg-[#F2F2F2] rounded-md"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="mobileNumber"
                placeholder="رقم الجوال"
                className="w-full p-2  bg-[#F2F2F2] rounded-md"
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="رسالتك"
                className="w-full p-2  bg-[#F2F2F2] rounded-md h-24"
                onChange={handleChange}
              ></textarea>
              <button
                type="submit"
                className={`w-full bg-primary text-white p-2 rounded-md transition-colors ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#176f92]"
                }`}
                disabled={isLoading}
              >
                {isLoading ? "جاري الإرسال..." : "طلب التجربة"}
              </button>
            </form>
          </motion.div>
          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className={`fixed bottom-4 right-4 p-4 rounded-md ${
                  status === "success" ? "bg-green-500" : "bg-red-500"
                } text-white`}
              >
                {status === "success"
                  ? "تم إرسال الطلب بنجاح!"
                  : "حدث خطأ. يرجى المحاولة مرة أخرى."}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TrialRequestForm;
