import Img from "@/components/ui/Img";
import type { Locale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";

type Post = {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  href: string;
  image: string;
};

const placeholderImg = (n: number) =>
  `https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-${n}.svg`;

const posts: Record<Locale, Post[]> = {
  en: [
    {
      id: "post-1",
      title: "The Future of Web Development: What's Next in 2024",
      summary:
        "Explore the latest trends in web development, from AI-powered tools to new frameworks that are reshaping how we build the web.",
      label: "Web Development",
      author: "Sarah Chen",
      published: "15 Jan 2024",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "Building Scalable APIs with Modern Architecture Patterns",
      summary:
        "Learn about microservices, GraphQL, and event-driven architectures powering today's most successful applications.",
      label: "Backend",
      author: "Marcus Rodriguez",
      published: "12 Jan 2024",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "Design Systems: Creating Consistency at Scale",
      summary:
        "How leading companies implement design systems to maintain visual consistency while enabling rapid development.",
      label: "Design",
      author: "Emma Thompson",
      published: "10 Jan 2024",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "Machine Learning in Production: Best Practices",
      summary:
        "From model versioning to monitoring and scaling: essential practices for deploying ML models in production.",
      label: "Machine Learning",
      author: "Alex Kim",
      published: "8 Jan 2024",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
  fr: [
    {
      id: "post-1",
      title: "L'avenir du développement web : tendances 2024",
      summary:
        "Découvrez les dernières tendances : outils IA, nouveaux frameworks et ce que les développeurs doivent savoir.",
      label: "Développement web",
      author: "Marie Dubois",
      published: "15 janv. 2024",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "APIs scalables et architectures modernes",
      summary:
        "Microservices, GraphQL et architectures événementielles au service des applications d'aujourd'hui.",
      label: "Backend",
      author: "Pierre Martin",
      published: "12 janv. 2024",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "Design systems : cohérence à grande échelle",
      summary:
        "Comment les grandes entreprises déploient des design systems pour une cohérence visuelle et une innovation rapide.",
      label: "Design",
      author: "Sophie Bernard",
      published: "10 janv. 2024",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "Machine learning en production : bonnes pratiques",
      summary:
        "Versioning des modèles, monitoring et mise à l'échelle pour déployer le ML en production.",
      label: "Machine Learning",
      author: "Lucas Petit",
      published: "8 janv. 2024",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
  de: [
    {
      id: "post-1",
      title: "Die Zukunft der Webentwicklung 2024",
      summary:
        "Neueste Trends: KI-Tools, neue Frameworks und was Entwickler wissen müssen, um vorne dabei zu sein.",
      label: "Webentwicklung",
      author: "Anna Schmidt",
      published: "15. Jan. 2024",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "Skalierbare APIs mit modernen Architekturmustern",
      summary:
        "Microservices, GraphQL und ereignisgesteuerte Architekturen für erfolgreiche Anwendungen.",
      label: "Backend",
      author: "Thomas Müller",
      published: "12. Jan. 2024",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "Design Systems: Konsistenz im großen Maßstab",
      summary:
        "Wie führende Unternehmen Design Systems für visuelle Einheit und schnelle Entwicklung nutzen.",
      label: "Design",
      author: "Laura Weber",
      published: "10. Jan. 2024",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "Machine Learning in Produktion: Best Practices",
      summary:
        "Von Modellversionierung bis Monitoring – bewährte Praktiken für den Einsatz von ML in Produktion.",
      label: "Machine Learning",
      author: "Michael Becker",
      published: "8. Jan. 2024",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
  es: [
    {
      id: "post-1",
      title: "El futuro del desarrollo web en 2024",
      summary:
        "Tendencias actuales: herramientas con IA, nuevos frameworks y lo que los desarrolladores deben saber.",
      label: "Desarrollo web",
      author: "Carlos García",
      published: "15 ene 2024",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "APIs escalables con patrones de arquitectura modernos",
      summary:
        "Microservicios, GraphQL y arquitecturas dirigidas por eventos que impulsan las mejores aplicaciones.",
      label: "Backend",
      author: "Elena Martínez",
      published: "12 ene 2024",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "Design systems: consistencia a escala",
      summary:
        "Cómo las empresas líderes implementan design systems para mantener coherencia visual e innovación.",
      label: "Diseño",
      author: "Miguel López",
      published: "10 ene 2024",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "Machine Learning en producción: mejores prácticas",
      summary:
        "Versionado de modelos, monitoreo y escalado para desplegar ML en entornos de producción.",
      label: "Machine Learning",
      author: "Isabel Sánchez",
      published: "8 ene 2024",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
  hi: [
    {
      id: "post-1",
      title: "2024 में वेब डेवलपमेंट का भविष्य",
      summary:
        "AI टूल्स, नए फ्रेमवर्क और ताज़ा ट्रेंड्स – डेवलपर्स के लिए जानने योग्य बातें।",
      label: "वेब डेवलपमेंट",
      author: "प्रिया शर्मा",
      published: "15 जन 2024",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "आधुनिक आर्किटेक्चर के साथ स्केलेबल API",
      summary:
        "माइक्रोसर्विसेज, GraphQL और इवेंट-ड्रिवन आर्किटेक्चर पर व्यावहारिक जानकारी।",
      label: "बैकएंड",
      author: "राज कुमार",
      published: "12 जन 2024",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "डिज़ाइन सिस्टम: पैमाने पर एकरूपता",
      summary:
        "अग्रणी कंपनियां विज़ुअल कंसिस्टेंसी और तेज़ डेवलपमेंट के लिए डिज़ाइन सिस्टम कैसे अपनाती हैं।",
      label: "डिज़ाइन",
      author: "अनिता वर्मा",
      published: "10 जन 2024",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "प्रोडक्शन में मशीन लर्निंग: सर्वोत्तम प्रथाएं",
      summary:
        "मॉडल वर्ज़निंग से लेकर मॉनिटरिंग तक – प्रोडक्शन में ML तैनात करने के तरीके।",
      label: "मशीन लर्निंग",
      author: "विक्रम सिंह",
      published: "8 जन 2024",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
  it: [
    {
      id: "post-1",
      title: "Il futuro dello sviluppo web nel 2024",
      summary:
        "Ultime tendenze: strumenti con IA, nuovi framework e cosa devono sapere gli sviluppatori.",
      label: "Sviluppo web",
      author: "Giulia Rossi",
      published: "15 gen 2024",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "API scalabili con architetture moderne",
      summary:
        "Microservizi, GraphQL e architetture event-driven per applicazioni di successo.",
      label: "Backend",
      author: "Marco Bianchi",
      published: "12 gen 2024",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "Design system: coerenza su larga scala",
      summary:
        "Come le aziende leader implementano design system per consistenza visiva e sviluppo rapido.",
      label: "Design",
      author: "Francesca Romano",
      published: "10 gen 2024",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "Machine learning in produzione: best practice",
      summary:
        "Versioning dei modelli, monitoring e scaling per il deployment di ML in produzione.",
      label: "Machine Learning",
      author: "Alessandro Ferrari",
      published: "8 gen 2024",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
  ja: [
    {
      id: "post-1",
      title: "2024年ウェブ開発の未来",
      summary:
        "AIツール、新フレームワーク、開発者が知っておくべき最新トレンドを解説。",
      label: "ウェブ開発",
      author: "田中 美咲",
      published: "2024年1月15日",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "モダンアーキテクチャでスケーラブルなAPIを構築",
      summary:
        "マイクロサービス、GraphQL、イベント駆動型アーキテクチャの実践的な知見。",
      label: "バックエンド",
      author: "佐藤 健太",
      published: "2024年1月12日",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "デザインシステム：スケールでの一貫性",
      summary:
        "大手企業がデザインシステムで視覚的一貫性と迅速な開発を実現する方法。",
      label: "デザイン",
      author: "山田 花子",
      published: "2024年1月10日",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "本番環境での機械学習：ベストプラクティス",
      summary:
        "モデルバージョニングからモニタリングまで、ML本番デプロイの実践。",
      label: "機械学習",
      author: "鈴木 大輔",
      published: "2024年1月8日",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
  ms: [
    {
      id: "post-1",
      title: "Masa depan pembangunan web pada 2024",
      summary:
        "Trend terkini: alat berasaskan AI, rangka kerja baharu dan apa yang perlu diketahui oleh pembangun.",
      label: "Pembangunan web",
      author: "Siti Aminah",
      published: "15 Jan 2024",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "API skala dengan corak seni bina moden",
      summary:
        "Mikroperkhidmatan, GraphQL dan seni bina berasaskan peristiwa untuk aplikasi terkemuka.",
      label: "Backend",
      author: "Ahmad Rizal",
      published: "12 Jan 2024",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "Sistem reka bentuk: konsistensi pada skala",
      summary:
        "Bagaimana syarikat terkemuka melaksanakan sistem reka bentuk untuk konsistensi visual dan pembangunan pantas.",
      label: "Reka bentuk",
      author: "Nurul Izzati",
      published: "10 Jan 2024",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "Pembelajaran mesin dalam pengeluaran: amalan terbaik",
      summary:
        "Daripada pemversian model hingga pemantauan – amalan penting untuk menyebar ML dalam pengeluaran.",
      label: "Pembelajaran mesin",
      author: "Hafiz Rahman",
      published: "8 Jan 2024",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
  pt: [
    {
      id: "post-1",
      title: "O futuro do desenvolvimento web em 2024",
      summary:
        "Tendências atuais: ferramentas com IA, novos frameworks e o que os desenvolvedores precisam saber.",
      label: "Desenvolvimento web",
      author: "Ana Costa",
      published: "15 jan 2024",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "APIs escaláveis com arquiteturas modernas",
      summary:
        "Microserviços, GraphQL e arquiteturas orientadas a eventos que impulsionam as melhores aplicações.",
      label: "Backend",
      author: "Pedro Santos",
      published: "12 jan 2024",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "Design systems: consistência em escala",
      summary:
        "Como empresas líderes implementam design systems para manter coerência visual e inovação rápida.",
      label: "Design",
      author: "Mariana Oliveira",
      published: "10 jan 2024",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "Machine learning em produção: melhores práticas",
      summary:
        "Versionamento de modelos, monitoramento e escala para implantar ML em produção.",
      label: "Machine Learning",
      author: "Rafael Lima",
      published: "8 jan 2024",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
  ru: [
    {
      id: "post-1",
      title: "Будущее веб-разработки в 2024 году",
      summary:
        "Актуальные тренды: инструменты на ИИ, новые фреймворки и что нужно знать разработчикам.",
      label: "Веб-разработка",
      author: "Анна Козлова",
      published: "15 янв 2024",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "Масштабируемые API и современные архитектуры",
      summary:
        "Микросервисы, GraphQL и событийно-ориентированные архитектуры для успешных приложений.",
      label: "Бэкенд",
      author: "Дмитрий Волков",
      published: "12 янв 2024",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "Дизайн-системы: консистентность в масштабе",
      summary:
        "Как ведущие компании внедряют дизайн-системы для визуальной согласованности и быстрой разработки.",
      label: "Дизайн",
      author: "Елена Соколова",
      published: "10 янв 2024",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "Машинное обучение в продакшене: лучшие практики",
      summary:
        "Версионирование моделей, мониторинг и масштабирование при развёртывании ML в продакшене.",
      label: "Машинное обучение",
      author: "Игорь Новиков",
      published: "8 янв 2024",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
  tr: [
    {
      id: "post-1",
      title: "2024'te web geliştirmenin geleceği",
      summary:
        "Güncel trendler: yapay zeka araçları, yeni framework'ler ve geliştiricilerin bilmesi gerekenler.",
      label: "Web geliştirme",
      author: "Elif Yılmaz",
      published: "15 Oca 2024",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "Modern mimari ile ölçeklenebilir API'ler",
      summary:
        "Mikroservisler, GraphQL ve olay güdümlü mimarilerle güçlü uygulamalar.",
      label: "Backend",
      author: "Can Öztürk",
      published: "12 Oca 2024",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "Tasarım sistemleri: ölçekte tutarlılık",
      summary:
        "Lider şirketler görsel tutarlılık ve hızlı geliştirme için tasarım sistemlerini nasıl uyguluyor.",
      label: "Tasarım",
      author: "Zeynep Kaya",
      published: "10 Oca 2024",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "Üretimde makine öğrenimi: en iyi uygulamalar",
      summary:
        "Model sürümlemeden izlemeye – ML'i üretimde konuşlandırmanın temel pratikleri.",
      label: "Makine öğrenimi",
      author: "Emre Demir",
      published: "8 Oca 2024",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
  zh: [
    {
      id: "post-1",
      title: "2024年Web开发的未来",
      summary: "最新趋势：AI工具、新框架以及开发者需要了解的内容。",
      label: "Web开发",
      author: "陈明",
      published: "2024年1月15日",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "用现代架构构建可扩展的API",
      summary: "微服务、GraphQL与事件驱动架构为当今成功应用提供动力。",
      label: "后端",
      author: "王芳",
      published: "2024年1月12日",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "设计系统：规模化的一致性",
      summary: "领先企业如何通过设计系统保持视觉一致性并加速创新。",
      label: "设计",
      author: "李静",
      published: "2024年1月10日",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "生产环境中的机器学习：最佳实践",
      summary: "从模型版本管理到监控与扩展，ML生产部署的必备实践。",
      label: "机器学习",
      author: "张伟",
      published: "2024年1月8日",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
  ar: [
    {
      id: "post-1",
      title: "مستقبل تطوير الويب في 2024",
      summary:
        "أحدث الاتجاهات: أدوات الذكاء الاصطناعي، أطر عمل جديدة وما يحتاج المطورون لمعرفته.",
      label: "تطوير الويب",
      author: "سارة أحمد",
      published: "١٥ يناير ٢٠٢٤",
      href: "/blogs/demo",
      image: placeholderImg(1),
    },
    {
      id: "post-2",
      title: "واجهات API قابلة للتوسع مع هندسة حديثة",
      summary:
        "المايكروسيرفس، GraphQL والهندسة المعتمدة على الأحداث لتطبيقات ناجحة.",
      label: "الخلفية",
      author: "خالد العمري",
      published: "١٢ يناير ٢٠٢٤",
      href: "/blogs/demo",
      image: placeholderImg(2),
    },
    {
      id: "post-3",
      title: "أنظمة التصميم: الاتساق على نطاق واسع",
      summary:
        "كيف تنفذ الشركات الرائدة أنظمة تصميم للاتساق البصري والتطوير السريع.",
      label: "التصميم",
      author: "نورا حسن",
      published: "١٠ يناير ٢٠٢٤",
      href: "/blogs/demo",
      image: placeholderImg(3),
    },
    {
      id: "post-4",
      title: "التعلم الآلي في الإنتاج: أفضل الممارسات",
      summary:
        "من إصدارات النماذج إلى المراقبة والتوسع – ممارسات أساسية لنشر ML في الإنتاج.",
      label: "التعلم الآلي",
      author: "عمر علي",
      published: "٨ يناير ٢٠٢٤",
      href: "/blogs/demo",
      image: placeholderImg(4),
    },
  ],
};

type BlogsSectionProps = {
  className?: string;
};

export async function BlogsSection({ className }: BlogsSectionProps) {
  const t = await getTranslations("app./blogs.components.BlogsSection");
  const currentLocale = await getLocale();
  const currentPosts = posts[currentLocale as Locale];

  return (
    <section className={className}>
      <div className="mb-8 md:mb-14 lg:mb-16">
        <h1 className="mb-4 w-full text-4xl font-medium md:mb-5 md:text-5xl lg:mb-6 lg:text-6xl">
          {t("title")}
        </h1>
        <p>{t("description")}</p>
      </div>

      <div className="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:gap-x-6 lg:gap-y-12 2xl:grid-cols-3">
        {currentPosts.map((post) => (
          <a key={post.id} href={post.href} className="group flex flex-col">
            <div className="mb-4 flex overflow-clip rounded-xl md:mb-5">
              <div className="relative aspect-3/2 h-full w-full transition-opacity duration-300 group-hover:opacity-80">
                <Img
                  fill
                  sizes="30dvw"
                  src="/example.svg"
                  alt={post.title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">{post.author}</span>
              <span>{"•"}</span>
              <span>{post.published}</span>
            </div>
            <h2 className="mb-2 line-clamp-3 text-lg font-medium wrap-break-word md:mb-3 md:text-2xl">
              {post.title}
            </h2>
            <div className="line-clamp-2 text-sm text-muted-foreground md:text-base">
              {post.summary}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
