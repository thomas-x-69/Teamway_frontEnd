import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../assets/dark_Logo.png";
import Logo2 from "../assets/logo.png";

const LogInForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "web/api/Authentication/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      login(data.token); // Save token using the login function from AuthContext
      navigate("/dashboard");
    } catch (err) {
      setError("تعذر تسجيل الدخول");
    }
  };

  return (
    <div className="flex h-screen bg-[#1f94c4]">
      <div
        className={`hidden md:flex md:w-[50%] items-center justify-center
        transform transition-transform duration-1000 ease-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img src={Logo} alt="logo" className="w-[15vw]" />
      </div>
      <div
        className={`w-full flex items-center justify-center p-12 bg-white md:rounded-r-3xl transition-transform duration-1000 ease-out ${
          isVisible ? "" : "md:translate-x-[-100vw]"
        }`}
      >
        <div className="w-full max-w-md">
          <img
            src={Logo2}
            alt="logo"
            className="md:hidden w-[40vw] mb-[5rem] m-auto"
          />
          <h2 className="text-xl md:text-3xl font-bold mb-8 text-right text-gray-800">
            تسجيل الدخول
          </h2>
          {error && <p className="text-red-500 text-right mb-4">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="اسم المستخدم"
                className="w-full p-3 border border-gray-300 rounded-md text-right"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="كلمة المرور"
                className="w-full p-3 border border-gray-300 rounded-md text-right"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1F94C4] text-white p-3 rounded-md hover:bg-[#1a7ea8] transition duration-300"
            >
              تسجيل الدخول
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
