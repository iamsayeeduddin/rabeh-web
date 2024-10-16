"use client";
import React, { useMemo } from "react";
import TitleHead from "@/components/TitleHead";
import useFonts from "@/utils/useFonts";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import { useTranslations } from "next-intl";

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Section = ({ title, content }) => (
  <div className="flex flex-col gap-5 my-5">
    <h3 className="font-semibold text-[32px]">{title}</h3>
    {content.map((item, index) => (
      <div key={index} className="text-justify">
        {item.subtitle ? (
          <>
            <h4 className="font-semibold text-lg">{item.subtitle}</h4>
            <ul className="ml-4 text-lg list-disc">
              {item.items.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <span className="font-semibold text-[16px]">{item.title}</span>
            <span>{item.text}</span>
          </>
        )}
      </div>
    ))}
  </div>
);

const Page = ({ params: { locale } }) => {
  const fonts = useFonts();
  const t = useTranslations();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sections = useMemo(() => {
    if (locale === "ar") {
      return [
        {
          title: "المعلومات التي نجمعها",
          content: [
            {
              subtitle: "المعلومات الشخصية",
              items: [
                "الاسم، تفاصيل الاتصال (البريد الإلكتروني، رقم الهاتف) والعنوان.",
                "التفاصيل المالية للمعاملات، مثل معلومات الحساب البنكي.",
                "الهوية الحكومية للتحقق.",
              ],
            },
            {
              subtitle: "معلومات الاستخدام",
              items: [
                "عنوان الـ IP، نوع المتصفح، ونظام التشغيل.",
                "بيانات التفاعل مع منصتنا، بما في ذلك الصفحات التي تمت زيارتها والإجراءات المتخذة.",
              ],
            },
            {
              subtitle: "معلومات الجهاز",
              items: ["معلومات حول الأجهزة المستخدمة للوصول إلى رابه (مثل معرف الجهاز والموقع الجغرافي)."],
            },
          ],
        },
        {
          title: "كيف نستخدم معلوماتك",
          content: [
            { title: "خدمات المنصة:", text: "لتسهيل التمويل الجماعي وتبادل الملكية والخدمات المالية الأخرى التي يقدمها رابه." },
            { title: "التحقق:", text: "للتحقق من هويتك وضمان الامتثال للمتطلبات القانونية والتنظيمية." },
            {
              title: "الاتصال:",
              text: "للتواصل معك بخصوص الحملات والاستثمارات والتحديثات وغيرها من المعلومات المتعلقة بالمنصة.",
            },
            { title: "التسويق:", text: "لإرسال مواد ترويجية ونشرات إخبارية وعروض خاصة لك. يمكنك إلغاء الاشتراك في أي وقت." },
            { title: "التحليلات:", text: "لتحليل سلوك المستخدم وتحسين أداء المنصة ووظيفتها وتجربة المستخدم." },
            { title: "الأمان:", text: "لحمايتك من الاحتيال والمعاملات غير المصرح بها والانتهاكات الأمنية." },
          ],
        },
        {
          title: "مشاركة معلوماتك",
          content: [
            { title: "بموافقتك:", text: "عندما تمنحنا إذناً صريحاً بمشاركة معلوماتك مع جهات خارجية." },
            {
              title: "مزودو الخدمة:",
              text: "قد نشارك بياناتك مع مزودي الخدمة الموثوقين الذين يساعدون في تشغيل منصتنا بشرط أن يلتزموا بمعايير الخصوصية الخاصة بنا.",
            },
            {
              title: "الامتثال القانوني:",
              text: "إذا طلب منا بموجب القانون أو الأنظمة أو أمر المحكمة أو طلب حكومي، قد نكشف بياناتك للامتثال للالتزامات القانونية وفقًا للقانون السعودي.",
            },
            {
              title: "تحويلات الأعمال:",
              text: "في حالة الاندماج أو الاستحواذ أو بيع كل أو جزء من أصولنا، قد يتم نقل بياناتك إلى الكيان الجديد.",
            },
          ],
        },
        {
          title: "أمان البيانات",
          content: [
            {
              text: "تأخذ رابه أمن بياناتك الشخصية على محمل الجد. نحن نطبق إجراءات أمنية قياسية في الصناعة، بما في ذلك التشفير والجدران النارية لحماية بياناتك. ومع ذلك، لا توجد منصة عبر الإنترنت آمنة تمامًا ولا يمكننا ضمان الأمان المطلق.",
            },
          ],
        },
        {
          title: "حقوقك",
          content: [
            { title: "الوصول إلى بياناتك:", text: "طلب معلومات عن البيانات التي نحتفظ بها عنك." },
            { title: "تصحيح بياناتك:", text: "طلب تصحيحات للبيانات غير الدقيقة أو غير الكاملة." },
            { title: "حذف بياناتك:", text: "طلب حذف بياناتك الشخصية، رهناً بالمتطلبات القانونية." },
            { text: "لممارسة أي من هذه الحقوق، يرجى الاتصال بنا على: " },
            {
              text: (
                <a href="mailto:ceo@rabeh.sa" className="text-primary hover:text-primary/80">
                  ceo@rabeh.sa
                </a>
              ),
            },
          ],
        },
        {
          title: "الاحتفاظ بالبيانات",
          content: [
            {
              text: "نحتفظ بمعلوماتك الشخصية طالما كانت ضرورية لتحقيق الأغراض التي تم جمعها من أجلها أو للامتثال للالتزامات القانونية. بمجرد أن تصبح بياناتك غير ضرورية، سيتم حذفها بشكل آمن أو جعلها مجهولة.",
            },
          ],
        },
        {
          title: "تحويلات البيانات الدولية",
          content: [
            {
              text: "نظرًا للطبيعة العالمية لمنصتنا، قد يتم نقل بياناتك ومعالجتها في دول خارج المملكة العربية السعودية. نحن نضمن أن هذه التحويلات تتوافق مع لوائح حماية البيانات وأن بياناتك محمية أينما تم معالجتها.",
            },
          ],
        },
        {
          title: "روابط الجهات الخارجية",
          content: [
            {
              text: "قد تحتوي منصتنا على روابط لمواقع إلكترونية خارجية. لا تتحمل رابه المسؤولية عن ممارسات الخصوصية أو محتوى هذه المواقع. نشجعك على مراجعة سياسات الخصوصية لأي مواقع خارجية تقوم بزيارتها.",
            },
          ],
        },
        {
          title: "التغييرات في سياسة الخصوصية هذه",
          content: [
            {
              text: "قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سيتم نشر أي تغييرات على هذه الصفحة مع تاريخ سريان محدث. نشجعك على مراجعة السياسة بشكل دوري.",
            },
          ],
        },
      ];
    } else {
      return [
        {
          title: "Information We Collect",
          content: [
            {
              subtitle: "Personal Information",
              items: [
                "Name, contact details (email, phone number), and address.",
                "Financial details for transactions, such as bank account information.",
                "Government-issued identification for verification purposes.",
              ],
            },
            {
              subtitle: "Usage Information",
              items: [
                "IP address, browser type, and operating system.",
                "Interaction data with our platform, including pages visited and actions taken.",
              ],
            },
            {
              subtitle: "Device Information",
              items: ["Information about the devices used to access RABEH (e.g., device ID, geolocation)."],
            },
          ],
        },
        {
          title: "How We Use Your Information",
          content: [
            { title: "Platform Services:", text: "To facilitate crowdfunding, ownership exchange, and other fintech services offered by RABEH." },
            { title: "Verification:", text: "To verify your identity and ensure compliance with legal and regulatory requirements." },
            {
              title: "Communication:",
              text: "To communicate with you regarding your campaigns, investments, updates, and other platform-related information.",
            },
            { title: "Marketing:", text: "To send you promotional materials, newsletters, and special offers. You can opt-out at any time." },
            { title: "Analytics:", text: "To analyze user behavior and improve the platform’s performance, functionality, and user experience." },
            { title: "Security:", text: "To protect against fraud, unauthorized transactions, and security breaches." },
          ],
        },
        {
          title: "Sharing Your Information",
          content: [
            { title: "With Your Consent:", text: "When you have given us explicit permission to share your information with third parties." },
            {
              title: "Service Providers:",
              text: "We may share your data with trusted service providers who assist in operating our platform, provided they comply with our data privacy standards.",
            },
            {
              title: "Legal Compliance:",
              text: "If required by law, regulation, court order, or government request, we may disclose your data to comply with legal obligations under Saudi law.",
            },
            {
              title: "Business Transfers:",
              text: "In the event of a merger, acquisition, or sale of all or part of our assets, your data may be transferred to the new entity.",
            },
          ],
        },
        {
          title: "Data Security",
          content: [
            {
              text: "RABEH takes the security of your personal data seriously. We implement industry-standard security measures, including encryption and firewalls, to protect your data. However, no online platform is entirely secure, and we cannot guarantee absolute security.",
            },
          ],
        },
        {
          title: "Your Rights",
          content: [
            { title: "Access Your Data:", text: "Request information about the data we hold on you." },
            { title: "Correct Your Data:", text: "Request corrections to inaccurate or incomplete data." },
            { title: "Delete Your Data:", text: "Request the deletion of your personal data, subject to legal requirements." },
            { text: "To exercise any of these rights, please contact us at: " },
            {
              text: (
                <a href="mailto:ceo@rabeh.sa" className="text-primary hover:text-primary/80">
                  ceo@rabeh.sa
                </a>
              ),
            },
          ],
        },
        {
          title: "Retention of Data",
          content: [
            {
              text: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected or to comply with legal obligations. Once your data is no longer needed, it will be securely deleted or anonymized.",
            },
          ],
        },
        {
          title: "International Data Transfers",
          content: [
            {
              text: "Given the global nature of our platform, your data may be transferred to and processed in countries outside of Saudi Arabia. We ensure that such transfers comply with data protection regulations and that your data is protected wherever it is processed.",
            },
          ],
        },
        {
          title: "Third-Party Links",
          content: [
            {
              text: "Our platform may contain links to third-party websites. RABEH is not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of any external sites you visit.",
            },
          ],
        },
        {
          title: "Changes to this Privacy Policy",
          content: [
            {
              text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date. We encourage you to review the policy periodically.",
            },
          ],
        },
      ];
    }
  }, [locale]);

  return (
    <div>
      <TitleHead locale={locale} title={t("privacyPolicy")} desc={t("privacySubtitle")} />
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        className={classNames("flex flex-col md:pt-0 p-10 md:p-16", locale === "en" ? fonts.urbanist.className : "")}
      >
        {sections.map((section, index) => (
          <Section key={index} title={section.title} content={section.content} />
        ))}
        <Section
          title="Contact Us"
          content={[
            {
              title: "Email: ",
              text: (
                <a href="mailto:ceo@rabeh.sa" className="text-primary hover:text-primary/80">
                  ceo@rabeh.sa
                </a>
              ),
            },
            {
              title: "Phone: ",
              text: (
                <a href="tel:+12026565556" className="text-primary hover:text-primary/80">
                  +1(202)-656-5556
                </a>
              ),
            },
          ]}
        />
      </motion.div>
    </div>
  );
};

export default Page;
