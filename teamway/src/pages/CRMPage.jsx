import HeroSection from "../components/HeroSubSection";
import DescriptionSubSection from "../components/DescriptionSubSection";
import MultiplePointsSection from "../components/MultiplePointsSubSection";

import heroImage from "../assets/CRM_section.png";
import sec1Img from "../assets/CRM-Whatsapp-vectorImg.png";
import sec2Img from "../assets/CRM-Whatsapp-vectorImg2.png";

const CRMPage = () => {
  return (
    <div className="font-san text-right" dir="rtl">
      <HeroSection
        title="نظام إدارة علاقات العملاء لإدارة جهات الاتصال"
        description="زيادة تفاعل عملائك مع خدماتك ومنتجاتك يبدأ باستخدامك لنظام إدارة خدمة العملاء من تيم واي!"
        image={heroImage}
      />
      <DescriptionSubSection
        title="نظام إدارة خدمة العملاء CRM"
        description="كثير من كبرى الشركات الناجحة في الشرق الأوسط بدأت من هنا! طور علاقات عملائك لأرباح ومبيعات أكثر عبر نظام إدارة خدمة العملاء الأكثر انتشارًا في الشرق الأوسط! نظام بيفاتيل لإدارة علاقات العملاء طريقك لعلاقات أقوى تدوم طويلًا، أرباح تزيد باستمرار، خدمة ودعم فني أفضل للعملاء وإدارة أكثر فعالية للمبيعات والمشاريع والمنتجات، كل هذا وأكثر عبر نظام واحد احترافي متكامل."
      />
      <MultiplePointsSection
        title="نظام إدارة خدمة العملاء الأكثر فعالية لإدارة أعمالك"
        description="نظام بيفاتيل لإدارة علاقات العملاء هو نظام متكامل يمكن الشركات والأنشطة التجارية من إدارة كافة تفاعلات عملائك الحاليين والجدد مع ما تقدمه من منتجات أو خدمات، بأدوات وخيارات عديد ة تساعدك على بناء علاقات قوية ومربحة مع العملاء الجدد وتحويلهم لعملاء مستمرين وتحسين علاقات العملاء الحاليين بتطوير خدمة العملاء والدعم الفني وحتى زيادة المبيعات والأرباح."
        image={sec1Img}
        imageOnLeft={false}
      />
      <MultiplePointsSection
        title="كل عمليات مبيعاتك في مكان واحد، لتحول كل علاقاتك مع العملاء لمبيعات وأرباح متزايدة!"
        description="استكشف فرص بيعية جديدة، تحكم أكثر في مراحل المبيعات، تابع سير عملك وزود مبيعاتك وأرباحك بمزايا عديدة توفرها لك بيفاتيل في نظام واحد!"
        features={[
          "إدارة ومتابعة سير عمل المبيعات",
          "تعيين وتوزيع مهام الموظفين تلقائيًا",
          "تحديد الأولويات لموظفي المبيعات",
          "وضع تصور لمراحل المبيعات",
          "أتمتة عمليات المبيعات",
          "تتبع العملاء المحتملين والصفقات",
        ]}
        image={sec2Img}
        imageOnLeft={true}
      />
    </div>
  );
};

export default CRMPage;
