import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        header: {
          home: "Home",
          solutions: "Solutions",
          callCenter: "Call Center",
          numbersAndLines: "Numbers and Lines",
          customerRelations: "Customer Relations",
          whatsapp: "WhatsApp",
          blog: "Blog",
          contact: "Contact Us",
          requestTrial: "Request Trial",
          login: "Login",
        },
        hero: {
          title: "Technical solutions for an ideal work environment",
          subtitle:
            "Communication and customer relationship management solutions",
          description:
            "Communicate with your customers faster, intelligently, and provide them with an exceptional experience for better service and technical support and unlimited increased sales through one platform for the latest call center system, customer service management and WhatsApp conversations",
          cta: "Request Trial",
          features: {
            quickSetup: "Quick Setup",
            improvedCommunication: "Improved Communication",
            seamlessIntegration: "Seamless Integration",
            controlPanel: "Control Panel",
            instantAnalytics: "Instant Analytics",
          },
        },
        services: {
          title: "Our Services",
          subtitle: "Designed to provide the best experience for our customers",
          numbersAndLines: "Numbers and Lines",
          whatsapp: "WhatsApp Service",
          callCenter: "Call Center",
          crm: "Customer Relationship Management",
        },
        callCenter: {
          title: "Call Center System, Dashboard designed by Team Way",
          description:
            "Connect with your employees in all branches with one network and connect with your customers anywhere through the application or platform. Unified call number supported by CRM",
          cta: "Request Service Trial",
        },
        whatsapp: {
          title: "WhatsApp Service",
          description:
            "From now on, you won't miss any of your customer conversations! Receive all your customer conversations through one window for all your social media business channels!",
          features: [
            "Activate WhatsApp Business with your unified number",
            "Add social media platforms such as (Twitter - Instagram - Google Business - Messenger - Gmail)",
            "All customer correspondence in one window",
            "Unlimited number of users",
            "Unlimited automated conversations",
            "Integration with various systems",
            "Detailed reports and instant analytics",
          ],
          cta: "Request Service Trial",
        },
        crm: {
          title:
            "Customer Relationship Management System for Contact Management",
          description:
            "Increasing your customers' interaction with your services and products starts with using Team Way's customer service management system",
          features: [
            "Create professional customer databases",
            "Manage potential and current customers",
            "Comprehensive statistics and details about customer interactions",
            "Analyze customer information and details",
          ],
          cta: "Request Service Trial",
        },
        footer: {
          subscribe: {
            title: "Subscribe to our newsletter",
            button: "Subscribe",
          },
          solutions: {
            title: "Solutions",
            callCenter: "Call Center",
            numbersAndLines: "Numbers and Lines",
            whatsappService: "WhatsApp Service",
          },
          teamWay: {
            title: "Team Way",
            aboutUs: "About Us",
            ourClients: "Our Clients",
            requestTrial: "Request Trial",
            blog: "Blog",
          },
          rights: "All rights reserved to Team Way © 2024",
        },
        numbersAndLines: {
          title: "Numbers and Lines",
          description:
            "Receive all your customer calls (in Saudi Arabia) through a unified 9200 number or a toll-free 800 number, easy to remember with many features for call centers",
          features: [
            "Unify your branches with a unified call center",
            "Strengthens your brand",
            "Call distribution",
          ],
          cta: "Request Service Trial",
        },
      },
    },
    ar: {
      translation: {
        header: {
          home: "الرئيسية",
          solutions: "الحلول",
          callCenter: "كول سنتر",
          numbersAndLines: "ارقام وخطوط",
          customerRelations: "علاقات العملاء",
          whatsapp: "واتس اب",
          blog: "المدونة",
          contact: "اتصل بنا",
          requestTrial: "طلب التجربه",
          login: "تسجيل الدخول",
        },
        hero: {
          title: "حلول تقنية لبيئة عمل مثالية",
          subtitle: "حلول اتصالات وادارة علاقات عملاء",
          description:
            "تواصل مع عملائك أسرع، بذكاء،وقدم لهم تجربة استثنائية لخدمة ودعم فني أفضل ومبيعات متزايدة بلا حدود عبر منصة واحده لأحدث نظام كول سنتر وإدارة خدمه العملاء ومحادثات الواتس اب",
          cta: "طلب التجربه",
          features: {
            quickSetup: "تركيب سريع",
            improvedCommunication: "تحسين التواصل",
            seamlessIntegration: "تكامل سلس",
            controlPanel: "لوحة تحكم",
            instantAnalytics: "تحليلات فورية",
          },
        },
        services: {
          title: "خدماتنا",
          subtitle: "مصممة لتقديم أفضل تجربة لعملائنا",
          numbersAndLines: "الأرقام والخطوط",
          whatsapp: "خدمة الواتس اب",
          callCenter: "السنترال والكول سنتر",
          crm: "إدارة علاقات العملاء",
        },
        callCenter: {
          title: "نظام السنترال الكول سنتر ، داشبورد مصمم من قبل فريق تيم واي",
          description:
            "تواصل مع موظفيك في كل الفروع بشبة واحدة وتواصل مع عملائك في اي مكان من خلال التطيبق او المنصة توحيد رقم الاتصال مدعوم ب CRM",
          cta: "طلب تجربه الخدمة",
        },
        whatsapp: {
          title: "خدمة واتس اب",
          description:
            "من الآن لن تفقد أي من محادثات عملائك! استقبل جميع محادثات عملائك عبر نافذة واحدة لجميع قنوات عملك عبر السوشيال ميديا!",
          features: [
            "تفعيل الواتساب بيزنس برقمك الموحد",
            "إضافة منصات التواصل الاجتماعى مثل ( تويتر – انستقرام – جوجل بيزنس - ماسنجر - جيميل )",
            "كل مراسلات العميل بنافذة واحدة",
            "عدد لا نهائي من المستخدمين",
            "محادثات تلقائية بلا حدود",
            "الربط مع الأنظمة المختلفة",
            "تقارير مفصلة وتحليلات مباشرة",
          ],
          cta: "طلب تجربه الخدمة",
        },
        crm: {
          title: "نظام إدارة علاقات العملاء لإدارة جهات الاتصال",
          description:
            "زيادة تفاعل عملائك مع خدماتك ومنتجاتك يبدأ باستخدامك لنظام إدارة خدمة العملاء من تيم واي",
          features: [
            "إنشاء قواعد بيانات احترافية للعملاء",
            "إدارة العملاء المحتملين والحاليين",
            "إحصاءات وتفاصيل شاملة حول تفاعلات العملاء",
            "تحليل المعلومات والتفاصيل الخاصة بالعملاء",
          ],
          cta: "طلب تجربه الخدمة",
        },
        footer: {
          subscribe: {
            title: "الاشتراك في نشرتنا",
            button: "اشترك",
          },
          solutions: {
            title: "الحلول",
            callCenter: "السنترال والكول سنتر",
            numbersAndLines: "الأرقام والخطوط",
            whatsappService: "خدمة الواتس اب",
          },
          teamWay: {
            title: "تيم واي",
            aboutUs: "من نحن",
            ourClients: "عملاؤنا",
            requestTrial: "طلب التجربة",
            blog: "المدونة",
          },
          rights: "جميع الحقوق محفوظة لدى تيم واي © 2024",
        },
        numbersAndLines: {
          title: "الأرقام والخطوط",
          description:
            "استقبل جميع مكالمات عملائك (في السعودية) عبر رقم موحد 9200 أو رقم مجاني 800، سهل التذكر مزايا عديدة لمراكز الاتصال",
          features: [
            "وحد فروعك بمركز اتصال موحد",
            "يقوي علامتك التجارية",
            "توزيع المكالمات",
          ],
          cta: "طلب تجربه الخدمة",
        },
      },
    },
  },

  lng: "ar", // Set English as the default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
