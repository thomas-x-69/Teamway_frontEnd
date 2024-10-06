import HeroSection from "../components/HeroSubSection";
import DescriptionSubSection from "../components/DescriptionSubSection";
import MultiplePointsSection from "../components/MultiplePointsSubSection";

import heroImage from "../assets/Numbers&Lines_section.png";
import sec1Img from "../assets/Numbers&Lines-vectorImg.png";
import sec2Img from "../assets/Numbers&Lines-vectorImg2.png";

const NumbersAndLinesPage = () => {
  return (
    <div className="font-san text-right" dir="rtl">
      <HeroSection
        title="الارقام والخطوط"
        description="استقبل جميع مكالمات عملك (في السعودية) عبر رقم موحد 9200 أو رقم مجاني 800 سهل التذكر بمزايا عديدة لمراكز الاتصال"
        image={heroImage}
      />
      <DescriptionSubSection
        title="تواصل مع عملائك باحترافية وفعالية عبر خدمة الرقم الموحد "
        description="الرقم الموحد هو رقم سهل الحفظ والتذكر للعملاء يبدأ بـ 9200 وهو مكون من 9 أرقام، 9200 أرقام ثابتة بالإضافة إلى 5 أرقام متغيرة. توفر بيفاتيل هذا الرقم بخيارات عديدة حتى يمكن لأي مؤسسة أو نساط تجاري أن يقوموا باختيار رقم مميز لاستقبال مكالمات العملاء المتزامنة بمزايا عديدة من تيم واي"
      />
      <MultiplePointsSection
        title="أهمية ومزايا الرقم الموحد للمؤسسات والأنشطة التجارية"
        description="المزايا والقيمة التي يوفرها خدمة الرقم الموحد 9200 تجعل أغلب المؤسسات والأنشطة التجارية في السعودية عتمد عليه بشكل أساسي للتواصل مع العملاء!"
        features={[
          "ربط جميع فروع برقم موحد",
          "إبراز و تعظيم القيمة السوقية لمؤسستك",
          "سهولة حفظة و ترسيخه في ذهن العملاء",
        ]}
        image={sec1Img}
        imageOnLeft={false}
      />
      <MultiplePointsSection
        title="استقبل جميع مكالمات عملائك في السعودية عبر رقم واحد لجميع فروع عملك لن تفقد أي مكالمة بعد اليوم"
        description="تخلص من مشاكل انشغال الخطوط وفقدان كثير من مكالمات عملائك باستخدام رقم موحد 9200 لاستقبال جميع المكالمات."
        description1="يمكن للمؤسسات والأنشطة التجارية أن تربط جميع فروع عملها في السعودية برقم موحد تستقبل من خلاله جميع المكالمات بدلًا من استخدام عدة أرقام للتواصل مع العملاء."
        description2="استخدام رقم موحد لجميع فروع شركتك يجعل تقدم خدمة أفضل وتتواصل أفضل وأسرع مع العملاء في أي مكان داخل السعودية."
        image={sec2Img}
        imageOnLeft={true}
      />
    </div>
  );
};

export default NumbersAndLinesPage;
