import HeroSection from "../components/HeroSubSection";
import DescriptionSubSection from "../components/DescriptionSubSection";
import MultiplePointsSection from "../components/MultiplePointsSubSection";

import heroImage from "../assets/whatsapp_section.png";
import sec1Img from "../assets/CRM-Whatsapp-vectorImg.png";
import sec2Img from "../assets/CRM-Whatsapp-vectorImg2.png";

const WhatsAppPage = () => {
  return (
    <div className="font-san text-right" dir="rtl">
      <HeroSection
        title="خدمة واتس اب "
        description="من الآن لن تفقد أي من محادثات عملائك! استقبل جميع محادثات عملائك عبر نافذة واحدة لجميع قنوات عملك عبر السوشيال ميديا!"
        image={heroImage}
      />
      <DescriptionSubSection
        title=" مع واتساب بيزنس API، تواصل مع عملاء جدد، زود مبيعاتك "
        description="واتساب بزنس API هو نظام مُطور لتطبيق المحادثة واتساب، وهي وسيلة أكثر احترافية للشركات المتوسطة والكبرى للتواصل مع عملائها بطريقة أسرع وأفضل لمختلف أغراض التسويق وخدمة العملاء والمبيعات والدعم الفني."
      />
      <MultiplePointsSection
        title="استخدم أرقام تواصل عملك لتحصل على حساب واتساب بيزنس API متكامل"
        description="نزودك بحساب واتساب للأعمال API متكامل، فقط باستخدام أي من أرقام التواصل الخاصة بشركتك أو تزودك بيفاتيل برقم أو خط أرضي وتقوم بتفعيل الخدمة عليه:"
        features={[
          "أرقام الجوال",
          "الخطوط الأرضية",
          "الرقم الموحد 9200",
          "الهاتف المجاني 800",
        ]}
        image={sec1Img}
        imageOnLeft={false}
      />
      <MultiplePointsSection
        title="تواصل مع كل العملاء في الوقت الفعلي عبر حساب واتساب واحد لعدد لا نهائي من المستخدمين"
        description="احصل على حساب واتساب بيزنس API احترافي يستخدمه جميع موظفي التسويق وخدمة العملاء والمبيعات والدعم الفني في نفس الوقت، ولن تفقد أي من العملاء بعد اليوم!"
        features={[
          "حساب واتساب للأعمال",
          "وصف تعريفي",
          "رابط الموقع",
          "ساعات العمل",
          "عنوان الشركة",
          "صورة الغلاف",
        ]}
        image={sec2Img}
        imageOnLeft={true}
      />
    </div>
  );
};

export default WhatsAppPage;
