import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "./i18n";
import store from "./store/store";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TrialRequestForm from "./components/TrialRequestForm";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import CallCenterPage from "./pages/CallCenterPage";
import CRMPage from "./pages/CRMPage";
import NumbersAndLinesPage from "./pages/NumbersAndLinesPage";
import WhatsAppPage from "./pages/WhatsAppPage";
import SignUpForm from "./pages/SignUpForm";
import LogInForm from "./pages/LogInForm";
import DashboardHome from "./pages/DashboardHome";
import DashboardLayout from "./components/DashboardLayout";
import WhatsAppDashboard from "./pages/WhatsAppDashboard";
import CallsDashboard from "./pages/CallsDashboard";
import "./customScrollbar.css";
import DashboardMessagesWhatsapp from "./pages/DashboardMessagesWhatsapp";
import DashboardMessagesTemplates from "./pages/DashboardMessagesTemplates";
import CRMDashboard from "./pages/CRMDashboard";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const PublicRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();

  if (token && !location.pathname.startsWith("/dashboard")) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

function AppContent() {
  const location = useLocation();
  const isAuthPage = ["/signup", "/login"].includes(location.pathname);
  const isDashboardPage = location.pathname.startsWith("/dashboard");
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  };

  return (
    <div
      className={`font-arabic text-${
        i18n.language == "ar" ? "right" : "left"
      } bg-[#ECEFFA] overflow-hidden #1F94C4 scrollbar-track-lighter scrollbar-thumb-normal hover:scrollbar-thumb-dark`}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {!isAuthPage && !isDashboardPage && (
        <Header changeLanguage={changeLanguage} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <PublicRoute>
              <BlogPage />
            </PublicRoute>
          }
        />
        <Route
          path="/call-center"
          element={
            <PublicRoute>
              <CallCenterPage />
            </PublicRoute>
          }
        />
        <Route
          path="/crm"
          element={
            <PublicRoute>
              <CRMPage />
            </PublicRoute>
          }
        />
        <Route
          path="/numbers-and-lines"
          element={
            <PublicRoute>
              <NumbersAndLinesPage />
            </PublicRoute>
          }
        />
        <Route
          path="/whatsapp"
          element={
            <PublicRoute>
              <WhatsAppPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUpForm />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LogInForm />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Routes>
                  <Route index element={<DashboardHome />} />
                  <Route path="messages" element={<WhatsAppDashboard />} />
                  <Route
                    path="messages/whatsapp"
                    element={<DashboardMessagesWhatsapp />}
                  />
                  <Route
                    path="messages/templates"
                    element={<DashboardMessagesTemplates />}
                  />
                  <Route path="calls" element={<CallsDashboard />} />
                  <Route path="crm" element={<CRMDashboard />} />
                </Routes>
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
      {!isAuthPage && !isDashboardPage && <TrialRequestForm />}
      {!isAuthPage && !isDashboardPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
