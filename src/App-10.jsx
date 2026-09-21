import React, { useState, useEffect, useCallback } from "react";
import QRCode from "qrcode";
import {
  Send,
  Instagram,
  Facebook,
  Youtube,
  Music2,
  Globe,
  MessageCircle,
  Link2,
  Lock,
  Plus,
  Pencil,
  Trash2,
  X,
  Check,
  ArrowUpRight,
  ArrowRight,
  Users,
  BookOpen,
  Layers,
  Phone,
  ChevronDown,
  ChevronUp,
  PlayCircle,
  FileText,
  Clock,
} from "lucide-react";

const ADMIN_PASSWORD = "haedar077151haedar123";
const LOGO_SRC = "/images/logo.jpg";

const PLATFORM_META = {
  telegram: { label: "تليكرام", icon: Send, color: "#2F6F62" },
  instagram: { label: "انستقرام", icon: Instagram, color: "#C1502E" },
  whatsapp: { label: "واتساب", icon: MessageCircle, color: "#2F6F62" },
  facebook: { label: "فيسبوك", icon: Facebook, color: "#2F6F62" },
  youtube: { label: "يوتيوب", icon: Youtube, color: "#C1502E" },
  tiktok: { label: "تيك توك", icon: Music2, color: "#14181F" },
  website: { label: "موقع", icon: Globe, color: "#8B93A7" },
  phone: { label: "اتصال", icon: Phone, color: "#2F6F62" },
  other: { label: "رابط", icon: Link2, color: "#8B93A7" },
};

const WORKSHOP1_IMG = "/images/workshop1.jpg";

const SEED_WORKSHOPS = [
  {
    id: "w3",
    title: "جهاز تخطيط القلب ECG — الصيانة والتشخيص",
    category: "أجهزة طبية",
    description:
      "تعلن منصّة نبض عن إقامة ورشة تخصصية بعنوان: جهاز تخطيط القلب ECG.\n\n👨‍🔧 تقديم: المهندس مجتبى قحطان\nمهندس طب حياتي يمتلك خبرة تمتد لأكثر من 6 سنوات في مجال هندسة الأجهزة الطبية، حاصل على عدد من الشهادات والدورات التخصصية، ويمتلك خبرة علمية وعملية في مجال الأجهزة الطبية وتشغيلها وصيانتها.\n\n🔬 محاور الورشة:\n▪️ مقدمة عن جهاز ECG واستخداماته وأهميته.\n▪️ مبدأ عمل جهاز تخطيط القلب.\n▪️ التركيب الداخلي والخارجي للجهاز.\n▪️ مسار الإشارة من الأقطاب إلى العرض والطباعة.\n▪️ الصيانة الوقائية (PM) والمعايرة.\n▪️ الأعطال الشائعة وطرق تشخيصها.\n▪️ أشهر رسائل الأعطال وكيفية التعامل معها.\n▪️ تدريب عملي على فحص الجهاز وتشخيص وصيانة الأعطال.\n\n✨ ورشة تجمع بين الجانب العلمي والتطبيق العملي في مجال الأجهزة الطبية.\n\n📌 كونوا على الموعد.\n\nPULSE | Biomedical Engineering 🩺🔬",
    imageUrl: "/images/workshop3.jpg",
    date: "28 / 8 / 2026 — الساعة 9:00 مساءً",
    place: "أونلاين (عبر تليكرام)",
    link: "https://t.me/+UTXYdsBvEKZiY2Vi",
    platform: "telegram",
    status: "active",
  },
  {
    id: "w2",
    title: "ورشة تخصصية | الهندسة العصبية (Neural Engineering)",
    category: "هندسة عصبية",
    description:
      "تعلن منصة نبض هندسة الطب الحياتي عن إقامة ورشة تخصصية في الهندسة العصبية، أحد الفروع المهمة والحديثة في هندسة الطب الحياتي، والتي تجمع بين الهندسة والعلوم العصبية بهدف فهم الجهاز العصبي وتطوير تقنيات وأجهزة تساعد في تشخيص وعلاج الاضطرابات العصبية والتفاعل مع الإشارات العصبية.\n\n🔬 شنو هي الهندسة العصبية؟\nالهندسة العصبية هي مجال متعدد التخصصات يهتم بدراسة الإشارات والأنظمة العصبية وتوظيف المبادئ الهندسية لتطوير حلول وتقنيات طبية، مثل واجهات الدماغ والحاسوب، تحليل الإشارات العصبية، الأطراف والأجهزة العصبية الذكية، وغيرها من التطبيقات الطبية الحديثة.\n\n📚 محاور الورشة\n🔹 مقدمة في الهندسة العصبية.\n🔹 أساسيات الجهاز العصبي وآلية نقل الإشارات العصبية.\n🔹 واجهات الدماغ والحاسوب (BCI).\n🔹 الأجهزة والتقنيات المستخدمة في هندسة الأعصاب.\n🔹 معالجة وتحليل الإشارات العصبية.\n🔹 تطبيقات الهندسة العصبية في المجال الطبي.\n🔹 الذكاء الاصطناعي في هندسة الأعصاب.\n🔹 فرص العمل والمسار المهني.\n🔹 مستقبل الهندسة العصبية.\n🔹 دراسة حالة (Case Study) وتطبيق عملي.\n\n👩‍🏫 نبذة عن المدربة\nالمهندسة زهراء مخلص\nتمتلك خبرة في مجال هندسة الطب الحياتي لأكثر من 5 سنوات، ومدربة متخصصة في تقديم المحتوى العلمي والتعليمي. كما تعمل صانعة محتوى علمي في منصة نبض هندسة الطب الحياتي، وتهتم بتبسيط المفاهيم العلمية ونشر المعرفة في مختلف تخصصات هندسة الطب الحياتي. وتختص باهتمامها في مجالي الهندسة العصبية والهندسة الوراثية، وتسعى إلى تقديم المعرفة العلمية بأسلوب عملي ومبسط لطلبة ومهتمي التخصص.\n\n🧠 إذا كنت مهتمًا بالدماغ، الإشارات العصبية، الذكاء الاصطناعي والتقنيات الطبية المستقبلية… فهذه الورشة إلك.\n\nمنصة نبض هندسة الطب الحياتي\nنحو معرفة أعمق… ومستقبل هندسي أقوى. 🧠🔬",
    imageUrl: "/images/workshop2.jpg",
    date: "20 / 8 / 2026 — الساعة 9:00 مساءً",
    place: "أونلاين (عبر تليكرام)",
    link: "https://t.me/+-Mk0HGO4f_FhNGQy",
    platform: "telegram",
    status: "ended",
  },
  {
    id: "w1",
    title: "دورة مجانية في مجال الأجهزة الطبية",
    category: "أجهزة طبية",
    description:
      "يسر منصة نبض هندسة الطب الحياتي الإعلان عن إقامة دورة مجانية في مجال الأجهزة الطبية، بإشراف وتدريب المهندس حيدر علي.\n\nمحاور الدورة:\n- جهاز المونيتور (Patient Monitor): آلية العمل، تشخيص الأعطال، والصيانة.\n- جهاز التنفس الصناعي (Ventilator): آلية العمل، تشخيص الأعطال، والصيانة.\n- التعرف على أقسام المستشفى ووظائفها.\n\nتفاصيل الدورة:\n💻 إلكترونية (عن بُعد)\n💰 مجانية بالكامل\n⏳ مدة الدورة: 6 أسابيع\n🎥 محاضرة أسبوعيًا أو محاضرتان حسب الجدول\n📝 اختبار بعد كل محاضرة لقياس مستوى الاستيعاب",
    imageUrl: WORKSHOP1_IMG,
    date: "موعد انطلاق الدورة: 15 / 7 / 2026",
    place: "أونلاين (عن بُعد)",
    link: "https://t.me/+-Mk0HGO4f_FhNGQy",
    platform: "telegram",
    status: "ended",
  },
  {
    id: "w4",
    title: "ورشة أساسيات المختبر الطبية | جانب عملي + جانب نظري",
    category: "مختبرات طبية",
    description: "هل ترغب بتطوير مهاراتك ودخول عالم المختبرات الطبية بثقة وكفاءة؟\n\nبالتعاون المشترك منصة شاهد & منصة نبض عن إقامة ورشة تدريبية متخصصة في أساسيات المختبر الطبية تجمع بين الجانب العملي والنظري ومناسبة للطلاب والخريجين وكل من يرغب بتطوير مهاراته في المجال المختبري.\n\n⏱ مدة الورشة: 3 ساعات\n🎓 شهادة مشاركة: اختيارية\n\n⚠️ عدد المقاعد محدود",
    imageUrl: "/images/w_lab.jpg",
    date: "السبت 15/8 — الساعة 10:00 صباحًا",
    place: "الكاظمية – مكتبة الكاظمية العامة",
    link: "https://t.me/+-Mk0HGO4f_FhNGQy",
    platform: "telegram",
    status: "ended",
  },
  {
    id: "w5",
    title: "حاضنة الأطفال (Infant Incubator)",
    category: "أجهزة طبية",
    description: "تحت إشراف وزارة الشباب والرياضة / المركز الوطني للعمل التطوعي\nإيمانًا بأهمية التطوير المستمر ورفد الكوادر الهندسية والطبية بالمهارات العملية والتقنية اللازمة للتميز في سوق العمل، وتجسيدًا لشعارنا الدائم في الانتقال من الجانب النظري إلى التطبيق العملي؛\n\n🔷 نعلن وبالتعاون منصة نبض هندسة الطب الحياتي، مع رابطة رواد هندسة الطب الحياتي، عن إقامة ورشة عمل علمية تخصصية (مجانية)\n\n🔹 بعنوان: حاضنة الأطفال (Infant Incubator)\nتستهدف هذه الورشة المهندسين، وطلبة كليات الهندسة (الطب الحياتي والأجهزة الطبية)، وكافة المهتمين والناشطين في القطاع والمجال الطبي التخصصي لتعزيز مهاراتهم التقنية في صيانة ومبدأ عمل هذا الجهاز الحيوي.\n\n🔹 تُقدم الورشة: المهندسة سارة محمد\n• بكالوريوس هندسة الأجهزة الطبية.\n• دبلوم في الإدارة الصحية والطبية.\n• حاصلة على شهادة تخصصية من جمهورية مصر العربية في مجال أجهزة السونار.\n• تمتلك أكثر من (20) شهادة معتمدة في مختلف مجالات الأجهزة الطبية.\n• عضو نقابة المهندسين وعضو نقابة الإداريين.\n• مهندسة ممارسة في مستشفى اليرموك التعليمي.\n\n🔹 محاور الورشة الرئيسية:\n1- التعريف الشامل بحاضنة الأطفال وأهميتها الحيوية في رعاية حديثي الولادة (الخدج).\n2- مبدأ عمل الحاضنة وآلية المحافظة على البيئة الحيوية المناسبة للرضيع.\n3- المكونات الأساسية للحاضنة (الهيكلية والإلكترونية) ووظيفة كل جزء منها.\n4- أنظمة التحكم الذكية داخل الحاضنة (أنظمة الحرارة، الرطوبة، الأوكسجين، ومنظومات الإنذار).\n5- الأعطال الشائعة، آلية الفحص الفني، وأساسيات الصيانة الوقائية (Preventive Maintenance).\n6- بروتوكولات تعقيم حاضنة الأطفال، طرق التنظيف الصحيحة، وإجراءات مكافحة العدوى لسلامة الأطفال.",
    imageUrl: "/images/w_incubator.jpg",
    date: "الخميس 2026/7/9 — الساعة 10:00 صباحًا",
    place: "بغداد - الكرادة - تقاطع المسبح - وزارة الشباب والرياضة / مكتب الوزير / المركز الوطني للعمل التطوعي",
    link: "https://t.me/+-Mk0HGO4f_FhNGQy",
    platform: "telegram",
    status: "ended",
  },
  {
    id: "w6",
    title: "الإسعافات الأولية (First Aid)",
    category: "إسعافات أولية",
    description: "تُعلن منصة نبض هندسة الطب الحياتي بالتعاون مع منصة شاهد التعليمية عن إقامة ورشة علمية مجانية بعنوان:\n🚑 الإسعافات الأولية (First Aid)\n\nهل تمتلك المهارات اللازمة للتعامل مع الحالات الطارئة وإنقاذ حياة شخص قبل وصول المساعدة الطبية؟\n\nانضموا إلينا في ورشة تدريبية تجمع بين الجانب النظري والتطبيق العملي لتعلم أهم أساسيات الإسعافات الأولية بطريقة مبسطة واحترافية.\n\n💰 الورشة مجانية بالكامل\n\nمحاور الورشة:\n✅ أساسيات الإسعافات الأولية\n✅ التعامل مع الحالات الطارئة\n✅ إيقاف النزيف والكسور\n✅ الإنعاش القلبي الرئوي (CPR)\n\n🎓 مميزات الورشة:\nتدريب عملي وتطبيقات واقعية.\nحالات محاكاة لرفع المهارات.\nشهادة مشاركة للحضور.\nمناسبة لطلبة وخريجي التخصصات الطبية والهندسية وجميع المهتمين.\n\n✨ كن سببًا في إنقاذ حياة، فالمعرفة والمهارة قد تصنعان الفرق في اللحظات الحرجة.",
    imageUrl: "/images/w_firstaid.jpg",
    date: "السبت 6/20 — الساعة 12:00 ظهرًا",
    place: "الكاظمية – شارع 60 (قرب مستشفى الكاظمية التعليمي)",
    link: "https://t.me/+-Mk0HGO4f_FhNGQy",
    platform: "telegram",
    status: "ended",
  },
  {
    id: "w7",
    title: "ورشة الأجهزة الطبية في العمل التطوعي وخدمة المجتمع",
    category: "أجهزة طبية",
    description: "من قلب الميدان.. نصنع الأثر الهندسي\n\nتعلن رابطة \"رواد هندسة الطب الحياتي\" بالتعاون مع منصة نبض هندسة الطب الحياتي، وبإشراف وزارة الشباب والرياضة / المركز الوطني للعمل التطوعي، عن إطلاق ورشتها التخصصية النوعية التي تدمج بين المهارة الهندسية والمسؤولية المجتمعية.\n\n🔹 عنوان الورشة: \"الأجهزة الطبية في العمل التطوعي وخدمة المجتمع\"\nتعد هذه الورشة بوابة تعليمية وعملية تهدف إلى تمكين مهندسي المستقبل من الأدوات التقنية اللازمة للمساهمة الفاعلة في صيانة وتشغيل الأجهزة الحيوية التي تخدم المجتمع.\n\n🔹 محاور الورشة:\n1- جهاز قياس الضغط الزئبقي (Mercury Sphygmomanometer): آلية العمل، القراءة الدقيقة، وإجراءات الصيانة الدورية لضمان الجودة.\n2- جهاز بخاخ التنفس الطبي (Nebulizer): مبادئ تحويل الدواء إلى رذاذ، طرق الاستخدام الصحيحة، وبروتوكولات التعقيم والصيانة الوقائية.\n3- جهاز تحفيز العضلات (EMS): الآلية الكهربائية للتحفيز، الإعدادات العلاجية، مع التركيز على تعليمات السلامة وتشخيص الأعطال.\n4- جهاز غسيل الكلى (Hemodialysis Machine): جولة في المكونات الأساسية للجهاز، آلية عمل الغشاء شبه النافذ، وأنظمة التحكم وضمان سلامة المرضى.",
    imageUrl: "/images/w_devices_ali_sara.jpg",
    date: "الجمعة 2026/4/17 — الساعة 11:00 صباحًا",
    place: "بغداد - الكرادة - تقاطع المسبح - وزارة الشباب والرياضة / مكتب الوزير / المركز الوطني للعمل التطوعي",
    link: "https://t.me/+-Mk0HGO4f_FhNGQy",
    platform: "telegram",
    status: "ended",
  },
  {
    id: "w8",
    title: "دورة العلاج الطبيعي والتأهيل النفسي لتركيب الأطراف الصناعية",
    category: "علاج طبيعي",
    description: "بِسم الله الرحمن الرحيم\n\nيُعلِنونَ لَكم مُشرِفو منصة نَبض بدورة علمية تخص العلاج الطبيعي وتأهيل النفسي لتركيب الأطراف الصناعية بالتعاون مع مجمع الرسول الأعظم التأهيلي التابع للحشد الشعبي\n\nملاحظة: الدورة مجانية\nملاحظة: بعد اكمال الدورة سيتم توزيع شهادات مشاركة للمُشاركين في الدورة وأيضًا مجانية\n\nالمنظمون لِـهذا العمل:\nالمهندس الطبي: حَـيدر علي\nالمهندس الطبي: علي عدي",
    imageUrl: "/images/w_rehab.jpg",
    date: "سنحدد الموعد قريبًا جدًا",
    place: "بغداد - الأعظمية",
    link: "https://t.me/+-Mk0HGO4f_FhNGQy",
    platform: "telegram",
    status: "ended",
  },
];

const SEED_SOCIAL = [
  {
    id: "s1",
    title: "حسابنا على انستقرام",
    url: "https://www.instagram.com/b.m.e_pulse?igsi=MTF3ejJhMWZnN2NhbQ==",
    platform: "instagram",
  },
  {
    id: "s2",
    title: "حسابنا على تليكرام",
    url: "https://t.me/+-Mk0HGO4f_FhNGQy",
    platform: "telegram",
  },
  {
    id: "s3",
    title: "م. علي عدي — رئيس منصة نَبض",
    url: "tel:+9647731255527",
    platform: "phone",
  },
  {
    id: "s4",
    title: "م. حَيدر علي — المدير الإداري",
    url: "tel:+9647729937388",
    platform: "phone",
  },
  {
    id: "s5",
    title: "موقعنا على التيك توك",
    url: "https://www.tiktok.com/@b.m.e_pulse?_r=1&_t=ZS-99EFPszTLBg",
    platform: "tiktok",
  },
  {
    id: "s6",
    title: "موقعنا على اليوتيوب",
    url: "https://youtube.com/@h15hh?si=_M7KyD5gYzmSUkn9",
    platform: "youtube",
  },
];

const SEED_CONTENT = [
  {
    id: "series1",
    type: "series",
    title: "سلسلة دروس #يلا_نفهم",
    lessons: [
      {
        id: "l1",
        title: "الدرس الأول",
        url: "https://www.instagram.com/p/DbsfQiajoey/?igsi=Nm15em5wOGlzcDIy",
      },
      {
        id: "l2",
        title: "الدرس الثاني",
        url: "https://www.instagram.com/p/DcBpw5RCj_Y/?igsi=MXdydWl6M3dtOWE5cg==",
      },
      {
        id: "l3",
        title: "الدرس الثالث",
        url: "https://www.instagram.com/p/DcePYBlDjoH/?igsi=MWM5MnVuemNvMnNxcw==",
      },
    ],
  },
  {
    id: "series2",
    type: "series",
    title: "الدورة الصيفية لصيانة الأجهزة الطبية",
    lessons: [
      {
        id: "s2-1",
        title: "أقسام المستشفيات",
        url: "https://youtu.be/X_-JxtcsxQU?si=ymnuWsL4oKbH31im",
      },
      {
        id: "s2-2",
        title: "جهاز الفنتليتر",
        children: [
          {
            id: "s2-2-1",
            title: "الجزء الأول",
            url: "https://youtu.be/_90keF4t3rU?si=rKyVQLt8DwZcXN70",
          },
          {
            id: "s2-2-2",
            title: "الجزء الثاني",
            url: "https://youtu.be/JaGgr0e7Pt8?si=prSPeIOuaVFxwtzL",
          },
        ],
      },
      {
        id: "s2-3",
        title: "جهاز المونيتور",
        children: [
          {
            id: "s2-3-1",
            title: "الجزء الأول",
            url: "https://youtu.be/BemyAc8zv38?si=5IQ2Aq2pJvOq6Y6v",
          },
          {
            id: "s2-3-2",
            title: "الجزء الثاني",
            url: "https://youtu.be/kYPrb2GaweE?si=2Nt4hpGxztFMnRaG",
          },
        ],
      },
    ],
  },
  {
    id: "series3-films",
    type: "series",
    title: "أفلامنا العلمية",
    lessons: [
      {
        id: "film1",
        title: "فيلم مشروع القبعة الذكية للمكفوفين",
        url: "https://www.instagram.com/reel/DX7Dk1SNoId/?igsi=MmRuazZyYjUwM2Ny",
      },
      {
        id: "film2",
        title: "فيلم مريض التوحد وعلاجه بجهاز الECT",
        children: [
          {
            id: "film2-1",
            title: "جزء اول",
            url: "https://www.instagram.com/reel/Db3XA2xtAP_/?igsi=MW5yeWRiYnY4ZXI1Yw==",
          },
          {
            id: "film2-2",
            title: "جزء ثاني",
            pendingLabel: "سيُضاف يوم الخميس",
          },
        ],
      },
    ],
  },
];

const EMPTY_WORKSHOP_FORM = {
  title: "",
  category: "",
  description: "",
  imageUrl: "",
  date: "",
  place: "",
  link: "",
  platform: "telegram",
  status: "active",
  price: "",
  paymentLink: "",
  paymentQrImage: "",
};

const EMPTY_LINK_FORM = { title: "", url: "", platform: "telegram" };

const SEED_STATS = [
  { id: "stat1", label: "عدد زوار موقعنا", value: "7649" },
  { id: "stat2", label: "عدد المنشورات", value: "115" },
  { id: "stat3", label: "عدد ورشنا", value: "23" },
];

const CONTENT_ACCENT_PALETTE = ["#2F6F62", "#B8791A", "#B23A2E", "#2554A8", "#6D4FA8"];

const STAT_PALETTE = [
  { bg: "#0B241D", border: "#1F7A5C", text: "#2FE0AE" },
  { bg: "#241A08", border: "#B8791A", text: "#F2B84B" },
  { bg: "#26100D", border: "#B23A2E", text: "#FF6B54" },
  { bg: "#0C1730", border: "#2554A8", text: "#5B9BFF" },
];

const EMPTY_STAT_FORM = { label: "", value: "" };

const EMPTY_NODE_FORM = { title: "", url: "", note: "", pendingLabel: "", kind: "link", photo: "", bio: "" };

function getKids(node) {
  return node.children || node.lessons || [];
}
function withKids(node, kids) {
  const { lessons, children, ...rest } = node;
  return { ...rest, children: kids };
}
function updateTree(list, id, updater) {
  return list.map((node) => {
    if (node.id === id) return updater(node);
    const kids = getKids(node);
    if (kids.length) {
      const newKids = updateTree(kids, id, updater);
      if (newKids !== kids) return withKids(node, newKids);
    }
    return node;
  });
}
function deleteFromTree(list, id) {
  return list
    .filter((node) => node.id !== id)
    .map((node) => {
      const kids = getKids(node);
      if (kids.length) return withKids(node, deleteFromTree(kids, id));
      return node;
    });
}
function addChildToTree(list, parentId, newNode) {
  if (parentId === null) return [...list, newNode];
  return list.map((node) => {
    if (node.id === parentId) {
      return withKids(node, [...getKids(node), newNode]);
    }
    const kids = getKids(node);
    if (kids.length) return withKids(node, addChildToTree(kids, parentId, newNode));
    return node;
  });
}
function buildNodeFromForm(form, existingNode) {
  const base = existingNode ? { ...existingNode } : { id: "n" + Date.now() + Math.floor(Math.random() * 1000) };
  delete base.url;
  delete base.note;
  delete base.pendingLabel;
  delete base.isProfile;
  delete base.photo;
  delete base.bio;
  if (form.kind === "link") return { ...base, title: form.title, url: form.url };
  if (form.kind === "note") return { ...base, title: form.title, note: form.note };
  if (form.kind === "pending") return { ...base, title: form.title, ...(form.pendingLabel ? { pendingLabel: form.pendingLabel } : {}) };
  if (form.kind === "profile")
    return {
      ...base,
      title: form.title,
      isProfile: true,
      photo: form.photo || "",
      bio: form.bio || "",
      children: (existingNode && getKids(existingNode)) || [],
    };
  // group
  return { ...base, title: form.title, children: (existingNode && getKids(existingNode)) || [] };
}

function moveInList(list, id, dir) {
  const idx = list.findIndex((x) => x.id === id);
  if (idx === -1) return list;
  const newIdx = idx + dir;
  if (newIdx < 0 || newIdx >= list.length) return list;
  const copy = [...list];
  [copy[idx], copy[newIdx]] = [copy[newIdx], copy[idx]];
  return copy;
}
function moveInTree(list, id, dir) {
  const idx = list.findIndex((n) => n.id === id);
  if (idx !== -1) {
    const newIdx = idx + dir;
    if (newIdx < 0 || newIdx >= list.length) return list;
    const copy = [...list];
    [copy[idx], copy[newIdx]] = [copy[newIdx], copy[idx]];
    return copy;
  }
  return list.map((node) => {
    const kids = getKids(node);
    if (kids.length) {
      const newKids = moveInTree(kids, id, dir);
      if (newKids !== kids) return withKids(node, newKids);
    }
    return node;
  });
}

function useGoogleFonts() {
  useEffect(() => {
    const id = "workshop-site-fonts";
    if (document.getElementById(id)) return;
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=El+Messiri:wght@500;600;700&family=Tajawal:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
  }, []);
}

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAACoB4_aRAKlX6b0I9cEpm75q5cjpxQ6Q",
  authDomain: "haedore.firebaseapp.com",
  projectId: "haedore",
  storageBucket: "haedore.firebasestorage.app",
  messagingSenderId: "441052120983",
  appId: "1:441052120983:web:5f093d051914407d7d66d2",
  measurementId: "G-22VKH627F1",
};

function loadScript(src) {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("failed to load " + src));
    document.head.appendChild(s);
  });
}

let firebaseReadyPromise = null;
function getFirestore() {
  if (!firebaseReadyPromise) {
    firebaseReadyPromise = (async () => {
      await loadScript("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
      await loadScript("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js");
      if (!window.firebase.apps || !window.firebase.apps.length) {
        window.firebase.initializeApp(FIREBASE_CONFIG);
      }
      return window.firebase.firestore();
    })();
  }
  return firebaseReadyPromise;
}

const SEED_CERTIFICATES = [];

const EMPTY_CERT_FORM = { name: "", serial: "" };

const SEED_CERT_TEMPLATE = {
  imageUrl: "",
  nameX: 50,
  nameY: 50,
  nameSize: 36,
  nameColor: "#EAF0FF",
  qrX: 85,
  qrY: 85,
  qrSizePct: 14,
};

const SEED_HEROES = [
  {
    id: "hero-ali",
    name: "م. علي عدي",
    photoUrl: "",
    bio: "",
    links: [
      { id: "hero-ali-1", title: "المحتوى الأول", url: "https://www.instagram.com/reel/DUTkoMPjVep/?igsi=ZWw3M3VqZ21nNXVv" },
      { id: "hero-ali-2", title: "المحتوى الثاني", url: "https://www.instagram.com/reel/DUtZ1eGDVKj/?igsi=MTBrdTdxb3Zvb3I1Mg==" },
      { id: "hero-ali-3", title: "المحتوى الثالث", url: "https://www.instagram.com/reel/DT3NR9qDQ4E/?igsi=MWRuM3Ywbm4yd3J5cg==" },
      { id: "hero-ali-4", title: "المحتوى الرابع", url: "https://www.instagram.com/reel/DVMRx8JDXPs/?igsi=MW52NWkzcDVhNDVheg==" },
      { id: "hero-ali-5", title: "المحتوى الخامس", url: "https://www.instagram.com/reel/DU6jdndDU30/?igsi=MWh6dXZndDBrdngydw==" },
      { id: "hero-ali-6", title: "المحتوى السادس", url: "https://www.instagram.com/reel/DVi6PF9DRBu/?igsi=MTV1Yjh2MjQza3Jwcg==" },
      { id: "hero-ali-7", title: "المحتوى السابع", url: "https://www.instagram.com/reel/DWwfmMFDWid/?igsi=YjJkNjY3bnhub3Ny" },
    ],
  },
  {
    id: "hero-haidar",
    name: "م. حَيدر علي",
    photoUrl: "",
    bio: "حَيدر علي مهندس طب حياتي تاريخ الولادة 2004/7/20\nلاعب منتخب وطني لرياضة الملاكمة وايضا عازف لآلة الكلارينيت\nله العديد من الانجازات ومنها حاصل على شهادة علم النفس السريري والبايولوجي\nوحاصل على شهادة ISPO للأطراف الصناعية\nوهو ممثل في قسمه ويمثل جامعته وقسمه وأيضًا أستاذ تدريسي يشرح المواد العلمية والمحاضرات التي تخص الأطراف والأجهزة الطبية\nومركزه في منصة نبض: مساعد إداري.",
    links: [
      { id: "hero-haidar-account", title: "حساب م.حَيدر علي", url: "https://www.instagram.com/0je4?igsi=dHphNmJhdXRyYjNv" },
      { id: "hero-haidar-1", title: "المحتوى الأول", url: "https://www.instagram.com/reel/DUL3HJYjVnp/?igsi=MW02bjMwZnA1dms2eA==" },
      { id: "hero-haidar-2", title: "المحتوى الثاني", url: "https://www.instagram.com/reel/DUln6rKDX89/?igsi=MXY5cmdodjh1bHVucg==" },
      { id: "hero-haidar-3", title: "المحتوى الثالث", url: "https://www.instagram.com/reel/DVCB9lAjVGR/?igsi=eXYzamF5NzBwbGJw" },
      { id: "hero-haidar-4", title: "المحتوى الرابع", url: "https://www.instagram.com/reel/DV3y4bGDZPT/?igsi=MWJpZmZsaTUyMHV0Zg==" },
      { id: "hero-haidar-5", title: "المحتوى الخامس", url: "https://www.instagram.com/reel/DW9TkZsjcH2/?igsi=bnB2OTEzcnFhZ2c0" },
      { id: "hero-haidar-6", title: "المحتوى السادس", url: "https://www.instagram.com/reel/DVeF_hvjY1x/?igsi=MWN3NnB6d2t2ZHVudg==" },
      { id: "hero-haidar-7", title: "المحتوى السابع", url: "https://www.instagram.com/reel/DWUDSWTjXTc/?igsi=Y2N1bDRieWRrY2Uw" },
      { id: "hero-haidar-8", title: "المحتوى الثامن", url: "https://www.instagram.com/reel/DYH67SEtiD9/?igsi=dTBtYWJ3bG0xM21j" },
      { id: "hero-haidar-9", title: "المحتوى التاسع", url: "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDYzNjYzODAwNTA2NDUx?story_media_id=3957680388734614717_512027207&igsi=bDNxNDc1cXZlNWZk" },
    ],
  },
  {
    id: "hero-zaid",
    name: "م. زيد عبد السلام",
    photoUrl: "",
    bio: "",
    links: [
      { id: "hero-zaid-1", title: "المحتوى الأول", url: "https://www.instagram.com/reel/DV9F4HkjVkB/?igsi=MW0xMWE0NmE1cnV6bQ==" },
      { id: "hero-zaid-2", title: "المحتوى الثاني", url: "https://www.instagram.com/reel/DVOUhZMDdwZ/?igsi=d3N2NmJkOXZzN3hl" },
      { id: "hero-zaid-3", title: "المحتوى الثالث", url: "https://www.instagram.com/reel/DU8-XqWDf0z/?igsi=MWFlcGU4ZG9mMThheg==" },
      { id: "hero-zaid-4", title: "المحتوى الرابع", url: "https://www.instagram.com/reel/DX7Dk1SNoId/?igsi=MTNybHNldmg4MDE2OQ==" },
    ],
  },
  {
    id: "hero-mujtaba",
    name: "م. مجتبى قحطان",
    photoUrl: "",
    bio: "",
    links: [
      { id: "hero-mujtaba-1", title: "المحتوى الأول", url: "https://www.instagram.com/reel/DUEH1PGDX5K/?igsi=MWllZHA1aHRsaXY3cg==" },
      { id: "hero-mujtaba-2", title: "المحتوى الثاني", url: "https://www.instagram.com/reel/DYhsbyrtMDT/?igsi=MWMwY2w2amp3MGE5ZA==" },
      { id: "hero-mujtaba-3", title: "المحتوى الثالث", url: "https://www.instagram.com/reel/DUTkoMPjVep/?igsi=MTJub3Nla2w3anFqMw==" },
      { id: "hero-mujtaba-4", title: "المحتوى الرابع", url: "https://www.instagram.com/reel/DUbYanwDbCS/?igsi=bDVoeDlxbG15bm9n" },
      { id: "hero-mujtaba-5", title: "المحتوى الخامس", url: "https://www.instagram.com/reel/DVZJXQLjcWL/?igsi=aHNzM29mdnpzOTN2" },
      { id: "hero-mujtaba-6", title: "المحتوى السادس", url: "https://www.instagram.com/reel/DU3WTKtDft2/?igsi=NHN1MWNvd2xhcGhs" },
      { id: "hero-mujtaba-7", title: "المحتوى السابع", url: "https://www.instagram.com/reel/DV0-QxqjSN1/?igsi=MXc2bmFlczh0M2dveg==" },
      { id: "hero-mujtaba-8", title: "المحتوى الثامن", url: "https://www.instagram.com/reel/DWwfmMFDWid/?igsi=MTJydjJoNGEzbGozcA==" },
      { id: "hero-mujtaba-9", title: "المحتوى التاسع", url: "https://www.instagram.com/reel/DVHMCXyDUJh/?igsi=YW1xM2g4d3I4ZGs2" },
      { id: "hero-mujtaba-10", title: "المحتوى العاشر", url: "https://www.instagram.com/reel/DVl08QnDU_x/?igsi=MTJiN2poaXQzb3JtMg==" },
      { id: "hero-mujtaba-11", title: "المحتوى الحادي عشر", url: "https://www.instagram.com/reel/DWeiIA0DXev/?igsi=MXBobXI3bHg5b3ZwMg==" },
    ],
  },
  {
    id: "hero-mahdi",
    name: "م. مهدي واثق",
    photoUrl: "",
    bio: "",
    links: [
      { id: "hero-mahdi-1", title: "المحتوى الأول", url: "https://www.instagram.com/reel/DVT9tVkDYzy/?igsi=MXRxdDh0ZGF6aTloYw==" },
      { id: "hero-mahdi-2", title: "المحتوى الثاني", url: "https://www.instagram.com/reel/DWmFdSvjT_c/?igsi=djdxdW5vcGt1ZG1u" },
      { id: "hero-mahdi-3", title: "المحتوى الثالث", url: "https://www.instagram.com/reel/DZnWK2StxvV/?igsi=MXF3bWcyeHY4a2dhdg==" },
    ],
  },
  {
    id: "hero-sara",
    name: "م. سارة محمد",
    photoUrl: "",
    bio: "",
    links: [
      { id: "hero-sara-1", title: "المحتوى الأول", url: "https://www.instagram.com/reel/DaTB1ymodrf/?igsi=MTFtNzB6c2Yyeml0Zg==" },
      { id: "hero-sara-2", title: "المحتوى الثاني", url: "https://www.instagram.com/reel/DZvBAZQIlTl/?igsi=dzVkMmUxaTZoNnBt" },
      { id: "hero-sara-3", title: "المحتوى الثالث", url: "https://www.instagram.com/reel/DZIU9eFITuY/?igsi=MXpldm83bHJkYmJn" },
      { id: "hero-sara-4", title: "المحتوى الرابع", url: "https://www.instagram.com/reel/DY-AM_VoW4h/?igsi=dDBzNWs0cmh3dWdk" },
      { id: "hero-sara-5", title: "المحتوى الخامس", url: "https://www.instagram.com/reel/DY4_sY-oofK/?igsi=bXN1NW5zcHV1OTJo" },
      { id: "hero-sara-6", title: "المحتوى السادس", url: "https://www.instagram.com/reel/DYcoqy4oWhf/?igsi=aGF3dHFrNjBnbmlx" },
      { id: "hero-sara-7", title: "المحتوى السابع", url: "https://www.instagram.com/p/DYSUh2aCHXc/?img_index=1&igsi=MWttMXVrMHlrYWZpaQ==" },
      { id: "hero-sara-8", title: "المحتوى الثامن", url: "https://www.instagram.com/reel/DX94erVOY0Q/?igsi=MW8zcXN2eTJvYzF5bQ==" },
      { id: "hero-sara-9", title: "المحتوى التاسع", url: "https://www.instagram.com/p/DXr6BLCDnok/?igsi=a3YwZ3o2bWd5bmV3" },
      { id: "hero-sara-10", title: "المحتوى العاشر", url: "https://www.instagram.com/reel/DXCkXfIja0L/?igsi=YWNxYmFwOHo1YW12" },
      { id: "hero-sara-11", title: "المحتوى الحادي عشر", url: "https://www.instagram.com/reel/DWO2YJMDYHP/?igsi=MXBoaDRxZXlldzJwdQ==" },
    ],
  },
];

const EMPTY_HERO_FORM = { name: "", bio: "", icon: "" };

const HERO_ICON_OPTIONS = [
  { label: "بدون أيقونة", slug: "" },
  { label: "جهاز طبي", slug: "healthicons:devices-outline" },
  { label: "سماعة طبيب", slug: "tabler:stethoscope" },
  { label: "أطراف صناعية / حركة", slug: "tabler:walk" },
  { label: "كرسي متحرك", slug: "tabler:wheelchair" },
  { label: "قلب ونبض", slug: "tabler:heart-rate-monitor" },
  { label: "دماغ وأعصاب", slug: "tabler:brain" },
  { label: "DNA / وراثة", slug: "tabler:dna-2" },
  { label: "مجهر / أنسجة", slug: "tabler:microscope" },
  { label: "برمجة / سوفتوير", slug: "tabler:code" },
  { label: "ذكاء اصطناعي", slug: "tabler:cpu" },
  { label: "روبوت", slug: "tabler:robot" },
  { label: "حقنة / أدوية", slug: "tabler:vaccine" },
  { label: "عظام", slug: "tabler:bone" },
];

const heroIconUrl = (slug, hex) => {
  if (!slug) return "";
  const color = hex.replace("#", "%23");
  return `https://api.iconify.design/${slug}.svg?color=${color}`;
};

const EMPTY_HERO_LINK_FORM = { title: "", url: "" };

const SEED_EXTRA_BUTTONS = [
  {
    id: "eb1",
    label: "رابط تسجيل العضوية",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSc3XSQjRLhMD1yTbTJhgYr0NUpUjRNtL5yCQWDbfQU0d0XdvA/viewform?usp=sharing&ouid=103175052589546838769",
  },
];

const EMPTY_EXTRA_BUTTON_FORM = { label: "", url: "" };

const EXTRA_BUTTON_GRADIENTS = [
  "linear-gradient(135deg, #6D9CD1, #2554A8)",
  "linear-gradient(135deg, #A97FD1, #6D4FA8)",
  "linear-gradient(135deg, #D18F5A, #B8791A)",
  "linear-gradient(135deg, #5AD1A8, #1F7A5C)",
];

const SEED_HERO_TEXT = {
  title: "نبذة عن منصة نَبُض",
  body:
    "منصة طلابية تعليمية تهدف إلى توسعة المعرفة والتطوير العلمي والمهني وجعلك مهندسًا محترفًا في مجال هندسة الطب الحياتي، وتشرح جميع اختصاصات هندسة الطب الحياتي، من ضمنها: الأجهزة وصيانتها، الأطراف الصناعية، الذكاء الاصطناعي، البرمجة، هندسة الأنسجة، والهندسة الوراثية والعصبية وغيرها.\n\nوأيضًا قائمة على مؤتمرات وورش ودورات تدريبية، منها المجاني ومنها المدفوع، وبالتأكيد الورش المجانية تكون أكثر من المدفوعة.\n\nوأيضًا عمل CV يليق بك، وشرح المناهج الدراسية.",
};

const DOC_MAP = {
  workshops: { collection: "nabd", doc: "workshopsV4", seed: SEED_WORKSHOPS },
  social: { collection: "nabd", doc: "socialLinks", seed: SEED_SOCIAL },
  content: { collection: "nabd", doc: "contentLinks", seed: SEED_CONTENT },
  stats: { collection: "nabd", doc: "stats", seed: SEED_STATS },
  certificates: { collection: "nabd", doc: "certificates", seed: SEED_CERTIFICATES },
  heroes: { collection: "nabd", doc: "heroes", seed: SEED_HEROES },
  extraButtons: { collection: "nabd", doc: "extraButtons", seed: SEED_EXTRA_BUTTONS },
};

async function fbGetItems(type) {
  const db = await getFirestore();
  const ref = db.collection(DOC_MAP[type].collection).doc(DOC_MAP[type].doc);
  const snap = await ref.get();
  if (snap.exists && Array.isArray(snap.data().items)) {
    return snap.data().items;
  }
  await ref.set({ items: DOC_MAP[type].seed });
  return DOC_MAP[type].seed;
}

async function fbSetItems(type, items) {
  const db = await getFirestore();
  const ref = db.collection(DOC_MAP[type].collection).doc(DOC_MAP[type].doc);
  await ref.set({ items });
}

async function fbGetObject(collection, doc, seed) {
  const db = await getFirestore();
  const ref = db.collection(collection).doc(doc);
  const snap = await ref.get();
  if (snap.exists && snap.data()) {
    return { ...seed, ...snap.data() };
  }
  await ref.set(seed);
  return seed;
}

async function fbSetObject(collection, doc, value) {
  const db = await getFirestore();
  const ref = db.collection(collection).doc(doc);
  await ref.set(value);
}

function loadImageElGlobal(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function compressImageFile(file, { maxDim = 1100, maxBytes = 700000 } = {}) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const img = await loadImageElGlobal(reader.result);
        let { width, height } = img;
        if (width > maxDim || height > maxDim) {
          const scale = maxDim / Math.max(width, height);
          width = Math.round(width * scale);
          height = Math.round(height * scale);
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        let quality = 0.85;
        let dataUrl = canvas.toDataURL("image/jpeg", quality);
        while (dataUrl.length > maxBytes && quality > 0.4) {
          quality -= 0.1;
          dataUrl = canvas.toDataURL("image/jpeg", quality);
        }
        if (dataUrl.length > maxBytes) {
          reject(new Error("too_large"));
          return;
        }
        resolve(dataUrl);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function WorkshopSite() {
  useGoogleFonts();

  const [workshops, setWorkshops] = useState([]);
  const [socialLinks, setSocialLinks] = useState([]);
  const [contentLinks, setContentLinks] = useState([]);
  const [statsItems, setStatsItems] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const [extraButtons, setExtraButtons] = useState([]);
  const [heroText, setHeroText] = useState(SEED_HERO_TEXT);
  const [loaded, setLoaded] = useState(false);
  const [connectionError, setConnectionError] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState("");

  const [workshopFormOpen, setWorkshopFormOpen] = useState(false);
  const [workshopEditId, setWorkshopEditId] = useState(null);
  const [workshopForm, setWorkshopForm] = useState(EMPTY_WORKSHOP_FORM);
  const [workshopImageUploadError, setWorkshopImageUploadError] = useState("");

  const [linkFormOpen, setLinkFormOpen] = useState(false);
  const [linkFormType, setLinkFormType] = useState("social");
  const [linkEditId, setLinkEditId] = useState(null);
  const [linkForm, setLinkForm] = useState(EMPTY_LINK_FORM);

  const [statFormOpen, setStatFormOpen] = useState(false);
  const [statEditId, setStatEditId] = useState(null);
  const [statForm, setStatForm] = useState(EMPTY_STAT_FORM);

  const [certFormOpen, setCertFormOpen] = useState(false);
  const [certForm, setCertForm] = useState(EMPTY_CERT_FORM);
  const [certQrFor, setCertQrFor] = useState(null);
  const [verifiedCert, setVerifiedCert] = useState(null); // {status:'found', cert} | {status:'notfound'} | null

  const [certTemplate, setCertTemplate] = useState(SEED_CERT_TEMPLATE);
  const [certTemplateDraft, setCertTemplateDraft] = useState(SEED_CERT_TEMPLATE);
  const [certTemplateLoaded, setCertTemplateLoaded] = useState(false);
  const [certPreviewUrl, setCertPreviewUrl] = useState("");
  const [bulkNamesText, setBulkNamesText] = useState("");
  const [bulkResults, setBulkResults] = useState([]); // [{name, serial, dataUrl}]
  const [bulkGenerating, setBulkGenerating] = useState(false);

  const [selectedHeroId, setSelectedHeroId] = useState(null);
  const [heroFormOpen, setHeroFormOpen] = useState(false);
  const [heroEditId, setHeroEditId] = useState(null);
  const [heroForm, setHeroForm] = useState(EMPTY_HERO_FORM);
  const [heroPhotoError, setHeroPhotoError] = useState("");
  const [heroLinkFormOpen, setHeroLinkFormOpen] = useState(false);
  const [heroLinkForHeroId, setHeroLinkForHeroId] = useState(null);
  const [heroLinkEditId, setHeroLinkEditId] = useState(null);
  const [heroLinkForm, setHeroLinkForm] = useState(EMPTY_HERO_LINK_FORM);

  const [extraButtonFormOpen, setExtraButtonFormOpen] = useState(false);
  const [extraButtonEditId, setExtraButtonEditId] = useState(null);
  const [extraButtonForm, setExtraButtonForm] = useState(EMPTY_EXTRA_BUTTON_FORM);

  const [heroTextFormOpen, setHeroTextFormOpen] = useState(false);
  const [heroTextForm, setHeroTextForm] = useState(SEED_HERO_TEXT);

  const [saveError, setSaveError] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [view, setView] = useState("home");

  const loadAll = useCallback(async () => {
    try {
      const [w, s, c, st, cert, her, eb, ht] = await Promise.all([
        fbGetItems("workshops"),
        fbGetItems("social"),
        fbGetItems("content"),
        fbGetItems("stats"),
        fbGetItems("certificates"),
        fbGetItems("heroes"),
        fbGetItems("extraButtons"),
        fbGetObject("nabd", "heroText", SEED_HERO_TEXT),
      ]);
      setWorkshops(w);
      setSocialLinks(s);
      setContentLinks(c);
      setStatsItems(st);
      setCertificates(cert);
      setHeroes(her);
      setExtraButtons(eb);
      setHeroText(ht);
      setHeroTextForm(ht);

      const params = new URLSearchParams(window.location.search);
      const q = params.get("cert");
      if (q) {
        const found = cert.find((x) => x.serial.trim().toLowerCase() === q.trim().toLowerCase());
        setVerifiedCert(found ? { status: "found", cert: found } : { status: "notfound" });
      }
    } catch (e) {
      setConnectionError((e && (e.message || e.code)) || String(e) || "خطأ غير معروف");
      setWorkshops(SEED_WORKSHOPS);
      setSocialLinks(SEED_SOCIAL);
      setContentLinks(SEED_CONTENT);
      setStatsItems(SEED_STATS);
      setCertificates(SEED_CERTIFICATES);
      setHeroes(SEED_HEROES);
      setExtraButtons(SEED_EXTRA_BUTTONS);
      setHeroText(SEED_HERO_TEXT);
      setHeroTextForm(SEED_HERO_TEXT);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  useEffect(() => {
    if (view === "certificates" && isAdmin && !certTemplateLoaded) {
      fbGetObject("nabd", "certTemplate", SEED_CERT_TEMPLATE)
        .then((tmpl) => {
          setCertTemplate(tmpl);
          setCertTemplateDraft(tmpl);
          setCertTemplateLoaded(true);
        })
        .catch(() => {
          setCertTemplateLoaded(true);
        });
    }
  }, [view, isAdmin, certTemplateLoaded]);

  const persistWorkshops = async (next) => {
    setWorkshops(next);
    try {
      await fbSetItems("workshops", next);
    } catch (e) {
      setSaveError("تعذر حفظ التعديل، تأكد من اتصالك بالإنترنت وحاول مرة أخرى.");
    }
  };

  const persistLinks = async (type, next) => {
    if (type === "social") setSocialLinks(next);
    else setContentLinks(next);
    try {
      await fbSetItems(type, next);
    } catch (e) {
      setSaveError("تعذر حفظ التعديل، تأكد من اتصالك بالإنترنت وحاول مرة أخرى.");
    }
  };

  const persistStats = async (next) => {
    setStatsItems(next);
    try {
      await fbSetItems("stats", next);
    } catch (e) {
      setSaveError("تعذر حفظ التعديل، تأكد من اتصالك بالإنترنت وحاول مرة أخرى.");
    }
  };

  const persistCertificates = async (next) => {
    setCertificates(next);
    try {
      await fbSetItems("certificates", next);
    } catch (e) {
      setSaveError("تعذر حفظ التعديل، تأكد من اتصالك بالإنترنت وحاول مرة أخرى.");
    }
  };

  const persistHeroes = async (next) => {
    setHeroes(next);
    try {
      await fbSetItems("heroes", next);
    } catch (e) {
      setSaveError("تعذر حفظ التعديل، تأكد من اتصالك بالإنترنت وحاول مرة أخرى.");
    }
  };

  const persistExtraButtons = async (next) => {
    setExtraButtons(next);
    try {
      await fbSetItems("extraButtons", next);
    } catch (e) {
      setSaveError("تعذر حفظ التعديل، تأكد من اتصالك بالإنترنت وحاول مرة أخرى.");
    }
  };

  const openAddExtraButton = () => {
    setExtraButtonForm(EMPTY_EXTRA_BUTTON_FORM);
    setExtraButtonEditId(null);
    setExtraButtonFormOpen(true);
  };
  const openEditExtraButton = (btn) => {
    setExtraButtonForm({ label: btn.label, url: btn.url });
    setExtraButtonEditId(btn.id);
    setExtraButtonFormOpen(true);
  };
  const submitExtraButton = async (e) => {
    e.preventDefault();
    if (!extraButtonForm.label.trim() || !extraButtonForm.url.trim()) {
      setSaveError("العنوان والرابط مطلوبان");
      return;
    }
    setSaveError("");
    let next;
    if (extraButtonEditId) {
      next = extraButtons.map((b) =>
        b.id === extraButtonEditId ? { ...b, label: extraButtonForm.label.trim(), url: extraButtonForm.url.trim() } : b
      );
    } else {
      next = [...extraButtons, { id: "eb" + Date.now(), label: extraButtonForm.label.trim(), url: extraButtonForm.url.trim() }];
    }
    await persistExtraButtons(next);
    setExtraButtonFormOpen(false);
    setExtraButtonForm(EMPTY_EXTRA_BUTTON_FORM);
    setExtraButtonEditId(null);
  };
  const deleteExtraButton = async (id) => {
    await persistExtraButtons(extraButtons.filter((b) => b.id !== id));
    setConfirmDelete(null);
  };
  const moveExtraButton = async (id, dir) => {
    await persistExtraButtons(moveInList(extraButtons, id, dir));
  };

  const openEditHeroText = () => {
    setHeroTextForm(heroText);
    setHeroTextFormOpen(true);
  };
  const submitHeroText = async (e) => {
    e.preventDefault();
    if (!heroTextForm.title.trim()) {
      setSaveError("العنوان مطلوب");
      return;
    }
    setSaveError("");
    const next = { title: heroTextForm.title.trim(), body: heroTextForm.body };
    setHeroText(next);
    try {
      await fbSetObject("nabd", "heroText", next);
    } catch (e) {
      setSaveError("تعذر حفظ التعديل، تأكد من اتصالك بالإنترنت وحاول مرة أخرى.");
    }
    setHeroTextFormOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowLogin(false);
      setPasswordInput("");
      setLoginError("");
    } else {
      setLoginError("كلمة السر غير صحيحة");
    }
  };

  // Workshop form handlers
  const openAddWorkshop = () => {
    setWorkshopForm(EMPTY_WORKSHOP_FORM);
    setWorkshopEditId(null);
    setWorkshopFormOpen(true);
  };
  const openEditWorkshop = (w) => {
    setWorkshopForm({
      title: w.title,
      category: w.category,
      description: w.description,
      imageUrl: w.imageUrl,
      date: w.date,
      place: w.place,
      link: w.link,
      platform: w.platform,
      status: w.status || "active",
      price: w.price || "",
      paymentLink: w.paymentLink || "",
      paymentQrImage: w.paymentQrImage || "",
    });
    setWorkshopEditId(w.id);
    setWorkshopFormOpen(true);
  };
  const handleWorkshopImageUpload = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setWorkshopImageUploadError("");
    try {
      const dataUrl = await compressImageFile(file, { maxDim: 700, maxBytes: 130000 });
      setWorkshopForm((prev) => ({ ...prev, imageUrl: dataUrl }));
    } catch (err) {
      setWorkshopImageUploadError(
        err && err.message === "too_large"
          ? "الصورة كبيرة جدًا حتى بعد الضغط، جرب صورة أبسط."
          : "تعذر قراءة الصورة، جرب ملف صورة آخر."
      );
    }
  };
  const submitWorkshop = async (e) => {
    e.preventDefault();
    if (!workshopForm.title.trim() || !workshopForm.link.trim()) {
      setSaveError("العنوان والرابط مطلوبان");
      return;
    }
    setSaveError("");
    let next;
    if (workshopEditId) {
      next = workshops.map((w) => (w.id === workshopEditId ? { ...w, ...workshopForm } : w));
    } else {
      next = [...workshops, { ...workshopForm, id: "w" + Date.now() }];
    }
    await persistWorkshops(next);
    setWorkshopFormOpen(false);
    setWorkshopForm(EMPTY_WORKSHOP_FORM);
    setWorkshopEditId(null);
  };
  const deleteWorkshop = async (id) => {
    await persistWorkshops(workshops.filter((w) => w.id !== id));
    setConfirmDelete(null);
  };
  const moveWorkshop = async (id, dir) => {
    await persistWorkshops(moveInList(workshops, id, dir));
  };

  // Link form handlers (social / content)
  const openAddLink = (type) => {
    setLinkFormType(type);
    setLinkForm(EMPTY_LINK_FORM);
    setLinkEditId(null);
    setLinkFormOpen(true);
  };
  const openEditLink = (type, item) => {
    setLinkFormType(type);
    setLinkForm({ title: item.title, url: item.url, platform: item.platform });
    setLinkEditId(item.id);
    setLinkFormOpen(true);
  };
  const submitLink = async (e) => {
    e.preventDefault();
    if (!linkForm.title.trim() || !linkForm.url.trim()) {
      setSaveError("العنوان والرابط مطلوبان");
      return;
    }
    setSaveError("");
    const list = linkFormType === "social" ? socialLinks : contentLinks;
    let next;
    if (linkEditId) {
      next = list.map((item) => (item.id === linkEditId ? { ...item, ...linkForm } : item));
    } else {
      next = [...list, { ...linkForm, id: "l" + Date.now() }];
    }
    await persistLinks(linkFormType, next);
    setLinkFormOpen(false);
    setLinkForm(EMPTY_LINK_FORM);
    setLinkEditId(null);
  };
  const deleteLink = async (type, id) => {
    const list = type === "social" ? socialLinks : contentLinks;
    await persistLinks(type, list.filter((item) => item.id !== id));
    setConfirmDelete(null);
  };
  const moveSocialLink = async (id, dir) => {
    await persistLinks("social", moveInList(socialLinks, id, dir));
  };

  // Stats section handlers
  const openAddStat = () => {
    setStatForm(EMPTY_STAT_FORM);
    setStatEditId(null);
    setStatFormOpen(true);
  };
  const openEditStat = (item) => {
    setStatForm({ label: item.label, value: item.value });
    setStatEditId(item.id);
    setStatFormOpen(true);
  };
  const submitStat = async (e) => {
    e.preventDefault();
    if (!statForm.label.trim() || !statForm.value.trim()) {
      setSaveError("العنوان والرقم مطلوبان");
      return;
    }
    setSaveError("");
    let next;
    if (statEditId) {
      next = statsItems.map((item) => (item.id === statEditId ? { ...item, ...statForm } : item));
    } else {
      next = [...statsItems, { ...statForm, id: "stat" + Date.now() }];
    }
    await persistStats(next);
    setStatFormOpen(false);
    setStatForm(EMPTY_STAT_FORM);
    setStatEditId(null);
  };
  const deleteStat = async (id) => {
    await persistStats(statsItems.filter((item) => item.id !== id));
    setConfirmDelete(null);
  };
  const moveStat = async (id, dir) => {
    await persistStats(moveInList(statsItems, id, dir));
  };

  // ---- Heroes (team profile pages) ----
  const openAddHero = () => {
    setHeroForm(EMPTY_HERO_FORM);
    setHeroEditId(null);
    setHeroFormOpen(true);
  };
  const openEditHero = (hero) => {
    setHeroForm({ name: hero.name, bio: hero.bio || "", icon: hero.icon || "" });
    setHeroEditId(hero.id);
    setHeroFormOpen(true);
  };
  const submitHero = async (e) => {
    e.preventDefault();
    if (!heroForm.name.trim()) {
      setSaveError("الاسم مطلوب");
      return;
    }
    setSaveError("");
    let next;
    if (heroEditId) {
      next = heroes.map((h) =>
        h.id === heroEditId ? { ...h, name: heroForm.name.trim(), bio: heroForm.bio, icon: heroForm.icon } : h
      );
    } else {
      const newHero = {
        id: "hero" + Date.now(),
        name: heroForm.name.trim(),
        bio: heroForm.bio,
        icon: heroForm.icon,
        photoUrl: "",
        links: [],
      };
      next = [...heroes, newHero];
    }
    await persistHeroes(next);
    setHeroFormOpen(false);
    setHeroForm(EMPTY_HERO_FORM);
    setHeroEditId(null);
  };
  const deleteHero = async (id) => {
    await persistHeroes(heroes.filter((h) => h.id !== id));
    setConfirmDelete(null);
    if (selectedHeroId === id) {
      setSelectedHeroId(null);
      setView("heroesList");
    }
  };
  const moveHero = async (id, dir) => {
    await persistHeroes(moveInList(heroes, id, dir));
  };

  const compressImageFile = (file, maxDim, maxBytes) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const img = new Image();
          img.onload = () => {
            let { width, height } = img;
            if (width > maxDim || height > maxDim) {
              const scale = maxDim / Math.max(width, height);
              width = Math.round(width * scale);
              height = Math.round(height * scale);
            }
            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            let quality = 0.85;
            let dataUrl = canvas.toDataURL("image/jpeg", quality);
            while (dataUrl.length > maxBytes && quality > 0.35) {
              quality -= 0.1;
              dataUrl = canvas.toDataURL("image/jpeg", quality);
            }
            if (dataUrl.length > maxBytes) {
              reject(new Error("too_large"));
            } else {
              resolve(dataUrl);
            }
          };
          img.onerror = reject;
          img.src = reader.result;
        } catch (err) {
          reject(err);
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleHeroPhotoUpload = async (heroId, file) => {
    if (!file) return;
    setHeroPhotoError("");
    try {
      const dataUrl = await compressImageFile(file, 500, 120000);
      const next = heroes.map((h) => (h.id === heroId ? { ...h, photoUrl: dataUrl } : h));
      await persistHeroes(next);
    } catch (err) {
      setHeroPhotoError("تعذر معالجة الصورة، جرب صورة أصغر أو أبسط.");
    }
  };
  const removeHeroPhoto = async (heroId) => {
    const next = heroes.map((h) => (h.id === heroId ? { ...h, photoUrl: "" } : h));
    await persistHeroes(next);
  };

  // Hero content links
  const openAddHeroLink = (heroId) => {
    setHeroLinkForHeroId(heroId);
    setHeroLinkForm(EMPTY_HERO_LINK_FORM);
    setHeroLinkEditId(null);
    setHeroLinkFormOpen(true);
  };
  const openEditHeroLink = (heroId, link) => {
    setHeroLinkForHeroId(heroId);
    setHeroLinkForm({ title: link.title, url: link.url });
    setHeroLinkEditId(link.id);
    setHeroLinkFormOpen(true);
  };
  const submitHeroLink = async (e) => {
    e.preventDefault();
    if (!heroLinkForm.title.trim() || !heroLinkForm.url.trim()) {
      setSaveError("العنوان والرابط مطلوبان");
      return;
    }
    setSaveError("");
    const next = heroes.map((h) => {
      if (h.id !== heroLinkForHeroId) return h;
      let links;
      if (heroLinkEditId) {
        links = h.links.map((l) => (l.id === heroLinkEditId ? { ...l, ...heroLinkForm } : l));
      } else {
        links = [...h.links, { ...heroLinkForm, id: "hl" + Date.now() }];
      }
      return { ...h, links };
    });
    await persistHeroes(next);
    setHeroLinkFormOpen(false);
    setHeroLinkForm(EMPTY_HERO_LINK_FORM);
    setHeroLinkEditId(null);
  };
  const deleteHeroLink = async (heroId, linkId) => {
    const next = heroes.map((h) =>
      h.id === heroId ? { ...h, links: h.links.filter((l) => l.id !== linkId) } : h
    );
    await persistHeroes(next);
    setConfirmDelete(null);
  };
  const moveHeroLink = async (heroId, linkId, dir) => {
    const next = heroes.map((h) =>
      h.id === heroId ? { ...h, links: moveInList(h.links, linkId, dir) } : h
    );
    await persistHeroes(next);
  };

  // Certificate handlers
  const nextSerialSuggestion = () => {
    const n = certificates.length + 1;
    return "PULSE-" + String(n).padStart(3, "0");
  };
  const openAddCertificate = () => {
    setCertForm({ name: "", serial: nextSerialSuggestion() });
    setCertFormOpen(true);
  };
  const submitCertificate = async (e) => {
    e.preventDefault();
    if (!certForm.name.trim() || !certForm.serial.trim()) {
      setSaveError("الاسم والرقم التسلسلي مطلوبان");
      return;
    }
    if (certificates.some((c) => c.serial.trim().toLowerCase() === certForm.serial.trim().toLowerCase())) {
      setSaveError("هذا الرقم التسلسلي مستخدم من قبل، اختر رقمًا آخر");
      return;
    }
    setSaveError("");
    const newCert = { id: "cert" + Date.now(), name: certForm.name.trim(), serial: certForm.serial.trim() };
    await persistCertificates([...certificates, newCert]);
    setCertFormOpen(false);
    setCertQrFor(newCert);
  };
  const deleteCertificate = async (id) => {
    await persistCertificates(certificates.filter((c) => c.id !== id));
    setConfirmDelete(null);
  };
  const certUrl = (serial) => {
    const base = window.location.origin + window.location.pathname;
    return `${base}?cert=${encodeURIComponent(serial)}`;
  };
  const certQrImage = (serial) =>
    `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(certUrl(serial))}`;

  // ---- Certificate template compositing (fully local, no external services) ----
  const loadImageEl = (src) =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });

  const [certUploadError, setCertUploadError] = useState("");
  const handleTemplateFileUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setCertUploadError("");
    compressImageFile(file)
      .then((dataUrl) => setCertTemplateDraft((prev) => ({ ...prev, imageUrl: dataUrl })))
      .catch((err) => {
        setCertUploadError("تعذر قراءة الصورة، جرب ملف صورة آخر.");
      });
  };

  const renderCertificateImage = async (name, serial, tmpl) => {
    if (!tmpl.imageUrl) throw new Error("no template image set");
    const bgImg = await loadImageEl(tmpl.imageUrl);
    const canvas = document.createElement("canvas");
    canvas.width = bgImg.naturalWidth;
    canvas.height = bgImg.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(bgImg, 0, 0);

    // name text
    ctx.fillStyle = tmpl.nameColor;
    ctx.font = `bold ${Math.round((tmpl.nameSize / 100) * canvas.width)}px 'Tajawal', sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.direction = "rtl";
    ctx.fillText(name, (tmpl.nameX / 100) * canvas.width, (tmpl.nameY / 100) * canvas.height);

    // qr code
    const qrPx = Math.round((tmpl.qrSizePct / 100) * canvas.width);
    const qrDataUrl = await QRCode.toDataURL(certUrl(serial), { width: qrPx, margin: 1 });
    const qrImg = await loadImageEl(qrDataUrl);
    ctx.drawImage(
      qrImg,
      (tmpl.qrX / 100) * canvas.width - qrPx / 2,
      (tmpl.qrY / 100) * canvas.height - qrPx / 2,
      qrPx,
      qrPx
    );

    return canvas.toDataURL("image/png");
  };

  const refreshCertPreview = async (tmplDraft) => {
    if (!tmplDraft.imageUrl) {
      setCertPreviewUrl("");
      return;
    }
    try {
      const url = await renderCertificateImage("اسم تجريبي", "PULSE-000", tmplDraft);
      setCertPreviewUrl(url);
    } catch (e) {
      setCertPreviewUrl("");
    }
  };

  const submitCertTemplate = async (e) => {
    e.preventDefault();
    setSaveError("");
    setCertTemplate(certTemplateDraft);
    try {
      await fbSetObject("nabd", "certTemplate", certTemplateDraft);
    } catch (err) {
      setSaveError("تعذر حفظ إعدادات القالب.");
    }
    refreshCertPreview(certTemplateDraft);
  };

  useEffect(() => {
    if (certTemplateDraft.imageUrl) {
      refreshCertPreview(certTemplateDraft);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    certTemplateDraft.imageUrl,
    certTemplateDraft.nameX,
    certTemplateDraft.nameY,
    certTemplateDraft.nameSize,
    certTemplateDraft.nameColor,
    certTemplateDraft.qrX,
    certTemplateDraft.qrY,
    certTemplateDraft.qrSizePct,
  ]);

  const runBulkGenerate = async () => {
    const names = bulkNamesText
      .split("\n")
      .map((n) => n.trim())
      .filter(Boolean);
    if (names.length === 0) return;
    if (!certTemplate.imageUrl) {
      setSaveError("لازم تضبط صورة قالب الشهادة أول (بالأسفل) قبل التوليد الجماعي.");
      return;
    }
    setBulkGenerating(true);
    setSaveError("");
    const results = [];
    const newCerts = [];
    let counter = certificates.length;
    for (const name of names) {
      counter += 1;
      const serial = "PULSE-" + String(counter).padStart(3, "0");
      try {
        const dataUrl = await renderCertificateImage(name, serial, certTemplate);
        results.push({ name, serial, dataUrl });
        newCerts.push({ id: "cert" + Date.now() + counter, name, serial });
      } catch (e) {
        // skip failed ones silently, keep going
      }
    }
    if (newCerts.length > 0) {
      await persistCertificates([...certificates, ...newCerts]);
    }
    setBulkResults(results);
    setBulkGenerating(false);
  };

  const downloadCertImage = (dataUrl, filename) => {
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const downloadAllBulk = () => {
    bulkResults.forEach((r, i) => {
      setTimeout(() => downloadCertImage(r.dataUrl, `${r.serial}-${r.name}.png`), i * 350);
    });
  };

  // Generalized node editor (content tree: series / groups / notes / pending / links, any depth)
  const [nodeEditorOpen, setNodeEditorOpen] = useState(false);
  const [nodeEditorMode, setNodeEditorMode] = useState("addRoot"); // 'addRoot' | 'addChild' | 'edit'
  const [nodeEditorTargetId, setNodeEditorTargetId] = useState(null);
  const [nodeEditorParentId, setNodeEditorParentId] = useState(null);
  const [nodeEditorForm, setNodeEditorForm] = useState(EMPTY_NODE_FORM);

  const openNodeEditor = (mode, targetId = null, parentId = null, existingNode = null, forceKind = null) => {
    setNodeEditorMode(mode);
    setNodeEditorTargetId(targetId);
    setNodeEditorParentId(parentId);
    if (existingNode) {
      const kind =
        forceKind ||
        (existingNode.isProfile
          ? "profile"
          : existingNode.children || existingNode.lessons
          ? "group"
          : typeof existingNode.note === "string"
          ? "note"
          : existingNode.url
          ? "link"
          : "pending");
      setNodeEditorForm({
        title: existingNode.title || "",
        url: existingNode.url || "",
        note: existingNode.note || "",
        pendingLabel: existingNode.pendingLabel || "",
        photo: existingNode.photo || "",
        bio: existingNode.bio || "",
        kind,
      });
    } else {
      setNodeEditorForm(EMPTY_NODE_FORM);
    }
    setNodeEditorOpen(true);
  };

  const [nodeEditorUploadError, setNodeEditorUploadError] = useState("");
  const handleNodeEditorPhotoUpload = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setNodeEditorUploadError("");
    compressImageFile(file, { maxDim: 420, maxBytes: 90000 })
      .then((dataUrl) => setNodeEditorForm((prev) => ({ ...prev, photo: dataUrl })))
      .catch(() => setNodeEditorUploadError("تعذر قراءة الصورة، جرب ملف صورة آخر."));
  };

  const submitNodeEditor = async (e) => {
    e.preventDefault();
    if (!nodeEditorForm.title.trim()) {
      setSaveError("العنوان مطلوب");
      return;
    }
    if (nodeEditorForm.kind === "link" && !nodeEditorForm.url.trim()) {
      setSaveError("الرابط مطلوب لهذا النوع");
      return;
    }
    setSaveError("");
    let next;
    if (nodeEditorMode === "edit") {
      next = updateTree(contentLinks, nodeEditorTargetId, (old) => buildNodeFromForm(nodeEditorForm, old));
    } else {
      const newNode = buildNodeFromForm(nodeEditorForm, null);
      next = addChildToTree(contentLinks, nodeEditorMode === "addChild" ? nodeEditorParentId : null, newNode);
    }
    await persistLinks("content", next);
    setNodeEditorOpen(false);
    setNodeEditorForm(EMPTY_NODE_FORM);
  };

  const deleteContentNode = async (id) => {
    await persistLinks("content", deleteFromTree(contentLinks, id));
  };
  const moveContentNode = async (id, dir) => {
    await persistLinks("content", moveInTree(contentLinks, id, dir));
  };

  return (
    <div
      dir="rtl"
      style={{ fontFamily: "'Tajawal', sans-serif" }}
      className="min-h-screen text-[#EAF0FF] relative"
    >
      <CosmicBackground currentView={view} />
      <MascotGuide currentView={view} />
      <div className="relative z-10">
      {/* Header */}
      <header className="border-b border-[#2A3B5C] sticky top-0 z-30 backdrop-blur-sm bg-[#0B1220ee]">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          {view === "home" ? (
            <div className="flex items-center gap-2">
              <img src={LOGO_SRC} alt="نَبض" className="w-9 h-9 rounded-full object-cover" />
              <span
                style={{ fontFamily: "'El Messiri', serif" }}
                className="text-lg font-semibold tracking-tight"
              >
                منصة نَبض
              </span>
            </div>
          ) : (
            <button
              onClick={() => setView("home")}
              className="flex items-center gap-1.5 text-sm text-[#B7C0D6] hover:text-[#EAF0FF]"
            >
              <ArrowRight size={18} />
              الرئيسية
            </button>
          )}
          <div className="flex items-center gap-2">
            {isAdmin && (
              <button
                onClick={() => setView("certificates")}
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-full border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D] transition-colors"
              >
                🎓 الشهادات
              </button>
            )}
            <button
              onClick={() => (isAdmin ? setIsAdmin(false) : setShowLogin(true))}
              className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-full border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D] transition-colors"
            >
              <Lock size={13} />
              {isAdmin ? "تسجيل الخروج" : "دخول المشرف"}
            </button>
          </div>
        </div>
      </header>

      <style>{`
        @keyframes navFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      {connectionError && (
        <div
          className="text-center text-xs py-2 px-4"
          style={{ backgroundColor: "#FBEFE7", color: "#9A5A22" }}
        >
          تعذر الاتصال بقاعدة البيانات — البيانات المعروضة محلية مؤقتًا ولن تُحفظ.
          <br />
          <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px" }}>
            تفاصيل الخطأ: {connectionError}
          </span>
        </div>
      )}

      {view === "home" && (
      <>
      {/* Hero */}
      <section className="relative max-w-5xl mx-auto px-5 pt-12 pb-8 flex flex-col items-center text-center overflow-hidden">
        {/* Interactive premium background: moves with cursor/touch, always gently alive */}
        <InteractiveHeroBackground />
        <div className="relative z-10 flex flex-col items-center">
        <div
          className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6 rounded-full overflow-hidden"
          style={{
            boxShadow:
              "0 0 0 1px #B8791A, 0 0 40px rgba(184,121,26,0.45), 0 0 90px rgba(184,121,26,0.22), inset 0 0 30px rgba(184,121,26,0.08)",
          }}
        >
          <img
            src={LOGO_SRC}
            alt="Pulse Biomedical Engineering"
            className="w-full h-full object-cover"
          />
        </div>
        <h1
          style={{ fontFamily: "'El Messiri', serif" }}
          className="text-3xl sm:text-4xl font-bold leading-tight"
        >
          {heroText.title}
        </h1>
        <div
          className="mt-5 max-w-2xl text-[#B7C0D6] leading-loose text-sm sm:text-base text-right"
          dir="rtl"
        >
          {heroText.body.split("\n\n").map((para, idx) => (
            <p key={idx} className="mb-3 last:mb-0">
              {para}
            </p>
          ))}
        </div>
        {isAdmin && (
          <button
            onClick={openEditHeroText}
            className="flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D] mt-2"
          >
            <Pencil size={11} />
            تعديل النص
          </button>
        )}

        {/* Three nav buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <div style={{ animation: "navFloat 4.2s ease-in-out infinite" }}>
          <button
            onClick={() => setView("social")}
            className="group flex items-center gap-3 pl-5 pr-3 py-3 rounded-2xl text-sm font-semibold transition-all hover:-translate-y-1"
            style={{ backgroundColor: "#101830cc", border: "1px solid #2A3B5C", boxShadow: "0 2px 10px rgba(31,122,92,0.10)" }}
          >
            <span
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2F8F6C, #1F5C46)" }}
            >
              <Users size={19} color="#FFFFFF" />
            </span>
            <span style={{ color: "#EAF0FF" }}>حساباتنا على مواقع التواصل الاجتماعي</span>
          </button>
          </div>
          <div style={{ animation: "navFloat 4.6s ease-in-out infinite 0.4s" }}>
          <button
            onClick={() => setView("workshops")}
            className="group flex items-center gap-3 pl-5 pr-3 py-3 rounded-2xl text-sm font-semibold transition-all hover:-translate-y-1"
            style={{ backgroundColor: "#101830cc", border: "1px solid #2A3B5C", boxShadow: "0 2px 10px rgba(184,121,26,0.12)" }}
          >
            <span
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #E0A93C, #B8791A)" }}
            >
              <BookOpen size={19} color="#FFFFFF" />
            </span>
            <span style={{ color: "#EAF0FF" }}>ورشنا ودوراتنا التدريبية</span>
          </button>
          </div>
          <div style={{ animation: "navFloat 3.8s ease-in-out infinite 0.8s" }}>
          <button
            onClick={() => setView("content")}
            className="group flex items-center gap-3 pl-5 pr-3 py-3 rounded-2xl text-sm font-semibold transition-all hover:-translate-y-1"
            style={{ backgroundColor: "#101830cc", border: "1px solid #2A3B5C", boxShadow: "0 2px 10px rgba(178,58,46,0.12)" }}
          >
            <span
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #D1594A, #A32E22)" }}
            >
              <Layers size={19} color="#FFFFFF" />
            </span>
            <span style={{ color: "#EAF0FF" }}>محتوياتنا</span>
          </button>
          </div>

          {extraButtons.map((btn, idx) => (
            <div key={btn.id} className="flex flex-col items-center gap-1.5">
              <div style={{ animation: `navFloat ${4.0 + (idx % 3) * 0.3}s ease-in-out infinite ${(idx % 3) * 0.3}s` }}>
                <a
                  href={btn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 pl-5 pr-3 py-3 rounded-2xl text-sm font-semibold transition-all hover:-translate-y-1"
                  style={{ backgroundColor: "#101830cc", border: "1px solid #2A3B5C", boxShadow: "0 2px 10px rgba(37,84,168,0.12)" }}
                >
                  <span
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105"
                    style={{ background: EXTRA_BUTTON_GRADIENTS[idx % EXTRA_BUTTON_GRADIENTS.length] }}
                  >
                    <Link2 size={19} color="#FFFFFF" />
                  </span>
                  <span style={{ color: "#EAF0FF" }}>{btn.label}</span>
                </a>
              </div>
              {isAdmin && (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => moveExtraButton(btn.id, -1)}
                    className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D] bg-[#101830]"
                  >
                    <ChevronUp size={12} />
                  </button>
                  <button
                    onClick={() => moveExtraButton(btn.id, 1)}
                    className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D] bg-[#101830]"
                  >
                    <ChevronDown size={12} />
                  </button>
                  <button
                    onClick={() => openEditExtraButton(btn)}
                    className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D] bg-[#101830]"
                  >
                    <Pencil size={12} />
                  </button>
                  {confirmDelete && confirmDelete.type === "extraButton" && confirmDelete.id === btn.id ? (
                    <button
                      onClick={() => deleteExtraButton(btn.id)}
                      className="px-1.5 h-6 flex items-center justify-center rounded-md text-[10px] font-medium"
                      style={{ backgroundColor: "#C1502E", color: "#FAF7F0" }}
                    >
                      تأكيد؟
                    </button>
                  ) : (
                    <button
                      onClick={() => setConfirmDelete({ type: "extraButton", id: btn.id })}
                      className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#C1502E] hover:border-[#C1502E] bg-[#101830]"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {isAdmin && (
          <button
            onClick={openAddExtraButton}
            className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg font-medium mt-4"
            style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
          >
            <Plus size={14} />
            إضافة زر جديد
          </button>
        )}

        {/* Stats section */}
        {isAdmin && (
          <button
            onClick={openAddStat}
            className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg font-medium mt-10 mb-1"
            style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
          >
            <Plus size={14} />
            إضافة إحصائية
          </button>
        )}
        {statsItems.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mt-6 w-full">
            {statsItems.map((stat, idx) => {
              const palette = STAT_PALETTE[idx % STAT_PALETTE.length];
              return (
                <div
                  key={stat.id}
                  className="flex flex-col items-center gap-1 rounded-2xl px-7 py-6 min-w-[150px] transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: palette.bg,
                    border: `1px solid ${palette.border}`,
                  }}
                >
                  <span
                    style={{ fontFamily: "'IBM Plex Mono', monospace", color: palette.text }}
                    className="text-3xl sm:text-4xl font-bold tabular-nums"
                  >
                    <CountUpNumber value={stat.value} />
                  </span>
                  <span className="text-xs sm:text-sm font-medium" style={{ color: palette.text, opacity: 0.85 }}>
                    {stat.label}
                  </span>
                  {isAdmin && (
                    <div className="flex items-center gap-1 mt-2">
                      <button
                        onClick={() => moveStat(stat.id, -1)}
                        className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D] bg-[#101830]"
                      >
                        <ChevronUp size={12} />
                      </button>
                      <button
                        onClick={() => moveStat(stat.id, 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D] bg-[#101830]"
                      >
                        <ChevronDown size={12} />
                      </button>
                      <button
                        onClick={() => openEditStat(stat)}
                        className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D] bg-[#101830]"
                      >
                        <Pencil size={12} />
                      </button>
                      {confirmDelete && confirmDelete.type === "stat" && confirmDelete.id === stat.id ? (
                        <button
                          onClick={() => deleteStat(stat.id)}
                          className="px-1.5 h-6 flex items-center justify-center rounded-md text-[10px] font-medium"
                          style={{ backgroundColor: "#C1502E", color: "#FAF7F0" }}
                        >
                          تأكيد؟
                        </button>
                      ) : (
                        <button
                          onClick={() => setConfirmDelete({ type: "stat", id: stat.id })}
                          className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#C1502E] hover:border-[#C1502E] bg-[#101830]"
                        >
                          <Trash2 size={12} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
        </div>
      </section>
      </>
      )}

      {/* Social links section */}
      {view === "social" && (
      <LinkSection
        id="social"
        title="حساباتنا على مواقع التواصل الاجتماعي"
        items={socialLinks}
        type="social"
        isAdmin={isAdmin}
        onAdd={() => openAddLink("social")}
        onEdit={(item) => openEditLink("social", item)}
        onDelete={(id) => setConfirmDelete({ type: "social", id })}
        onMove={(id, dir) => moveSocialLink(id, dir)}
        confirmDelete={confirmDelete}
        onConfirmDelete={(id) => deleteLink("social", id)}
        onCancelDelete={() => setConfirmDelete(null)}
      />
      )}

      {/* Workshops section */}
      {view === "workshops" && (
      <section id="workshops" className="max-w-5xl mx-auto px-5 pb-4 pt-10 scroll-mt-20">
        <div className="flex items-center justify-between mb-5">
          <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-xl font-semibold">
            ورشنا ودوراتنا التدريبية
          </h2>
          {isAdmin && (
            <button
              onClick={openAddWorkshop}
              className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg font-medium"
              style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
            >
              <Plus size={14} />
              إضافة ورشة
            </button>
          )}
        </div>

        {!loaded ? (
          <p className="text-[#8B93A7] text-sm">جاري التحميل...</p>
        ) : workshops.length === 0 ? (
          <div className="border border-dashed border-[#28324D] rounded-xl p-10 text-center text-[#8B93A7]">
            لا توجد ورشات بعد.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((w, idx) => {
              const meta = PLATFORM_META[w.platform] || PLATFORM_META.other;
              const Icon = meta.icon;
              return (
                <div
                  key={w.id}
                  style={{ animation: `navFloat ${3.8 + (idx % 4) * 0.4}s ease-in-out infinite ${(idx % 4) * 0.25}s` }}
                >
                <div
                  className="relative rounded-xl overflow-hidden flex"
                  style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
                >
                  <div
                    className="w-8 flex items-center justify-center shrink-0"
                    style={{
                      borderLeft: "2px dashed #28324D",
                      background:
                        "repeating-linear-gradient(180deg, transparent, transparent 6px, #101830 6px, #101830 7px)",
                    }}
                  >
                    <span
                      style={{
                        writingMode: "vertical-rl",
                        fontFamily: "'IBM Plex Mono', monospace",
                        color: "#8B93A7",
                        letterSpacing: "0.1em",
                      }}
                      className="text-[10px] py-2"
                    >
                      {w.category || "ورشة"}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col">
                    {w.imageUrl && (
                      <div className="relative w-full aspect-square overflow-hidden bg-white">
                        <img
                          src={w.imageUrl}
                          alt={w.title}
                          className="w-full h-full object-contain"
                          onError={(e) => (e.target.style.display = "none")}
                        />
                        {w.status === "ended" && (
                          <div
                            className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold"
                            style={{ backgroundColor: "#C1502E", color: "#FAF7F0" }}
                          >
                            انتهت
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-4 flex-1 flex flex-col">
                      <h3
                        style={{ fontFamily: "'El Messiri', serif" }}
                        className="text-base font-semibold leading-snug mb-1.5"
                      >
                        {w.title}
                      </h3>
                      <p
                        className="text-xs text-[#8B93A7] leading-relaxed mb-3 flex-1"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {w.description}
                      </p>

                      {(w.date || w.place) && (
                        <div
                          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                          className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-[#8B93A7] mb-3"
                        >
                          {w.date && <span>📅 {w.date}</span>}
                          {w.place && <span>📍 {w.place}</span>}
                        </div>
                      )}

                      {w.status !== "ended" && (w.price || w.paymentLink || w.paymentQrImage) && (
                        <div
                          className="rounded-lg p-3 mb-3 flex flex-col gap-2"
                          style={{ backgroundColor: "#FBF6E9", border: "1px solid #F0E3BE" }}
                        >
                          {w.price && (
                            <div
                              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                              className="text-xs font-medium text-[#9A6B22]"
                            >
                              💳 السعر: {w.price}
                            </div>
                          )}
                          {w.paymentLink && (
                            <a
                              href={w.paymentLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-1.5 text-xs font-medium py-2 rounded-md"
                              style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
                            >
                              ادفع الآن
                              <ArrowUpRight size={12} />
                            </a>
                          )}
                          {w.paymentQrImage && (
                            <img
                              src={w.paymentQrImage}
                              alt="رمز الدفع QR"
                              className="w-28 h-28 object-contain mx-auto rounded-md bg-white p-1"
                              style={{ border: "1px solid #F0E3BE" }}
                            />
                          )}
                        </div>
                      )}

                      {w.status === "ended" ? (
                        <div
                          className="flex items-center justify-center gap-1.5 text-sm font-medium py-2.5 rounded-lg"
                          style={{ backgroundColor: "#131C30", color: "#8B93A7" }}
                        >
                          انتهت الدورة — التسجيل مغلق
                        </div>
                      ) : (
                        <a
                          href={w.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center gap-1.5 text-sm font-medium py-2.5 rounded-lg transition-colors"
                          style={{ backgroundColor: meta.color, color: "#FAF7F0" }}
                        >
                          <Icon size={14} />
                          انضم الآن عبر {meta.label}
                          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      )}

                      {isAdmin && (
                        <div className="flex gap-2 mt-2.5">
                          <button
                            onClick={() => moveWorkshop(w.id, -1)}
                            title="تحريك لأعلى"
                            className="w-8 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                          >
                            <ChevronUp size={13} />
                          </button>
                          <button
                            onClick={() => moveWorkshop(w.id, 1)}
                            title="تحريك لأسفل"
                            className="w-8 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                          >
                            <ChevronDown size={13} />
                          </button>
                          <button
                            onClick={() => openEditWorkshop(w)}
                            className="flex-1 flex items-center justify-center gap-1 text-[11px] py-1.5 rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                          >
                            <Pencil size={11} /> تعديل
                          </button>
                          {confirmDelete && confirmDelete.type === "workshop" && confirmDelete.id === w.id ? (
                            <button
                              onClick={() => deleteWorkshop(w.id)}
                              className="flex-1 flex items-center justify-center gap-1 text-[11px] py-1.5 rounded-md font-medium"
                              style={{ backgroundColor: "#C1502E", color: "#FAF7F0" }}
                            >
                              تأكيد الحذف؟
                            </button>
                          ) : (
                            <button
                              onClick={() => setConfirmDelete({ type: "workshop", id: w.id })}
                              className="flex-1 flex items-center justify-center gap-1 text-[11px] py-1.5 rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#C1502E] hover:border-[#C1502E]"
                            >
                              <Trash2 size={11} /> حذف
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
      )}

      {/* Content links section */}
      {view === "content" && (
      <>
      <section className="max-w-5xl mx-auto px-5 pt-10">
        <button
          onClick={() => setView("heroesList")}
          className="group w-full flex items-center gap-3 rounded-xl p-4 transition-transform hover:-translate-y-0.5"
          style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
        >
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "linear-gradient(135deg, #E0A93C, #B8791A)" }}
          >
            <Users size={20} color="#0B1220" />
          </div>
          <span className="text-sm font-semibold flex-1 text-right">🏆 أبطال منصة نبض</span>
          <ArrowUpRight
            size={16}
            className="text-[#8B93A7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </section>
      <LinkSection
        id="content"
        title="محتوياتنا"
        items={contentLinks}
        type="content"
        isAdmin={isAdmin}
        onAddRoot={() => openNodeEditor("addRoot")}
        onNodeEdit={(node) => openNodeEditor("edit", node.id, null, node)}
        onNodeAddLinkNow={(node) => openNodeEditor("edit", node.id, null, node, "link")}
        onNodeAddChild={(parentId) => openNodeEditor("addChild", null, parentId)}
        onNodeDelete={(id) => deleteContentNode(id)}
        onNodeMove={(id, dir) => moveContentNode(id, dir)}
      />
      </>
      )}

      {/* Heroes list view */}
      {view === "heroesList" && (
        <section className="max-w-5xl mx-auto px-5 pb-16 pt-10 scroll-mt-20">
          <div className="flex items-center justify-between mb-5">
            <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-xl font-semibold">
              🏆 أبطال منصة نبض
            </h2>
            {isAdmin && (
              <button
                onClick={openAddHero}
                className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg font-medium"
                style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
              >
                <Plus size={14} />
                إضافة بطل
              </button>
            )}
          </div>

          {heroes.length === 0 ? (
            <div className="border border-dashed border-[#28324D] rounded-xl p-8 text-center text-[#8B93A7] text-sm">
              ما فيه أبطال مضافين بعد.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {heroes.map((hero) => (
                <div key={hero.id} className="flex flex-col items-center gap-2 relative">
                  <button
                    onClick={() => {
                      setSelectedHeroId(hero.id);
                      setView("heroProfile");
                    }}
                    className="flex flex-col items-center gap-2 w-full"
                  >
                    <div className="relative">
                      <div
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex items-center justify-center"
                        style={{ backgroundColor: "#101830", border: "2px solid #E8A33D" }}
                      >
                        {hero.photoUrl ? (
                          <img src={hero.photoUrl} alt={hero.name} className="w-full h-full object-cover" />
                        ) : (
                          <Users size={28} className="text-[#28324D]" />
                        )}
                      </div>
                      {hero.icon && (
                        <div
                          className="absolute bottom-0 left-0 w-7 h-7 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#0B1220", border: "1.5px solid #E8A33D" }}
                        >
                          <img src={heroIconUrl(hero.icon, "#B8791A")} alt="" className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-center">{hero.name}</span>
                  </button>
                  {isAdmin && (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => moveHero(hero.id, -1)}
                        className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                      >
                        <ChevronUp size={11} />
                      </button>
                      <button
                        onClick={() => moveHero(hero.id, 1)}
                        className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                      >
                        <ChevronDown size={11} />
                      </button>
                      {confirmDelete && confirmDelete.type === "hero" && confirmDelete.id === hero.id ? (
                        <button
                          onClick={() => deleteHero(hero.id)}
                          className="px-1.5 h-6 rounded-md text-[10px] font-medium"
                          style={{ backgroundColor: "#C1502E", color: "#FAF7F0" }}
                        >
                          تأكيد؟
                        </button>
                      ) : (
                        <button
                          onClick={() => setConfirmDelete({ type: "hero", id: hero.id })}
                          className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#C1502E] hover:border-[#C1502E]"
                        >
                          <Trash2 size={11} />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Individual hero profile view */}
      {view === "heroProfile" && selectedHeroId && (() => {
        const hero = heroes.find((h) => h.id === selectedHeroId);
        if (!hero) return null;
        return (
          <section className="max-w-3xl mx-auto px-5 pb-16 pt-10 flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: "#101830", border: "3px solid #E8A33D" }}
              >
                {hero.photoUrl ? (
                  <img src={hero.photoUrl} alt={hero.name} className="w-full h-full object-cover" />
                ) : (
                  <Users size={44} className="text-[#28324D]" />
                )}
              </div>
              {hero.icon && (
                <div
                  className="absolute bottom-0 left-0 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#0B1220", border: "2px solid #E8A33D" }}
                >
                  <img src={heroIconUrl(hero.icon, "#B8791A")} alt="" className="w-6 h-6" />
                </div>
              )}
            </div>

            {isAdmin && (
              <div className="flex items-center gap-2 mb-4">
                <label className="text-[11px] px-3 py-1.5 rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D] cursor-pointer">
                  {hero.photoUrl ? "تغيير الصورة" : "إضافة صورة"}
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleHeroPhotoUpload(hero.id, e.target.files && e.target.files[0])}
                  />
                </label>
                {hero.photoUrl && (
                  <button
                    onClick={() => removeHeroPhoto(hero.id)}
                    className="text-[11px] px-3 py-1.5 rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#C1502E] hover:border-[#C1502E]"
                  >
                    حذف الصورة
                  </button>
                )}
              </div>
            )}
            {heroPhotoError && <p className="text-[#C1502E] text-xs mb-3">{heroPhotoError}</p>}

            <h1 style={{ fontFamily: "'El Messiri', serif" }} className="text-2xl font-bold mb-2">
              {hero.name}
            </h1>

            {isAdmin && (
              <button
                onClick={() => openEditHero(hero)}
                className="text-[11px] px-3 py-1.5 rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D] mb-4 flex items-center gap-1"
              >
                <Pencil size={11} /> تعديل الاسم / النبذة
              </button>
            )}

            {hero.bio && (
              <p
                className="text-sm text-[#B7C0D6] leading-loose mb-6 max-w-xl text-right"
                dir="rtl"
                style={{ whiteSpace: "pre-line" }}
              >
                {hero.bio}
              </p>
            )}

            <div className="w-full flex items-center justify-between mb-3">
              <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-sm font-semibold">
                المحتوى
              </h2>
              {isAdmin && (
                <button
                  onClick={() => openAddHeroLink(hero.id)}
                  className="flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-lg font-medium"
                  style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
                >
                  <Plus size={12} />
                  إضافة رابط
                </button>
              )}
            </div>

            {hero.links.length === 0 ? (
              <div className="w-full border border-dashed border-[#28324D] rounded-xl p-6 text-center text-[#8B93A7] text-xs">
                ما فيه محتوى مضاف بعد.
              </div>
            ) : (
              <div className="w-full flex flex-col gap-2">
                {hero.links.map((link) => (
                  <div key={link.id} className="flex items-center gap-2">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex-1 flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm"
                      style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
                    >
                      <PlayCircle size={15} style={{ color: "#2F6F62" }} />
                      <span className="flex-1 text-right">{link.title}</span>
                      <ArrowUpRight
                        size={14}
                        className="text-[#8B93A7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                    {isAdmin && (
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => moveHeroLink(hero.id, link.id, -1)}
                          className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                        >
                          <ChevronUp size={11} />
                        </button>
                        <button
                          onClick={() => moveHeroLink(hero.id, link.id, 1)}
                          className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                        >
                          <ChevronDown size={11} />
                        </button>
                        <button
                          onClick={() => openEditHeroLink(hero.id, link)}
                          className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                        >
                          <Pencil size={11} />
                        </button>
                        {confirmDelete && confirmDelete.type === "heroLink" && confirmDelete.id === link.id ? (
                          <button
                            onClick={() => deleteHeroLink(hero.id, link.id)}
                            className="px-1.5 h-6 rounded-md text-[10px] font-medium"
                            style={{ backgroundColor: "#C1502E", color: "#FAF7F0" }}
                          >
                            تأكيد؟
                          </button>
                        ) : (
                          <button
                            onClick={() => setConfirmDelete({ type: "heroLink", id: link.id })}
                            className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#C1502E] hover:border-[#C1502E]"
                          >
                            <Trash2 size={11} />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </section>
        );
      })()}

      {/* Certificates admin section */}
      {view === "certificates" && isAdmin && (
        <section className="max-w-5xl mx-auto px-5 pb-16 pt-10 scroll-mt-20">
          <div className="flex items-center justify-between mb-5">
            <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-xl font-semibold">
              🎓 إصدار وتوثيق الشهادات
            </h2>
            <button
              onClick={openAddCertificate}
              className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg font-medium"
              style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
            >
              <Plus size={14} />
              إصدار شهادة جديدة
            </button>
          </div>

          <p className="text-xs text-[#8B93A7] mb-5 leading-relaxed">
            كل شهادة تحصل على رقم تسلسلي فريد ورمز QR. الرمز يفتح صفحة توثيق تلقائية بهذا الموقع تُظهر اسم المشارك ورقم الشهادة.
          </p>

          {/* Template settings */}
          <div
            className="rounded-xl p-4 sm:p-5 mb-6"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <h3 style={{ fontFamily: "'El Messiri', serif" }} className="text-sm font-semibold mb-3">
              ⚙️ إعدادات قالب الشهادة (صورة التصميم + مكان الاسم والباركود)
            </h3>
            <form onSubmit={submitCertTemplate} className="space-y-3">
              <Field label="صورة قالب الشهادة">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleTemplateFileUpload}
                  className="block w-full text-xs text-[#8B93A7] file:ml-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:cursor-pointer"
                  style={{ ...inputStyle, padding: "0.4rem" }}
                />
                {certUploadError && <p className="text-[#C1502E] text-xs mt-1">{certUploadError}</p>}
                {certTemplateDraft.imageUrl && (
                  <p className="text-[10px] text-[#8B93A7] mt-1">
                    ✅ الصورة محمّلة ({Math.round(certTemplateDraft.imageUrl.length / 1024)} كيلوبايت بعد الضغط)
                  </p>
                )}
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="موقع الاسم أفقيًا % (0 يسار — 100 يمين)">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={certTemplateDraft.nameX}
                    onChange={(e) => setCertTemplateDraft({ ...certTemplateDraft, nameX: Number(e.target.value) })}
                    style={inputStyle}
                  />
                </Field>
                <Field label="موقع الاسم عموديًا % (0 فوق — 100 تحت)">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={certTemplateDraft.nameY}
                    onChange={(e) => setCertTemplateDraft({ ...certTemplateDraft, nameY: Number(e.target.value) })}
                    style={inputStyle}
                  />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="حجم خط الاسم">
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={certTemplateDraft.nameSize}
                    onChange={(e) => setCertTemplateDraft({ ...certTemplateDraft, nameSize: Number(e.target.value) })}
                    style={inputStyle}
                  />
                </Field>
                <Field label="لون خط الاسم">
                  <input
                    type="text"
                    value={certTemplateDraft.nameColor}
                    onChange={(e) => setCertTemplateDraft({ ...certTemplateDraft, nameColor: e.target.value })}
                    placeholder="#EAF0FF"
                    style={inputStyle}
                  />
                </Field>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <Field label="موقع QR أفقيًا %">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={certTemplateDraft.qrX}
                    onChange={(e) => setCertTemplateDraft({ ...certTemplateDraft, qrX: Number(e.target.value) })}
                    style={inputStyle}
                  />
                </Field>
                <Field label="موقع QR عموديًا %">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={certTemplateDraft.qrY}
                    onChange={(e) => setCertTemplateDraft({ ...certTemplateDraft, qrY: Number(e.target.value) })}
                    style={inputStyle}
                  />
                </Field>
                <Field label="حجم QR %">
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={certTemplateDraft.qrSizePct}
                    onChange={(e) => setCertTemplateDraft({ ...certTemplateDraft, qrSizePct: Number(e.target.value) })}
                    style={inputStyle}
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium mt-2"
                style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
              >
                <Check size={15} />
                حفظ إعدادات القالب
              </button>
            </form>

            {certPreviewUrl && (
              <div className="mt-4">
                <p className="text-xs text-[#8B93A7] mb-2">معاينة حية (باسم تجريبي):</p>
                <img
                  src={certPreviewUrl}
                  alt="معاينة الشهادة"
                  className="w-full rounded-lg"
                  style={{ border: "1px solid #2A3B5C" }}
                />
              </div>
            )}
          </div>

          {/* Bulk generation */}
          <div
            className="rounded-xl p-4 sm:p-5 mb-6"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <h3 style={{ fontFamily: "'El Messiri', serif" }} className="text-sm font-semibold mb-3">
              📋 توليد شهادات جماعي (الصق كل الأسماء دفعة وحدة)
            </h3>
            <textarea
              value={bulkNamesText}
              onChange={(e) => setBulkNamesText(e.target.value)}
              placeholder={"مثال:\nأحمد محمد علي\nزينب حسين\nعلي عدي"}
              rows={6}
              style={inputStyle}
            />
            <button
              onClick={runBulkGenerate}
              disabled={bulkGenerating}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium mt-3 disabled:opacity-60"
              style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
            >
              {bulkGenerating ? "جارِ التوليد..." : "توليد الشهادات"}
            </button>

            {bulkResults.length > 0 && (
              <div className="mt-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-[#8B93A7]">تم توليد {bulkResults.length} شهادة</p>
                  <button
                    onClick={downloadAllBulk}
                    className="text-[11px] px-3 py-1.5 rounded-md font-medium"
                    style={{ backgroundColor: "#1F7A5C", color: "#FAF7F0" }}
                  >
                    تحميل الكل
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {bulkResults.map((r) => (
                    <div
                      key={r.serial}
                      className="rounded-lg p-2 flex flex-col gap-2"
                      style={{ backgroundColor: "#0B1220", border: "1px solid #2A3B5C" }}
                    >
                      <img src={r.dataUrl} alt={r.name} className="w-full rounded" />
                      <p className="text-[11px] font-medium truncate">{r.name}</p>
                      <button
                        onClick={() => downloadCertImage(r.dataUrl, `${r.serial}-${r.name}.png`)}
                        className="text-[10px] py-1 rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                      >
                        تحميل
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {certificates.length === 0 ? (
            <div className="border border-dashed border-[#28324D] rounded-xl p-8 text-center text-[#8B93A7] text-sm">
              ما صدرت أي شهادة بعد.
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {[...certificates].reverse().map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between gap-3 rounded-xl p-4"
                  style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
                >
                  <div>
                    <div className="text-sm font-semibold">{c.name}</div>
                    <div
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                      className="text-xs text-[#8B93A7] mt-0.5"
                    >
                      {c.serial}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setCertQrFor(c)}
                      className="text-[11px] px-3 py-1.5 rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                    >
                      عرض QR
                    </button>
                    {confirmDelete && confirmDelete.type === "certificate" && confirmDelete.id === c.id ? (
                      <button
                        onClick={() => deleteCertificate(c.id)}
                        className="text-[11px] px-3 py-1.5 rounded-md font-medium"
                        style={{ backgroundColor: "#C1502E", color: "#FAF7F0" }}
                      >
                        تأكيد؟
                      </button>
                    ) : (
                      <button
                        onClick={() => setConfirmDelete({ type: "certificate", id: c.id })}
                        className="text-[11px] px-3 py-1.5 rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#C1502E] hover:border-[#C1502E]"
                      >
                        <Trash2 size={12} />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Login modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5">
          <div
            className="w-full max-w-sm rounded-xl p-6"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-semibold">
                دخول المشرف
              </h2>
              <button onClick={() => setShowLogin(false)} className="text-[#8B93A7] hover:text-[#EAF0FF]">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handleLogin}>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="كلمة السر"
                autoFocus
                className="w-full px-3 py-2.5 rounded-lg text-sm mb-2 outline-none"
                style={{ backgroundColor: "#0B1220", border: "1px solid #28324D", color: "#EAF0FF" }}
              />
              {loginError && <p className="text-[#C1502E] text-xs mb-2">{loginError}</p>}
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg text-sm font-medium mt-2"
                style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
              >
                دخول
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add/Edit workshop modal */}
      {workshopFormOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5 py-8 overflow-y-auto">
          <div
            className="w-full max-w-md rounded-xl p-6"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-semibold">
                {workshopEditId ? "تعديل الورشة" : "إضافة ورشة"}
              </h2>
              <button onClick={() => setWorkshopFormOpen(false)} className="text-[#8B93A7] hover:text-[#EAF0FF]">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={submitWorkshop} className="space-y-3">
              <Field label="عنوان الورشة *">
                <input
                  value={workshopForm.title}
                  onChange={(e) => setWorkshopForm({ ...workshopForm, title: e.target.value })}
                  style={inputStyle}
                />
              </Field>
              <Field label="التصنيف (مثال: تصميم، برمجة)">
                <input
                  value={workshopForm.category}
                  onChange={(e) => setWorkshopForm({ ...workshopForm, category: e.target.value })}
                  style={inputStyle}
                />
              </Field>
              <Field label="الوصف">
                <textarea
                  value={workshopForm.description}
                  onChange={(e) => setWorkshopForm({ ...workshopForm, description: e.target.value })}
                  rows={3}
                  style={inputStyle}
                />
              </Field>
              <Field label="صورة الورشة">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleWorkshopImageUpload}
                  className="block w-full text-xs text-[#6B7280] file:ml-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:cursor-pointer"
                  style={{ ...inputStyle, padding: "0.4rem" }}
                />
                <p className="text-[10px] text-[#6B7280] mt-1">
                  تُضغط الصورة تلقائيًا لحجم صغير — عشان ما تتكرر مشكلة امتلاء قاعدة البيانات القديمة.
                </p>
                {workshopImageUploadError && (
                  <p className="text-[#C1502E] text-xs mt-1">{workshopImageUploadError}</p>
                )}
                {workshopForm.imageUrl && (
                  <img
                    src={workshopForm.imageUrl}
                    alt=""
                    className="mt-2 w-full h-28 object-cover rounded-lg"
                    style={{ border: "1px solid #2A3B5C" }}
                  />
                )}
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="الموعد">
                  <input
                    value={workshopForm.date}
                    onChange={(e) => setWorkshopForm({ ...workshopForm, date: e.target.value })}
                    style={inputStyle}
                  />
                </Field>
                <Field label="المكان">
                  <input
                    value={workshopForm.place}
                    onChange={(e) => setWorkshopForm({ ...workshopForm, place: e.target.value })}
                    style={inputStyle}
                  />
                </Field>
              </div>
              <Field label="المنصة">
                <select
                  value={workshopForm.platform}
                  onChange={(e) => setWorkshopForm({ ...workshopForm, platform: e.target.value })}
                  style={inputStyle}
                >
                  {Object.entries(PLATFORM_META).map(([key, m]) => (
                    <option key={key} value={key}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="رابط الانضمام *">
                <input
                  value={workshopForm.link}
                  onChange={(e) => setWorkshopForm({ ...workshopForm, link: e.target.value })}
                  placeholder="https://t.me/..."
                  style={inputStyle}
                />
              </Field>
              <Field label="حالة الورشة">
                <select
                  value={workshopForm.status}
                  onChange={(e) => setWorkshopForm({ ...workshopForm, status: e.target.value })}
                  style={inputStyle}
                >
                  <option value="active">نشطة (التسجيل مفتوح)</option>
                  <option value="ended">انتهت (التسجيل مغلق)</option>
                </select>
              </Field>
              <Field label="السعر (اتركه فاضي إذا الورشة مجانية)">
                <input
                  value={workshopForm.price}
                  onChange={(e) => setWorkshopForm({ ...workshopForm, price: e.target.value })}
                  placeholder="مثال: 25,000 د.ع"
                  style={inputStyle}
                />
              </Field>
              <Field label="رابط الدفع (K Card / FIB / Zain Cash...) — اختياري">
                <input
                  value={workshopForm.paymentLink}
                  onChange={(e) => setWorkshopForm({ ...workshopForm, paymentLink: e.target.value })}
                  placeholder="https://..."
                  style={inputStyle}
                />
              </Field>
              <Field label="صورة رمز الدفع QR — اختياري">
                <input
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    const file = e.target.files && e.target.files[0];
                    if (!file) return;
                    setWorkshopImageUploadError("");
                    try {
                      const dataUrl = await compressImageFile(file, { maxDim: 400, maxBytes: 60000 });
                      setWorkshopForm((prev) => ({ ...prev, paymentQrImage: dataUrl }));
                    } catch (err) {
                      setWorkshopImageUploadError(
                        err && err.message === "too_large"
                          ? "الصورة كبيرة جدًا حتى بعد الضغط، جرب صورة أبسط."
                          : "تعذر قراءة الصورة، جرب ملف صورة آخر."
                      );
                    }
                  }}
                  className="block w-full text-xs text-[#6B7280] file:ml-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-medium file:cursor-pointer"
                  style={{ ...inputStyle, padding: "0.4rem" }}
                />
                {workshopForm.paymentQrImage && (
                  <img
                    src={workshopForm.paymentQrImage}
                    alt=""
                    className="mt-2 w-24 h-24 object-cover rounded-lg bg-white p-1"
                    style={{ border: "1px solid #2A3B5C" }}
                  />
                )}
              </Field>

              {saveError && <p className="text-[#C1502E] text-xs">{saveError}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium mt-2"
                style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
              >
                <Check size={15} />
                {workshopEditId ? "حفظ التعديل" : "إضافة الورشة"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add/Edit link modal (social / content) */}
      {linkFormOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5 py-8 overflow-y-auto">
          <div
            className="w-full max-w-md rounded-xl p-6"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-semibold">
                {linkEditId ? "تعديل الرابط" : "إضافة رابط"}
              </h2>
              <button onClick={() => setLinkFormOpen(false)} className="text-[#8B93A7] hover:text-[#EAF0FF]">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={submitLink} className="space-y-3">
              <Field label="العنوان *">
                <input
                  value={linkForm.title}
                  onChange={(e) => setLinkForm({ ...linkForm, title: e.target.value })}
                  style={inputStyle}
                />
              </Field>
              <Field label="المنصة">
                <select
                  value={linkForm.platform}
                  onChange={(e) => setLinkForm({ ...linkForm, platform: e.target.value })}
                  style={inputStyle}
                >
                  {Object.entries(PLATFORM_META).map(([key, m]) => (
                    <option key={key} value={key}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="الرابط *">
                <input
                  value={linkForm.url}
                  onChange={(e) => setLinkForm({ ...linkForm, url: e.target.value })}
                  placeholder="https://..."
                  style={inputStyle}
                />
              </Field>

              {saveError && <p className="text-[#C1502E] text-xs">{saveError}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium mt-2"
                style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
              >
                <Check size={15} />
                {linkEditId ? "حفظ التعديل" : "إضافة الرابط"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Generalized content node editor (series / groups / notes / pending / links, any depth) */}
      {nodeEditorOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5 py-8 overflow-y-auto">
          <div
            className="w-full max-w-md rounded-xl p-6"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-semibold">
                {nodeEditorMode === "edit" ? "تعديل عنصر" : "إضافة عنصر"}
              </h2>
              <button onClick={() => setNodeEditorOpen(false)} className="text-[#8B93A7] hover:text-[#EAF0FF]">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={submitNodeEditor} className="space-y-3">
              <Field label="نوع العنصر">
                <select
                  value={nodeEditorForm.kind}
                  onChange={(e) => setNodeEditorForm({ ...nodeEditorForm, kind: e.target.value })}
                  style={inputStyle}
                >
                  <option value="link">رابط مباشر</option>
                  <option value="group">مجموعة (تحتوي عناصر فرعية)</option>
                  <option value="note">نبذة نصية</option>
                  <option value="pending">قريبًا (بدون رابط)</option>
                </select>
              </Field>
              <Field label="العنوان *">
                <input
                  value={nodeEditorForm.title}
                  onChange={(e) => setNodeEditorForm({ ...nodeEditorForm, title: e.target.value })}
                  style={inputStyle}
                />
              </Field>
              {nodeEditorForm.kind === "link" && (
                <Field label="الرابط *">
                  <input
                    value={nodeEditorForm.url}
                    onChange={(e) => setNodeEditorForm({ ...nodeEditorForm, url: e.target.value })}
                    placeholder="https://..."
                    style={inputStyle}
                  />
                </Field>
              )}
              {nodeEditorForm.kind === "note" && (
                <Field label="النص">
                  <textarea
                    value={nodeEditorForm.note}
                    onChange={(e) => setNodeEditorForm({ ...nodeEditorForm, note: e.target.value })}
                    rows={5}
                    style={inputStyle}
                  />
                </Field>
              )}
              {nodeEditorForm.kind === "pending" && (
                <Field label="ملاحظة (اختياري، مثال: سيُضاف يوم الخميس)">
                  <input
                    value={nodeEditorForm.pendingLabel}
                    onChange={(e) => setNodeEditorForm({ ...nodeEditorForm, pendingLabel: e.target.value })}
                    placeholder="قريبًا"
                    style={inputStyle}
                  />
                </Field>
              )}
              {nodeEditorForm.kind === "group" && (
                <p className="text-xs text-[#8B93A7]">
                  بعد الحفظ، تقدر تضيف عناصر فرعية داخل هذه المجموعة بالضغط على زر "+" جنبها.
                </p>
              )}

              {saveError && <p className="text-[#C1502E] text-xs">{saveError}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium mt-2"
                style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
              >
                <Check size={15} />
                {nodeEditorMode === "edit" ? "حفظ التعديل" : "إضافة"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add/Edit stat modal */}
      {statFormOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5 py-8 overflow-y-auto">
          <div
            className="w-full max-w-md rounded-xl p-6"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-semibold">
                {statEditId ? "تعديل إحصائية" : "إضافة إحصائية"}
              </h2>
              <button onClick={() => setStatFormOpen(false)} className="text-[#8B93A7] hover:text-[#EAF0FF]">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={submitStat} className="space-y-3">
              <Field label="العنوان (مثال: عدد زوار موقعنا) *">
                <input
                  value={statForm.label}
                  onChange={(e) => setStatForm({ ...statForm, label: e.target.value })}
                  style={inputStyle}
                />
              </Field>
              <Field label="الرقم (مثال: 7649) *">
                <input
                  value={statForm.value}
                  onChange={(e) => setStatForm({ ...statForm, value: e.target.value })}
                  style={inputStyle}
                />
              </Field>

              {saveError && <p className="text-[#C1502E] text-xs">{saveError}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium mt-2"
                style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
              >
                <Check size={15} />
                {statEditId ? "حفظ التعديل" : "إضافة"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add/Edit hero (name + bio) modal */}
      {heroFormOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5 py-8 overflow-y-auto">
          <div
            className="w-full max-w-md rounded-xl p-6"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-semibold">
                {heroEditId ? "تعديل الاسم / النبذة" : "إضافة بطل جديد"}
              </h2>
              <button onClick={() => setHeroFormOpen(false)} className="text-[#8B93A7] hover:text-[#EAF0FF]">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={submitHero} className="space-y-3">
              <Field label="الاسم *">
                <input
                  value={heroForm.name}
                  onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                  style={inputStyle}
                />
              </Field>
              <Field label="النبذة التعريفية">
                <textarea
                  value={heroForm.bio}
                  onChange={(e) => setHeroForm({ ...heroForm, bio: e.target.value })}
                  rows={6}
                  style={inputStyle}
                />
              </Field>
              <Field label="أيقونة التخصص (تظهر بجانب اسمه)">
                <select
                  value={heroForm.icon}
                  onChange={(e) => setHeroForm({ ...heroForm, icon: e.target.value })}
                  style={inputStyle}
                >
                  {HERO_ICON_OPTIONS.map((opt) => (
                    <option key={opt.slug} value={opt.slug}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {heroForm.icon && (
                  <div className="flex items-center gap-2 mt-2">
                    <img src={heroIconUrl(heroForm.icon, "#B8791A")} alt="" className="w-7 h-7" />
                    <span className="text-[11px] text-[#8B93A7]">معاينة الأيقونة</span>
                  </div>
                )}
              </Field>

              {saveError && <p className="text-[#C1502E] text-xs">{saveError}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium mt-2"
                style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
              >
                <Check size={15} />
                {heroEditId ? "حفظ التعديل" : "إضافة"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add/Edit hero content link modal */}
      {heroLinkFormOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5 py-8 overflow-y-auto">
          <div
            className="w-full max-w-md rounded-xl p-6"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-semibold">
                {heroLinkEditId ? "تعديل الرابط" : "إضافة رابط"}
              </h2>
              <button onClick={() => setHeroLinkFormOpen(false)} className="text-[#8B93A7] hover:text-[#EAF0FF]">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={submitHeroLink} className="space-y-3">
              <Field label="عنوان المحتوى *">
                <input
                  value={heroLinkForm.title}
                  onChange={(e) => setHeroLinkForm({ ...heroLinkForm, title: e.target.value })}
                  style={inputStyle}
                />
              </Field>
              <Field label="الرابط *">
                <input
                  value={heroLinkForm.url}
                  onChange={(e) => setHeroLinkForm({ ...heroLinkForm, url: e.target.value })}
                  placeholder="https://..."
                  style={inputStyle}
                />
              </Field>

              {saveError && <p className="text-[#C1502E] text-xs">{saveError}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium mt-2"
                style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
              >
                <Check size={15} />
                {heroLinkEditId ? "حفظ التعديل" : "إضافة"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Add/Edit extra custom button modal */}
      {extraButtonFormOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5 py-8 overflow-y-auto">
          <div
            className="w-full max-w-md rounded-xl p-6"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-semibold">
                {extraButtonEditId ? "تعديل الزر" : "إضافة زر جديد"}
              </h2>
              <button onClick={() => setExtraButtonFormOpen(false)} className="text-[#8B93A7] hover:text-[#EAF0FF]">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={submitExtraButton} className="space-y-3">
              <Field label="عنوان الزر *">
                <input
                  value={extraButtonForm.label}
                  onChange={(e) => setExtraButtonForm({ ...extraButtonForm, label: e.target.value })}
                  style={inputStyle}
                />
              </Field>
              <Field label="الرابط *">
                <input
                  value={extraButtonForm.url}
                  onChange={(e) => setExtraButtonForm({ ...extraButtonForm, url: e.target.value })}
                  placeholder="https://..."
                  style={inputStyle}
                />
              </Field>

              {saveError && <p className="text-[#C1502E] text-xs">{saveError}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium mt-2"
                style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
              >
                <Check size={15} />
                {extraButtonEditId ? "حفظ التعديل" : "إضافة"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Edit hero intro text modal */}
      {heroTextFormOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5 py-8 overflow-y-auto">
          <div
            className="w-full max-w-lg rounded-xl p-6"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-semibold">
                تعديل نص النبذة
              </h2>
              <button onClick={() => setHeroTextFormOpen(false)} className="text-[#8B93A7] hover:text-[#EAF0FF]">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={submitHeroText} className="space-y-3">
              <Field label="العنوان *">
                <input
                  value={heroTextForm.title}
                  onChange={(e) => setHeroTextForm({ ...heroTextForm, title: e.target.value })}
                  style={inputStyle}
                />
              </Field>
              <Field label="النص (اترك سطر فارغ بين كل فقرة والثانية)">
                <textarea
                  value={heroTextForm.body}
                  onChange={(e) => setHeroTextForm({ ...heroTextForm, body: e.target.value })}
                  rows={10}
                  style={inputStyle}
                />
              </Field>

              {saveError && <p className="text-[#C1502E] text-xs">{saveError}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium mt-2"
                style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
              >
                <Check size={15} />
                حفظ التعديل
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Issue certificate modal */}
      {certFormOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5 py-8 overflow-y-auto">
          <div
            className="w-full max-w-md rounded-xl p-6"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-semibold">
                إصدار شهادة جديدة
              </h2>
              <button onClick={() => setCertFormOpen(false)} className="text-[#8B93A7] hover:text-[#EAF0FF]">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={submitCertificate} className="space-y-3">
              <Field label="اسم المشارك *">
                <input
                  value={certForm.name}
                  onChange={(e) => setCertForm({ ...certForm, name: e.target.value })}
                  style={inputStyle}
                />
              </Field>
              <Field label="الرقم التسلسلي *">
                <input
                  value={certForm.serial}
                  onChange={(e) => setCertForm({ ...certForm, serial: e.target.value })}
                  style={inputStyle}
                />
              </Field>

              {saveError && <p className="text-[#C1502E] text-xs">{saveError}</p>}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium mt-2"
                style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
              >
                <Check size={15} />
                إصدار الشهادة وتوليد QR
              </button>
            </form>
          </div>
        </div>
      )}

      {/* QR code display modal */}
      {certQrFor && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5 py-8 overflow-y-auto">
          <div
            className="w-full max-w-sm rounded-xl p-6 flex flex-col items-center text-center"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            <div className="flex items-center justify-between w-full mb-4">
              <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-semibold">
                رمز QR للشهادة
              </h2>
              <button onClick={() => setCertQrFor(null)} className="text-[#8B93A7] hover:text-[#EAF0FF]">
                <X size={18} />
              </button>
            </div>
            <div className="text-sm font-semibold mb-1">{certQrFor.name}</div>
            <div
              style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              className="text-xs text-[#8B93A7] mb-4"
            >
              {certQrFor.serial}
            </div>
            <img
              src={certQrImage(certQrFor.serial)}
              alt="QR"
              className="w-56 h-56 rounded-lg bg-white p-2"
              style={{ border: "1px solid #2A3B5C" }}
            />
            <p className="text-[11px] text-[#8B93A7] mt-4 leading-relaxed">
              اضغط مطولًا على الصورة واحفظها، وألصقها على الشهادة الورقية. أي شخص يمسحها يوصله لصفحة توثيق تلقائية بهذا الاسم والرقم.
            </p>
          </div>
        </div>
      )}

      {/* Public certificate verification popup */}
      {verifiedCert && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-5">
          <div
            className="w-full max-w-sm rounded-xl p-7 text-center"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
          >
            {verifiedCert.status === "found" ? (
              <>
                <div className="text-3xl mb-3">✅</div>
                <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-bold mb-4">
                  شهادة موثقة رسميًا
                </h2>
                <p className="text-xs text-[#8B93A7] mb-1">اسم المشارك:</p>
                <p className="text-base font-semibold mb-4" style={{ color: "#B8791A" }}>
                  {verifiedCert.cert.name}
                </p>
                <p className="text-xs text-[#8B93A7] mb-1">رقم التسلسل:</p>
                <p style={{ fontFamily: "'IBM Plex Mono', monospace" }} className="text-sm font-bold mb-5">
                  {verifiedCert.cert.serial}
                </p>
              </>
            ) : (
              <>
                <div className="text-3xl mb-3">⚠️</div>
                <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-lg font-bold mb-2">
                  لا توجد شهادة بهذا الرقم
                </h2>
                <p className="text-xs text-[#8B93A7] mb-5">تأكد من الرمز أو تواصل مع منصة نَبض.</p>
              </>
            )}
            <button
              onClick={() => setVerifiedCert(null)}
              className="w-full py-2.5 rounded-lg text-sm font-medium"
              style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
            >
              إغلاق
            </button>
          </div>
        </div>
      )}

      <footer className="border-t border-[#2A3B5C] py-6 text-center text-[10px] text-[#6B7590]">
        <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>منصة نَبض — {new Date().getFullYear()}</span>
      </footer>
      </div>
    </div>
  );
}

function LinkSection({
  id,
  title,
  items,
  type,
  isAdmin,
  onAdd,
  onEdit,
  onDelete,
  onMove,
  confirmDelete,
  onConfirmDelete,
  onCancelDelete,
  onAddRoot,
  onNodeEdit,
  onNodeAddLinkNow,
  onNodeAddChild,
  onNodeDelete,
  onNodeMove,
}) {
  if (type === "content") {
    return (
      <section id={id} className="max-w-5xl mx-auto px-5 pb-4 pt-10 scroll-mt-20">
        <div className="flex items-center justify-between mb-5">
          <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-xl font-semibold">
            {title}
          </h2>
          {isAdmin && (
            <button
              onClick={onAddRoot}
              className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg font-medium"
              style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
            >
              <Plus size={14} />
              إضافة عنصر
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="border border-dashed border-[#28324D] rounded-xl p-8 text-center text-[#8B93A7] text-sm">
            لا يوجد محتوى بعد.
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {items.map((item, idx) => (
              <div
                key={item.id}
                style={{ animation: `navFloat ${3.6 + (idx % 4) * 0.4}s ease-in-out infinite ${(idx % 4) * 0.25}s` }}
              >
                <LessonNode
                  node={item}
                  isAdmin={isAdmin}
                  onEdit={onNodeEdit}
                  onAddLinkNow={onNodeAddLinkNow}
                  onAddChild={onNodeAddChild}
                  onDelete={onNodeDelete}
                  onMove={onNodeMove}
                  accentColor={CONTENT_ACCENT_PALETTE[idx % CONTENT_ACCENT_PALETTE.length]}
                  topLevel
                />
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }

  // Flat list (social)
  return (
    <section id={id} className="max-w-5xl mx-auto px-5 pb-4 pt-10 scroll-mt-20">
      <div className="flex items-center justify-between mb-5">
        <h2 style={{ fontFamily: "'El Messiri', serif" }} className="text-xl font-semibold">
          {title}
        </h2>
        {isAdmin && (
          <button
            onClick={onAdd}
            className="flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg font-medium"
            style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
          >
            <Plus size={14} />
            إضافة
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="border border-dashed border-[#28324D] rounded-xl p-8 text-center text-[#8B93A7] text-sm">
          لا توجد روابط بعد.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-start">
          {items.map((item, idx) => {
            const isConfirming =
              confirmDelete && confirmDelete.type === type && confirmDelete.id === item.id;
            const meta = PLATFORM_META[item.platform] || PLATFORM_META.other;
            const Icon = meta.icon;
            return (
              <div
                key={item.id}
                style={{ animation: `navFloat ${3.6 + (idx % 4) * 0.4}s ease-in-out infinite ${(idx % 4) * 0.25}s` }}
              >
              <div
                className="rounded-xl p-4 flex flex-col gap-3"
                style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C" }}
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: meta.color }}
                  >
                    <Icon size={18} color="#FAF7F0" />
                  </div>
                  <span className="text-sm font-medium flex-1">{item.title}</span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#8B93A7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                {isAdmin && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => onMove(item.id, -1)}
                      title="تحريك لأعلى"
                      className="w-8 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                    >
                      <ChevronUp size={13} />
                    </button>
                    <button
                      onClick={() => onMove(item.id, 1)}
                      title="تحريك لأسفل"
                      className="w-8 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                    >
                      <ChevronDown size={13} />
                    </button>
                    <button
                      onClick={() => onEdit(item)}
                      className="flex-1 flex items-center justify-center gap-1 text-[11px] py-1.5 rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
                    >
                      <Pencil size={11} /> تعديل
                    </button>
                    {isConfirming ? (
                      <button
                        onClick={() => onConfirmDelete(item.id)}
                        className="flex-1 flex items-center justify-center gap-1 text-[11px] py-1.5 rounded-md font-medium"
                        style={{ backgroundColor: "#C1502E", color: "#FAF7F0" }}
                      >
                        تأكيد الحذف؟
                      </button>
                    ) : (
                      <button
                        onClick={() => onDelete(item.id)}
                        className="flex-1 flex items-center justify-center gap-1 text-[11px] py-1.5 rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#C1502E] hover:border-[#C1502E]"
                      >
                        <Trash2 size={11} /> حذف
                      </button>
                    )}
                  </div>
                )}
              </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

function AdminNodeControls({ isAdmin, canAddChild, onEdit, onAddChild, onDelete, onMoveUp, onMoveDown }) {
  const [confirming, setConfirming] = useState(false);
  if (!isAdmin) return null;
  return (
    <div className="flex items-center gap-1 shrink-0" onClick={(e) => e.stopPropagation()}>
      {onMoveUp && (
        <button
          onClick={onMoveUp}
          title="تحريك لأعلى"
          className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
        >
          <ChevronUp size={12} />
        </button>
      )}
      {onMoveDown && (
        <button
          onClick={onMoveDown}
          title="تحريك لأسفل"
          className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
        >
          <ChevronDown size={12} />
        </button>
      )}
      {canAddChild && (
        <button
          onClick={onAddChild}
          title="إضافة عنصر فرعي"
          className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
        >
          <Plus size={12} />
        </button>
      )}
      <button
        onClick={onEdit}
        title="تعديل"
        className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#EAF0FF] hover:border-[#E8A33D]"
      >
        <Pencil size={12} />
      </button>
      {confirming ? (
        <button
          onClick={onDelete}
          title="تأكيد الحذف"
          className="px-1.5 h-6 flex items-center justify-center rounded-md text-[10px] font-medium"
          style={{ backgroundColor: "#C1502E", color: "#FAF7F0" }}
        >
          تأكيد؟
        </button>
      ) : (
        <button
          onClick={() => setConfirming(true)}
          title="حذف"
          className="w-6 h-6 flex items-center justify-center rounded-md border border-[#28324D] text-[#8B93A7] hover:text-[#C1502E] hover:border-[#C1502E]"
        >
          <Trash2 size={12} />
        </button>
      )}
    </div>
  );
}

function LessonNode({ node, isAdmin, onEdit, onAddLinkNow, onAddChild, onDelete, onMove, topLevel, accentColor }) {
  const [open, setOpen] = useState(false);
  const kids = node.children || node.lessons || [];
  const accent = accentColor || "#2F6F62";
  const wrapperClass = topLevel
    ? "rounded-xl p-4"
    : "rounded-lg";
  const wrapperStyle = topLevel
    ? { backgroundColor: "#101830", border: "1px solid #2A3B5C", borderTop: `2px solid ${accent}` }
    : {};

  const moveProps = onMove
    ? { onMoveUp: () => onMove(node.id, -1), onMoveDown: () => onMove(node.id, 1) }
    : {};

  if (kids.length > 0) {
    return (
      <div className={topLevel ? wrapperClass : "flex flex-col gap-2"} style={wrapperStyle}>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-right flex-1"
            style={topLevel ? {} : { backgroundColor: "#0B1220", border: "1px solid #2A3B5C" }}
          >
            {topLevel ? (
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: accent }}
              >
                <Layers size={17} color="#FAF7F0" />
              </div>
            ) : (
              <BookOpen size={15} style={{ color: "#2F6F62" }} />
            )}
            <span className="flex-1 font-medium text-right">{node.title}</span>
            <ChevronDown
              size={14}
              className="text-[#8B93A7] transition-transform"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
          <AdminNodeControls
            isAdmin={isAdmin}
            canAddChild
            onEdit={() => onEdit(node)}
            onAddChild={() => onAddChild(node.id)}
            onDelete={() => onDelete(node.id)}
            {...moveProps}
          />
        </div>
        {open && (
          <div className="flex flex-col gap-2 pr-3 mr-1 pt-1 border-r-2" style={{ borderColor: "#2A3B5C" }}>
            {kids.length === 0 ? (
              <p className="text-xs text-[#6B7590] px-2">لا توجد عناصر فرعية بعد.</p>
            ) : (
              kids.map((child) => (
                <LessonNode
                  key={child.id}
                  node={child}
                  isAdmin={isAdmin}
                  onEdit={onEdit}
                  onAddLinkNow={onAddLinkNow}
                  onAddChild={onAddChild}
                  onDelete={onDelete}
                  onMove={onMove}
                />
              ))
            )}
          </div>
        )}
      </div>
    );
  }

  const hasNote = typeof node.note === "string" && node.note.trim().length > 0;
  const isPending = !hasNote && !node.url;

  if (hasNote) {
    return (
      <div className={topLevel ? wrapperClass : "flex flex-col gap-2"} style={wrapperStyle}>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-right flex-1"
            style={topLevel ? {} : { backgroundColor: "#0B1220", border: "1px solid #2A3B5C" }}
          >
            <FileText size={15} style={{ color: "#E8A33D" }} />
            <span className="flex-1 font-medium text-right">{node.title}</span>
            <ChevronDown
              size={14}
              className="text-[#8B93A7] transition-transform"
              style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
          <AdminNodeControls
            isAdmin={isAdmin}
            canAddChild={false}
            onEdit={() => onEdit(node)}
            onAddChild={() => {}}
            onDelete={() => onDelete(node.id)}
            {...moveProps}
          />
        </div>
        {open && (
          <div
            className="px-3 py-2.5 rounded-lg text-xs leading-relaxed mr-1"
            style={{ backgroundColor: "#101830", border: "1px solid #2A3B5C", whiteSpace: "pre-line" }}
          >
            {node.note}
          </div>
        )}
      </div>
    );
  }

  if (isPending) {
    return (
      <div className={topLevel ? wrapperClass : "flex items-center gap-2"} style={wrapperStyle}>
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm flex-1"
          style={topLevel ? {} : { backgroundColor: "#0C1322", border: "1px dashed #28324D", color: "#6B7590" }}
        >
          <Clock size={15} />
          <span className="flex-1">{node.title}</span>
          <span className="text-[10px]">{node.pendingLabel || "قريبًا"}</span>
        </div>
        {isAdmin && onAddLinkNow && (
          <button
            onClick={() => onAddLinkNow(node)}
            className="flex items-center gap-1 text-[11px] px-2.5 h-7 rounded-md font-medium shrink-0"
            style={{ backgroundColor: "#E8A33D", color: "#14181F" }}
          >
            <Link2 size={12} />
            أضف الرابط
          </button>
        )}
        <AdminNodeControls
          isAdmin={isAdmin}
          canAddChild={false}
          onEdit={() => onEdit(node)}
          onAddChild={() => {}}
          onDelete={() => onDelete(node.id)}
          {...moveProps}
        />
      </div>
    );
  }

  return (
    <div className={topLevel ? wrapperClass : "flex items-center gap-2"} style={wrapperStyle}>
      <a
        href={node.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-3 py-2 rounded-lg text-sm flex-1"
        style={topLevel ? {} : { backgroundColor: "#0B1220", border: "1px solid #2A3B5C" }}
      >
        <PlayCircle size={15} style={{ color: "#2F6F62" }} />
        <span className="flex-1">{node.title}</span>
        <ArrowUpRight
          size={14}
          className="text-[#8B93A7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
      <AdminNodeControls
        isAdmin={isAdmin}
        canAddChild={false}
        onEdit={() => onEdit(node)}
        onAddChild={() => {}}
        onDelete={() => onDelete(node.id)}
        {...moveProps}
      />
    </div>
  );
}

function MascotGuide({ currentView }) {
  const eyesRefBox = useState(() => ({ current: null }))[0];

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollableHeight = doc.scrollHeight - doc.clientHeight;
      const progress = scrollableHeight > 0 ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1) : 0;
      const tilt = progress * 22;
      if (eyesRefBox.current) {
        eyesRefBox.current.setAttribute("transform", `rotate(${tilt} 50 34)`);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ARM_ANGLE = {
    home: -15,
    social: -50,
    workshops: 0,
    content: 40,
    heroesList: -35,
    heroProfile: -35,
    certificates: 55,
  };
  const armAngle = ARM_ANGLE[currentView] != null ? ARM_ANGLE[currentView] : -15;

  return (
    <div
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 pointer-events-none"
      style={{ zIndex: 40, animation: "navFloat 5s ease-in-out infinite" }}
      aria-hidden="true"
    >
      <svg width="72" height="88" viewBox="0 0 100 122" fill="none">
        <line x1="38" y1="100" x2="34" y2="118" stroke="#8B93A7" strokeWidth="6" strokeLinecap="round" />
        <line x1="62" y1="100" x2="66" y2="118" stroke="#8B93A7" strokeWidth="6" strokeLinecap="round" />
        <rect x="26" y="55" width="48" height="50" rx="18" fill="#101830" stroke="#E8A33D" strokeWidth="2.5" />
        <path
          d="M42 78 L48 78 L52 70 L56 84 L60 78 L66 78"
          stroke="#B23A2E"
          strokeWidth="2.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="26" y1="65" x2="12" y2="78" stroke="#8B93A7" strokeWidth="6" strokeLinecap="round" />
        <g style={{ transform: `rotate(${armAngle}deg)`, transformOrigin: "74px 65px", transition: "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)" }}>
          <line x1="74" y1="65" x2="94" y2="55" stroke="#E8A33D" strokeWidth="6" strokeLinecap="round" />
          <circle cx="96" cy="53" r="5" fill="#E8A33D" />
        </g>
        <circle cx="50" cy="34" r="26" fill="#101830" stroke="#E8A33D" strokeWidth="2.5" />
        <line x1="50" y1="8" x2="50" y2="0" stroke="#8B93A7" strokeWidth="3" strokeLinecap="round" />
        <circle cx="50" cy="0" r="3.5" fill="#2FE0AE" />
        <g ref={(el) => (eyesRefBox.current = el)}>
          <circle cx="40" cy="34" r="5.5" fill="#EAF0FF" />
          <circle cx="60" cy="34" r="5.5" fill="#EAF0FF" />
          <circle cx="41" cy="35" r="2.2" fill="#2554A8" />
          <circle cx="61" cy="35" r="2.2" fill="#2554A8" />
        </g>
        <path d="M42 44 Q50 49 58 44" stroke="#8B93A7" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ProstheticHandSVG({ size = 160, color = "#B8791A", opacity = 0.1, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity }}
      className={className}
    >
      {/* wrist / forearm */}
      <rect x="86" y="140" width="30" height="46" rx="6" />
      <line x1="86" y1="152" x2="116" y2="152" />
      <line x1="86" y1="164" x2="116" y2="164" />
      {/* palm */}
      <rect x="66" y="96" width="70" height="50" rx="14" />
      {/* thumb */}
      <path d="M66 118 C46 112, 40 96, 52 84 C60 76, 72 78, 74 90" />
      <circle cx="52" cy="84" r="4" />
      {/* fingers */}
      <rect x="70" y="52" width="14" height="46" rx="7" />
      <circle cx="77" cy="76" r="2.5" />
      <rect x="88" y="42" width="14" height="56" rx="7" />
      <circle cx="95" cy="70" r="2.5" />
      <rect x="106" y="46" width="14" height="52" rx="7" />
      <circle cx="113" cy="72" r="2.5" />
      <rect x="122" y="56" width="14" height="42" rx="7" />
      <circle cx="129" cy="78" r="2.5" />
    </svg>
  );
}

function ProstheticLegSVG({ size = 180, color = "#1F7A5C", opacity = 0.1, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 240"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity }}
      className={className}
    >
      {/* socket (upper cuff) */}
      <path d="M56 12 C50 12, 46 18, 46 30 L46 58 C46 66, 52 70, 58 70 L86 70 C92 70, 98 66, 98 58 L98 30 C98 18, 94 12, 88 12 Z" />
      <line x1="50" y1="30" x2="94" y2="30" />
      <line x1="50" y1="46" x2="94" y2="46" />
      {/* knee joint */}
      <circle cx="72" cy="82" r="10" />
      {/* pylon (shin tube) */}
      <line x1="72" y1="92" x2="72" y2="176" />
      <rect x="64" y="92" width="16" height="20" rx="4" />
      {/* ankle joint */}
      <circle cx="72" cy="182" r="7" />
      {/* running-blade style foot */}
      <path d="M72 189 C70 205, 55 218, 30 224 C60 230, 96 220, 100 196 C102 186, 90 180, 72 189 Z" />
    </svg>
  );
}

function DnaHelixSVG({ size = 150, color = "#6D4FA8", opacity = 0.1, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 200"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      style={{ opacity }}
      className={className}
    >
      <path d="M20 10 C20 40, 80 40, 80 70 C80 100, 20 100, 20 130 C20 160, 80 160, 80 190" />
      <path d="M80 10 C80 40, 20 40, 20 70 C20 100, 80 100, 80 130 C80 160, 20 160, 20 190" />
      <line x1="26" y1="22" x2="74" y2="22" />
      <line x1="30" y1="40" x2="70" y2="40" />
      <line x1="26" y1="58" x2="74" y2="58" />
      <line x1="26" y1="82" x2="74" y2="82" />
      <line x1="30" y1="100" x2="70" y2="100" />
      <line x1="26" y1="118" x2="74" y2="118" />
      <line x1="26" y1="142" x2="74" y2="142" />
      <line x1="30" y1="160" x2="70" y2="160" />
      <line x1="26" y1="178" x2="74" y2="178" />
    </svg>
  );
}

function HeartPulseSVG({ size = 150, color = "#B23A2E", opacity = 0.1, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 140"
      fill="none"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity }}
      className={className}
    >
      <path d="M70 30 C55 12, 25 18, 20 42 C15 68, 45 90, 70 108 C95 90, 125 68, 120 42 C115 18, 85 12, 70 30 Z" />
      <path d="M0 70 L35 70 L48 40 L62 100 L75 55 L85 70 L200 70" />
    </svg>
  );
}

const VIEW_NEBULA = {
  home: { a: "184,121,26", b: "31,122,92" },
  social: { a: "178,58,46", b: "184,121,26" },
  workshops: { a: "31,122,92", b: "37,84,168" },
  content: { a: "109,79,168", b: "184,121,26" },
  heroesList: { a: "184,121,26", b: "178,58,46" },
  heroProfile: { a: "184,121,26", b: "178,58,46" },
  certificates: { a: "37,84,168", b: "109,79,168" },
};

function CosmicBackground({ currentView }) {
  const canvasRefBox = useState(() => ({ current: null }))[0];
  const starsRef = useState(() => ({ current: [] }))[0];
  const mouseRef = useState(() => ({ x: 0, y: 0 }))[0];
  const nebula = VIEW_NEBULA[currentView] || VIEW_NEBULA.home;

  useEffect(() => {
    const canvas = canvasRefBox.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * Math.min(window.devicePixelRatio || 1, 2);
      canvas.height = h * Math.min(window.devicePixelRatio || 1, 2);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(Math.min(window.devicePixelRatio || 1, 2), 0, 0, Math.min(window.devicePixelRatio || 1, 2), 0, 0);

      const starCount = w < 640 ? 90 : 160;
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        depth: 0.25 + Math.random() * 0.9,
        r: 0.5 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.35,
      }));
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const animate = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      starsRef.current.forEach((s) => {
        const twinkle = 0.45 + 0.55 * Math.abs(Math.sin(t * s.speed + s.phase));
        const px = s.x + mouseRef.x * s.depth * 22 + Math.sin(t * 0.05 + s.phase) * s.depth * 6;
        const py = s.y + mouseRef.y * s.depth * 22 + Math.cos(t * 0.04 + s.phase) * s.depth * 6;
        ctx.beginPath();
        ctx.arc(((px % w) + w) % w, ((py % h) + h) % h, s.r * (0.6 + s.depth * 0.6), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${twinkle * (0.35 + s.depth * 0.5)})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const handlePointer = (clientX, clientY) => {
      mouseRef.x = (clientX / w - 0.5) * 2;
      mouseRef.y = (clientY / h - 0.5) * 2;
    };
    const onMouseMove = (e) => handlePointer(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) handlePointer(e.touches[0].clientX, e.touches[0].clientY);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0, backgroundColor: "#020306" }}
        src="https://videos.pexels.com/video-files/4121322/4121322-uhd_2560_1440_25fps.mp4"
      />
      <div
        className="fixed inset-0 pointer-events-none transition-[background] duration-1000"
        style={{
          zIndex: 1,
          background:
            `radial-gradient(ellipse 1000px 700px at 50% -10%, rgba(184,121,26,0.10) 0%, transparent 60%),` +
            `radial-gradient(ellipse 900px 600px at 20% 15%, rgba(${nebula.a},0.16) 0%, transparent 60%),` +
            `radial-gradient(ellipse 800px 700px at 85% 75%, rgba(${nebula.b},0.14) 0%, transparent 60%),` +
            `radial-gradient(ellipse at top, rgba(10,14,26,0.72) 0%, rgba(4,6,12,0.82) 55%, rgba(2,3,6,0.9) 100%)`,
        }}
      />
      <canvas ref={(el) => (canvasRefBox.current = el)} className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }} />
    </>
  );
}

function InteractiveHeroBackground() {
  const containerRef = useState(() => ({ current: null }))[0];
  const layerRefs = useState(() => [
    { current: null, depth: 26, phase: 0, orbit: 10 },
    { current: null, depth: -34, phase: 2.1, orbit: 14 },
    { current: null, depth: 18, phase: 4.2, orbit: 8 },
    { current: null, depth: -14, phase: 1.3, orbit: 12 },
    { current: null, depth: 22, phase: 3.4, orbit: 9 },
  ])[0];
  const mouseRef = useState(() => ({ x: 0, y: 0 }))[0];

  useEffect(() => {
    let raf;
    let t = 0;
    const animate = () => {
      t += 0.012;
      layerRefs.forEach((layer) => {
        if (!layer.current) return;
        const floatX = Math.sin(t + layer.phase) * layer.orbit;
        const floatY = Math.cos(t * 0.8 + layer.phase) * layer.orbit;
        const mx = mouseRef.x * layer.depth;
        const my = mouseRef.y * layer.depth;
        layer.current.style.transform = `translate(${floatX + mx}px, ${floatY + my}px)`;
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const handlePointer = (clientX, clientY) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.x = ((clientX - rect.left) / rect.width - 0.5) * 2;
      mouseRef.y = ((clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onMouseMove = (e) => handlePointer(e.clientX, e.clientY);
    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) handlePointer(e.touches[0].clientX, e.touches[0].clientY);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={(el) => (containerRef.current = el)} className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {/* soft glow orbs for depth */}
      <div
        ref={(el) => (layerRefs[0].current = el)}
        className="absolute rounded-full"
        style={{
          width: 260,
          height: 260,
          left: "6%",
          top: "4%",
          background: "radial-gradient(circle, rgba(184,121,26,0.20) 0%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />
      <div
        ref={(el) => (layerRefs[1].current = el)}
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          right: "4%",
          top: "10%",
          background: "radial-gradient(circle, rgba(31,122,92,0.16) 0%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />
      <div
        ref={(el) => (layerRefs[2].current = el)}
        className="absolute rounded-full"
        style={{
          width: 220,
          height: 220,
          left: "35%",
          bottom: "0%",
          background: "radial-gradient(circle, rgba(178,58,46,0.14) 0%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />

      <div ref={(el) => (layerRefs[3].current = el)}>
        <ProstheticHandSVG
          className="absolute -left-6 top-4 sm:left-2 sm:top-8 rotate-[-8deg]"
          size={190}
          color="#B8791A"
          opacity={0.13}
        />
      </div>
      <div ref={(el) => (layerRefs[4].current = el)}>
        <ProstheticLegSVG
          className="absolute -right-4 bottom-0 sm:right-4 sm:bottom-2 rotate-[6deg]"
          size={210}
          color="#1F7A5C"
          opacity={0.13}
        />
      </div>
    </div>
  );
}

function CountUpNumber({ value }) {
  const [display, setDisplay] = useState(0);
  const match = String(value).match(/^([\d,]+)(.*)$/);
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!target || isNaN(target)) {
      setDisplay(0);
      return;
    }
    let frame;
    let start = null;
    const duration = 1600;
    function step(ts) {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setDisplay(target);
      }
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  if (!target || isNaN(target)) return <>{value}</>;
  return (
    <>
      {display.toLocaleString("en-US")}
      {suffix}
    </>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-xs text-[#8B93A7] mb-1">{label}</label>
      {children}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  backgroundColor: "#0B1220",
  border: "1px solid #28324D",
  color: "#EAF0FF",
  borderRadius: "0.5rem",
  padding: "0.55rem 0.75rem",
  fontSize: "0.875rem",
  outline: "none",
};
