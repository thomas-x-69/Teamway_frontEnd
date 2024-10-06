import Logo from "../assets/dark_Logo.png";
import Logo2 from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const SignUpForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex h-screen bg-[#1f94c4]">
      <div
        className={`hidden md:flex md:w-[50%]  items-center justify-center
        transform transition-transform duration-1000 ease-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img src={Logo} alt="logo" className="w-[15vw]" />
      </div>
      <div
        className={`w-full flex items-center justify-center p-12 bg-white md:rounded-r-3xl transition-transform duration-1000 ease-out ${
          isVisible ? "" : "translate-x-[-100vw]"
        }`}
      >
        <div className="w-full max-w-md">
          <img
            src={Logo2}
            alt="logo"
            className=" md:hidden w-[40vw] mb-[5rem] m-auto"
          />
          <h2 className="text-xl md:text-3xl font-bold mb-8 text-right text-gray-800">
            انشئ حساب جديد
          </h2>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="الاسم كامل"
                className="w-full p-3 border border-gray-300 rounded-md  text-right"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="رقم الهاتف"
                className="w-full p-3 border border-gray-300 rounded-md text-right"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="البريد الالكتروني"
                className="w-full p-3 border border-gray-300 rounded-md text-right"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="كلمة المرور"
                className="w-full p-3 border border-gray-300 rounded-md text-right"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1F94C4] text-white p-3 rounded-md hover:bg-[#1a7ea8] transition duration-300"
            >
              انشئ حساب
            </button>
          </form>
          <p className="mt-6 text-right text-sm text-gray-600">
            هل لديك حساب بالفعل؟{" "}
            <Link to="/login" className="text-[#1F94C4] hover:underline">
              سجل الدخول
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
