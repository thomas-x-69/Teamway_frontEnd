import HeroSection from "../components/HeroSubSection";
import DescriptionSubSection from "../components/DescriptionSubSection";
import MultiplePointsSection from "../components/MultiplePointsSubSection";

import heroImage from "../assets/callCenter_section.png";
import sec1Img from "../assets/callCenter-vectorImg.png";
import sec2Img from "../assets/callCenter-vectorImg2.png";

const CallCenterPage = () => {
  return (
    <div className="font-san text-right" dir="rtl">
      <HeroSection
        title="نظام السنترال الكول سنتر ، داشبورد مصمم من قبل فريق تيم واي "
        description="تواصل مع موظفيك في كل الفروع بشبة واحدة وتواصل مع عملائك في اي مكان من خلال التطيبق او المنصة توحيد رقم الاتصال مدعوم ب CRM"
        image={heroImage}
      />
      <DescriptionSubSection
        title="تيم واي كول سنتر"
        description="مركز اتصال احترافي يعمل سحابيًا بالكامل ويمكنك من إجراء واستقبال أكبر عدد ممكن من المكالمات المتزامنة والتواصل مع عملائك باستخدام الكمبيوتر أو الجوال عن بعد ومن أي مكان فقط بالاتصال بالإنترنت وبمزايا وخيارات متعددة."
      />
      <MultiplePointsSection
        title="مركز اتصال احترافي متخصص لعملك"
        description="نظام مركز اتصال قوي مع واجهة سهلة الاستخدام، يمكنك من خلاله إدارة المكالمات وتوزيعها على الموظفين بكفاءة."
        features={[
          "نظام إدارة المكالمات المتقدم",
          "دعم مكالمات الفيديو والصوت",
          "إدارة قوائم الانتظار بكفاءة",
          "تسجيل المكالمات وأرشفتها",
          "التكامل مع أنظمة CRM الأخرى",
        ]}
        image={sec1Img}
        imageOnLeft={false}
      />
      <MultiplePointsSection
        title="مركز اتصال احترافي متخصص لعملك"
        description="نظام مركز اتصال قوي مع واجهة سهلة الاستخدام، يمكنك من خلاله إدارة المكالمات وتوزيعها على الموظفين بكفاءة."
        features={[
          "نظام إدارة المكالمات المتقدم",
          "دعم مكالمات الفيديو والصوت",
          "إدارة قوائم الانتظار بكفاءة",
          "تسجيل المكالمات وأرشفتها",
          "التكامل مع أنظمة CRM الأخرى",
        ]}
        image={sec2Img}
        buttonText="طلب تجربه الخدمة"
        imageOnLeft={true}
      />
    </div>
  );
};

export default CallCenterPage;
