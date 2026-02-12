import Img from "@/components/ui/Img";
import { cn } from "@/lib/utils";
import type { Locale } from "next-intl";
import { getLocale } from "next-intl/server";

type BlogDemo = {
  title: string;
  authorName: string;
  image: string;
  pubDate: Date;
  description: string;
  authorImage: string;
  html: string;
};

const blog: Record<Locale, BlogDemo> = {
  en: {
    title: "Designing websites faster with shadcn/ui",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description:
      "A step-by-step guide to building a modern, responsive blog using React and Tailwind CSS.",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article>
  <header>
    <h1>Designing websites faster with shadcn/ui</h1>
    <p>
      <strong>Author:</strong> John Doe ·
      <strong>Published:</strong> <time datetime="2026-02-13">February 13, 2026</time> ·
      <span>8 min read</span>
    </p>
    <p>
      Build a clean, modern UI kit on top of Tailwind CSS with reusable components, consistent patterns,
      and a workflow that scales from prototypes to production.
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="Placeholder blog cover illustration"
    />
    <figcaption>Reusable UI blocks help you ship faster without sacrificing consistency.</figcaption>
  </figure>

  <h2>Why shadcn/ui feels fast</h2>
  <p>
    The “speed” comes from composable primitives and predictable styling. Instead of reinventing buttons,
    dialogs, and form states, you reuse patterns and focus on layout, content, and product logic.
  </p>

  <h2>What you’ll build</h2>
  <ul>
    <li>A responsive blog layout with a solid typography rhythm</li>
    <li>A reusable article header (title, author, date, hero image)</li>
    <li>Accessible content blocks (lists, quotes, callouts, code)</li>
    <li>A lightweight “related posts” section that you can wire to your CMS later</li>
  </ul>

  <h2>Step 1: Establish a content-first layout</h2>
  <p>
    Start with semantic HTML. Use <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, and
    headings in order. This gives you strong accessibility and makes styling easier later.
  </p>

  <h3>Recommended structure</h3>
  <ol>
    <li>Header with title, meta, and a short lead paragraph</li>
    <li>Hero image with a descriptive caption</li>
    <li>Main sections with scannable subheadings</li>
    <li>Conclusion with a checklist and next steps</li>
  </ol>

  <h2>Step 2: Turn UI patterns into components</h2>
  <p>
    Once the HTML reads well unstyled, map repeated patterns into React components:
    <strong>ArticleHeader</strong>, <strong>Callout</strong>, <strong>CodeBlock</strong>, and
    <strong>RelatedPosts</strong>.
  </p>

  <aside aria-label="Callout">
    <h3>Quick tip</h3>
    <p>
      Build your “content blocks” as small components and keep them dumb. Pass content as props, and
      leave data fetching to the page layer.
    </p>
  </aside>

  <h2>Step 3: Add Tailwind CSS progressively</h2>
  <p>
    Apply spacing and typography first, then refine interactive components. Avoid over-styling early.
    If you’re working with multiple locales, keep line length comfortable and verify RTL rendering.
  </p>

  <pre><code>// Example (React)
function ArticleHeader({ title, author, date }) {
  return (
    &lt;header&gt;
      &lt;h1&gt;{title}&lt;/h1&gt;
      &lt;p&gt;By {author} · {date}&lt;/p&gt;
    &lt;/header&gt;
  )
}</code></pre>

  <blockquote>
    Consistency is a feature. shadcn/ui helps teams ship UI that feels intentional, not improvised.
  </blockquote>

  <h2>Common pitfalls to avoid</h2>
  <ul>
    <li>Skipping semantic headings (it hurts SEO and accessibility)</li>
    <li>Overusing custom colors early (set tokens later)</li>
    <li>Ignoring focus states and keyboard navigation</li>
    <li>Not testing long translations (German and Arabic often break layouts)</li>
  </ul>

  <h2>Wrap-up</h2>
  <p>
    Start with strong structure, convert patterns into reusable blocks, and style progressively.
    This approach keeps your blog scalable and easy to maintain.
  </p>

  <footer>
    <p><strong>Tags:</strong> shadcn/ui, react, tailwind, ui, design systems</p>
  </footer>
</article>
`.trim(),
  },

  fr: {
    title: "Concevoir des sites plus vite avec shadcn/ui",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description:
      "Un guide pas à pas pour créer un blog moderne et responsive avec React et Tailwind CSS.",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article>
  <header>
    <h1>Concevoir des sites plus vite avec shadcn/ui</h1>
    <p>
      <strong>Auteur :</strong> John Doe ·
      <strong>Publié :</strong> <time datetime="2026-02-13">13 février 2026</time> ·
      <span>8 min de lecture</span>
    </p>
    <p>
      Créez une interface moderne avec Tailwind CSS grâce à des composants réutilisables, des patterns cohérents
      et un workflow qui passe facilement du prototype à la production.
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="Illustration de couverture"
    />
    <figcaption>Des blocs UI réutilisables pour livrer plus vite, sans perdre en cohérence.</figcaption>
  </figure>

  <h2>Pourquoi shadcn/ui fait gagner du temps</h2>
  <p>
    La rapidité vient de primitives composables et d’un style prévisible. Au lieu de recréer des boutons, modales
    et états de formulaires, vous réutilisez des patterns et vous vous concentrez sur le produit.
  </p>

  <h2>Ce que vous allez construire</h2>
  <ul>
    <li>Une mise en page responsive avec une typographie lisible</li>
    <li>Un en-tête d’article réutilisable (titre, auteur, date, image)</li>
    <li>Des blocs accessibles (listes, citations, encarts, code)</li>
    <li>Une section “articles liés” facile à connecter à un CMS</li>
  </ul>

  <h2>Étape 1 : une structure centrée sur le contenu</h2>
  <p>
    Commencez par du HTML sémantique : <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, et
    des titres bien ordonnés. C’est meilleur pour l’accessibilité et plus simple à styliser.
  </p>

  <aside aria-label="Encart">
    <h3>Astuce rapide</h3>
    <p>
      Transformez vos “blocs de contenu” en petits composants React. Gardez-les simples et réutilisables.
    </p>
  </aside>

  <blockquote>
    La cohérence est une fonctionnalité. shadcn/ui aide à livrer une UI intentionnelle, pas improvisée.
  </blockquote>

  <h2>Erreurs fréquentes</h2>
  <ul>
    <li>Oublier la hiérarchie des titres (SEO + accessibilité)</li>
    <li>Sur-styliser trop tôt (définissez les tokens ensuite)</li>
    <li>Ignorer les états de focus et la navigation clavier</li>
    <li>Ne pas tester les traductions longues</li>
  </ul>

  <footer>
    <p><strong>Tags :</strong> shadcn/ui, react, tailwind, ui, design systems</p>
  </footer>
</article>
`.trim(),
  },

  de: {
    title: "Websites schneller gestalten mit shadcn/ui",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description:
      "Eine Schritt-für-Schritt-Anleitung für einen modernen, responsiven Blog mit React und Tailwind CSS.",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article>
  <header>
    <h1>Websites schneller gestalten mit shadcn/ui</h1>
    <p>
      <strong>Autor:</strong> John Doe ·
      <strong>Veröffentlicht:</strong> <time datetime="2026-02-13">13. Februar 2026</time> ·
      <span>8 Min. Lesezeit</span>
    </p>
    <p>
      Baue ein modernes UI-Set auf Tailwind CSS – mit wiederverwendbaren Komponenten, konsistenten Patterns
      und einem Workflow, der von Prototyp bis Produktion funktioniert.
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="Platzhalter-Covergrafik"
    />
    <figcaption>Wiederverwendbare UI-Blöcke beschleunigen Releases und halten Design konsistent.</figcaption>
  </figure>

  <h2>Warum sich shadcn/ui so schnell anfühlt</h2>
  <p>
    Die Geschwindigkeit kommt durch komposable Primitive und vorhersehbares Styling. Statt Buttons, Dialoge
    und Formularzustände ständig neu zu bauen, nutzt du bewährte Patterns.
  </p>

  <h2>Was du am Ende hast</h2>
  <ul>
    <li>Ein responsives Blog-Layout mit sauberer Typografie</li>
    <li>Einen wiederverwendbaren Artikel-Header (Titel, Autor, Datum, Hero)</li>
    <li>Accessible Content-Blöcke (Listen, Zitate, Callouts, Code)</li>
    <li>Eine einfache “Related Posts”-Sektion für späteres CMS-Connecting</li>
  </ul>

  <h2>Schritt 1: Semantik zuerst</h2>
  <p>
    Beginne mit semantischem HTML: <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code> und
    korrekt verschachtelten Überschriften. Das hilft SEO, Accessibility und Styling.
  </p>

  <aside aria-label="Hinweis">
    <h3>Pro-Tipp</h3>
    <p>
      Baue Content-Blöcke als kleine Komponenten und halte sie “dumm”. Daten kommen später aus der Page-Schicht.
    </p>
  </aside>

  <blockquote>
    Konsistenz ist ein Feature. shadcn/ui hilft Teams, UI bewusst statt improvisiert zu shippen.
  </blockquote>

  <h2>Typische Stolpersteine</h2>
  <ul>
    <li>Überschriften-Hierarchie ignorieren</li>
    <li>Zu früh zu viele Custom-Farben</li>
    <li>Focus-States & Tastatur-Navigation vergessen</li>
    <li>Lange Übersetzungen nicht testen (DE & RTL)</li>
  </ul>

  <footer>
    <p><strong>Tags:</strong> shadcn/ui, react, tailwind, ui, design system</p>
  </footer>
</article>
`.trim(),
  },

  es: {
    title: "Diseña sitios web más rápido con shadcn/ui",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description:
      "Guía paso a paso para crear un blog moderno y responsive con React y Tailwind CSS.",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article>
  <header>
    <h1>Diseña sitios web más rápido con shadcn/ui</h1>
    <p>
      <strong>Autor:</strong> John Doe ·
      <strong>Publicado:</strong> <time datetime="2026-02-13">13 de febrero de 2026</time> ·
      <span>8 min de lectura</span>
    </p>
    <p>
      Construye una UI moderna sobre Tailwind CSS con componentes reutilizables y patrones consistentes,
      desde el prototipo hasta producción.
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="Ilustración de portada"
    />
    <figcaption>Bloques reutilizables para lanzar más rápido sin perder consistencia.</figcaption>
  </figure>

  <h2>Por qué shadcn/ui acelera el trabajo</h2>
  <p>
    La velocidad viene de primitivas componibles y estilos predecibles. En lugar de rehacer botones, modales
    y estados, reutilizas patrones y te enfocas en el producto.
  </p>

  <h2>Lo que vas a construir</h2>
  <ul>
    <li>Layout responsive con buena tipografía</li>
    <li>Encabezado de artículo reutilizable</li>
    <li>Bloques accesibles (listas, citas, callouts, código)</li>
    <li>Sección de “posts relacionados” lista para un CMS</li>
  </ul>

  <aside aria-label="Consejo">
    <h3>Tip rápido</h3>
    <p>
      Crea “bloques de contenido” pequeños y simples. Pasa el contenido por props y deja el fetching a la página.
    </p>
  </aside>

  <blockquote>
    La consistencia es una función. shadcn/ui ayuda a construir interfaces intencionales, no improvisadas.
  </blockquote>

  <footer>
    <p><strong>Etiquetas:</strong> shadcn/ui, react, tailwind, ui, diseño</p>
  </footer>
</article>
`.trim(),
  },

  hi: {
    title: "shadcn/ui के साथ वेबसाइट तेज़ी से डिज़ाइन करें",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description:
      "React और Tailwind CSS के साथ आधुनिक, responsive ब्लॉग बनाने की step-by-step गाइड।",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article>
  <header>
    <h1>shadcn/ui के साथ वेबसाइट तेज़ी से डिज़ाइन करें</h1>
    <p>
      <strong>लेखक:</strong> John Doe ·
      <strong>प्रकाशित:</strong> <time datetime="2026-02-13">13 फ़रवरी 2026</time> ·
      <span>8 मिनट पढ़ें</span>
    </p>
    <p>
      Tailwind CSS पर आधारित reusable components और consistent patterns के साथ
      prototype से production तक तेज़ी से UI बनाएं।
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="कवर इमेज प्लेसहोल्डर"
    />
    <figcaption>Reusable UI blocks से build तेज़ और consistent रहता है।</figcaption>
  </figure>

  <h2>shadcn/ui तेज़ क्यों लगता है?</h2>
  <p>
    इसकी speed composable primitives और predictable styling से आती है। आप buttons, dialogs और forms
    हर बार नए नहीं बनाते — आप patterns reuse करते हैं।
  </p>

  <h2>आप क्या बनाएँगे</h2>
  <ul>
    <li>एक responsive blog layout</li>
    <li>Reusable article header (title, author, date, hero)</li>
    <li>Accessible content blocks (lists, quotes, callouts, code)</li>
    <li>CMS से जोड़ने के लिए “related posts” section</li>
  </ul>

  <aside aria-label="टिप">
    <h3>छोटा टिप</h3>
    <p>
      पहले semantic HTML सही करें, फिर components में तोड़ें, और अंत में styling जोड़ें।
    </p>
  </aside>

  <blockquote>
    Consistency एक feature है — और shadcn/ui इसे आसान बनाता है।
  </blockquote>

  <footer>
    <p><strong>टैग:</strong> shadcn/ui, react, tailwind, ui, design</p>
  </footer>
</article>
`.trim(),
  },

  it: {
    title: "Progettare siti web più velocemente con shadcn/ui",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description:
      "Una guida passo-passo per creare un blog moderno e responsive con React e Tailwind CSS.",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article>
  <header>
    <h1>Progettare siti web più velocemente con shadcn/ui</h1>
    <p>
      <strong>Autore:</strong> John Doe ·
      <strong>Pubblicato:</strong> <time datetime="2026-02-13">13 febbraio 2026</time> ·
      <span>8 min di lettura</span>
    </p>
    <p>
      Crea una UI moderna su Tailwind CSS con componenti riutilizzabili e pattern coerenti,
      dal prototipo alla produzione.
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="Immagine di copertina"
    />
    <figcaption>Blocchi UI riutilizzabili per consegnare più rapidamente e restare coerenti.</figcaption>
  </figure>

  <h2>Perché shadcn/ui fa risparmiare tempo</h2>
  <p>
    La velocità deriva da primitive componibili e styling prevedibile. Invece di ricreare continuamente
    pulsanti e dialog, riusi pattern e ti concentri sul prodotto.
  </p>

  <h2>Cosa costruirai</h2>
  <ul>
    <li>Layout responsive con buona tipografia</li>
    <li>Header articolo riutilizzabile</li>
    <li>Blocchi accessibili (liste, citazioni, callout, codice)</li>
    <li>Sezione “articoli correlati” pronta per un CMS</li>
  </ul>

  <footer>
    <p><strong>Tag:</strong> shadcn/ui, react, tailwind, ui, design system</p>
  </footer>
</article>
`.trim(),
  },

  ja: {
    title: "shadcn/ui でWebサイト制作を高速化する",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description:
      "React と Tailwind CSS でモダンなレスポンシブブログを作るステップバイステップガイド。",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article>
  <header>
    <h1>shadcn/ui でWebサイト制作を高速化する</h1>
    <p>
      <strong>著者:</strong> John Doe ·
      <strong>公開日:</strong> <time datetime="2026-02-13">2026年2月13日</time> ·
      <span>約8分</span>
    </p>
    <p>
      Tailwind CSS 上に再利用可能なコンポーネントを積み上げ、プロトタイプから本番まで
      迷いなく進められるワークフローを作ります。
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="カバー画像（プレースホルダー）"
    />
    <figcaption>UIブロックを再利用すると、スピードと一貫性を両立できます。</figcaption>
  </figure>

  <h2>なぜ速いのか</h2>
  <p>
    “速さ” は、組み合わせ可能なプリミティブと予測しやすいスタイリングから生まれます。
    ボタンやダイアログを毎回作り直す必要がありません。
  </p>

  <h2>完成するもの</h2>
  <ul>
    <li>読みやすいタイポグラフィのレスポンシブレイアウト</li>
    <li>記事ヘッダー（タイトル・著者・日付・ヒーロー）</li>
    <li>アクセシブルなコンテンツブロック</li>
    <li>将来CMSにつなげやすい関連記事セクション</li>
  </ul>

  <footer>
    <p><strong>タグ:</strong> shadcn/ui, react, tailwind, ui, design</p>
  </footer>
</article>
`.trim(),
  },

  ms: {
    title: "Reka laman web lebih pantas dengan shadcn/ui",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description:
      "Panduan langkah demi langkah untuk bina blog moden dan responsif menggunakan React dan Tailwind CSS.",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article>
  <header>
    <h1>Reka laman web lebih pantas dengan shadcn/ui</h1>
    <p>
      <strong>Penulis:</strong> John Doe ·
      <strong>Diterbitkan:</strong> <time datetime="2026-02-13">13 Februari 2026</time> ·
      <span>8 min bacaan</span>
    </p>
    <p>
      Gunakan komponen boleh guna semula berasaskan Tailwind CSS untuk mempercepatkan pembangunan UI
      sambil mengekalkan konsistensi dari prototaip ke produksi.
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="Imej muka hadapan"
    />
    <figcaption>Blok UI yang konsisten memudahkan anda “ship” lebih pantas.</figcaption>
  </figure>

  <h2>Apa yang anda akan bina</h2>
  <ul>
    <li>Layout blog responsif</li>
    <li>Header artikel boleh guna semula</li>
    <li>Blok kandungan mesra aksesibiliti</li>
    <li>Seksyen artikel berkaitan untuk CMS</li>
  </ul>

  <footer>
    <p><strong>Tag:</strong> shadcn/ui, react, tailwind, ui, reka bentuk</p>
  </footer>
</article>
`.trim(),
  },

  pt: {
    title: "Crie sites mais rápido com shadcn/ui",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description:
      "Um guia passo a passo para construir um blog moderno e responsivo com React e Tailwind CSS.",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article>
  <header>
    <h1>Crie sites mais rápido com shadcn/ui</h1>
    <p>
      <strong>Autor:</strong> John Doe ·
      <strong>Publicado:</strong> <time datetime="2026-02-13">13 de fevereiro de 2026</time> ·
      <span>8 min de leitura</span>
    </p>
    <p>
      Construa uma UI moderna em cima do Tailwind CSS com componentes reutilizáveis e padrões consistentes,
      acelerando do protótipo à produção.
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="Imagem de capa"
    />
    <figcaption>Blocos reutilizáveis ajudam a manter consistência e velocidade.</figcaption>
  </figure>

  <h2>O que você vai construir</h2>
  <ul>
    <li>Layout responsivo com tipografia clara</li>
    <li>Cabeçalho de artigo reutilizável</li>
    <li>Blocos acessíveis (listas, citações, callouts, código)</li>
    <li>Seção de posts relacionados pronta para CMS</li>
  </ul>

  <footer>
    <p><strong>Tags:</strong> shadcn/ui, react, tailwind, ui, design</p>
  </footer>
</article>
`.trim(),
  },

  ru: {
    title: "Быстрее проектируйте сайты с shadcn/ui",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description:
      "Пошаговое руководство по созданию современного адаптивного блога на React и Tailwind CSS.",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article>
  <header>
    <h1>Быстрее проектируйте сайты с shadcn/ui</h1>
    <p>
      <strong>Автор:</strong> John Doe ·
      <strong>Опубликовано:</strong> <time datetime="2026-02-13">13 февраля 2026</time> ·
      <span>8 мин чтения</span>
    </p>
    <p>
      Соберите современную UI-систему на Tailwind CSS: переиспользуемые компоненты, единые паттерны
      и предсказуемая стилизация от прототипа до продакшена.
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="Обложка статьи"
    />
    <figcaption>Переиспользуемые блоки ускоряют разработку и сохраняют единый стиль.</figcaption>
  </figure>

  <h2>Что вы получите</h2>
  <ul>
    <li>Адаптивный макет блога</li>
    <li>Переиспользуемый хедер статьи</li>
    <li>Доступные контент-блоки</li>
    <li>Раздел “похожие статьи” для интеграции с CMS</li>
  </ul>

  <footer>
    <p><strong>Теги:</strong> shadcn/ui, react, tailwind, ui, дизайн</p>
  </footer>
</article>
`.trim(),
  },

  tr: {
    title: "shadcn/ui ile web sitelerini daha hızlı tasarlayın",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description:
      "React ve Tailwind CSS ile modern, responsive bir blog oluşturmak için adım adım rehber.",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article>
  <header>
    <h1>shadcn/ui ile web sitelerini daha hızlı tasarlayın</h1>
    <p>
      <strong>Yazar:</strong> John Doe ·
      <strong>Yayın:</strong> <time datetime="2026-02-13">13 Şubat 2026</time> ·
      <span>8 dk okuma</span>
    </p>
    <p>
      Tailwind CSS üzerinde yeniden kullanılabilir bileşenlerle modern bir UI sistemi kurun.
      Prototipten prod’a kadar tutarlı ve hızlı ilerleyin.
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="Kapak görseli"
    />
    <figcaption>UI bloklarını tekrar kullanmak, hız ve tutarlılık sağlar.</figcaption>
  </figure>

  <h2>Neden hızlı?</h2>
  <p>
    Hız; birleştirilebilir parçalar (primitives) ve öngörülebilir stillerden gelir. Buton, dialog ve form
    durumlarını tekrar tekrar yazmak yerine pattern’leri yeniden kullanırsınız.
  </p>

  <h2>Sonuçta ne inşa edeceksiniz?</h2>
  <ul>
    <li>Responsive blog layout</li>
    <li>Yeniden kullanılabilir makale başlığı</li>
    <li>Erişilebilir içerik blokları</li>
    <li>CMS’e bağlanabilir “ilgili yazılar” bölümü</li>
  </ul>

  <footer>
    <p><strong>Etiketler:</strong> shadcn/ui, react, tailwind, ui, tasarım</p>
  </footer>
</article>
`.trim(),
  },

  zh: {
    title: "用 shadcn/ui 更快地设计网站",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description: "一步一步教你用 React 和 Tailwind CSS 搭建现代、响应式博客。",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article>
  <header>
    <h1>用 shadcn/ui 更快地设计网站</h1>
    <p>
      <strong>作者：</strong>John Doe ·
      <strong>发布：</strong><time datetime="2026-02-13">2026年2月13日</time> ·
      <span>阅读约 8 分钟</span>
    </p>
    <p>
      基于 Tailwind CSS 复用组件与一致的设计模式，让你从原型到上线都能保持速度与统一体验。
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="封面图"
    />
    <figcaption>复用 UI 模块，可以更快交付并保持一致性。</figcaption>
  </figure>

  <h2>为什么会更快</h2>
  <p>
    速度来自可组合的基础组件（primitives）与可预测的样式体系。你不必反复造轮子，
    只需要把注意力放在信息结构与产品体验上。
  </p>

  <h2>你将完成的内容</h2>
  <ul>
    <li>响应式博客页面结构</li>
    <li>可复用文章头部（标题、作者、日期、主图）</li>
    <li>可访问性友好的内容块</li>
    <li>可扩展到 CMS 的“相关文章”区域</li>
  </ul>

  <footer>
    <p><strong>标签：</strong>shadcn/ui, react, tailwind, ui, 设计系统</p>
  </footer>
</article>
`.trim(),
  },

  ar: {
    title: "تصميم المواقع بشكل أسرع باستخدام shadcn/ui",
    authorName: "John Doe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    pubDate: new Date(),
    description:
      "دليل خطوة بخطوة لبناء مدونة حديثة ومتجاوبة باستخدام React و Tailwind CSS.",
    authorImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    html: `
<article dir="rtl">
  <header>
    <h1>تصميم المواقع بشكل أسرع باستخدام shadcn/ui</h1>
    <p>
      <strong>الكاتب:</strong> John Doe ·
      <strong>تاريخ النشر:</strong> <time datetime="2026-02-13">13 فبراير 2026</time> ·
      <span>8 دقائق قراءة</span>
    </p>
    <p>
      ابنِ واجهة حديثة فوق Tailwind CSS عبر مكوّنات قابلة لإعادة الاستخدام وأنماط متسقة تساعدك
      على الانتقال من النموذج الأولي إلى الإنتاج بسرعة وثبات.
    </p>
  </header>

  <figure>
    <img
      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
      alt="صورة الغلاف"
    />
    <figcaption>إعادة استخدام كتل الواجهة يسرّع التسليم ويحافظ على الاتساق.</figcaption>
  </figure>

  <h2>لماذا shadcn/ui أسرع؟</h2>
  <p>
    السرعة تأتي من عناصر أساسية قابلة للتركيب وتنسيق متوقع. بدلاً من بناء الأزرار والحوار
    وحالات النماذج من الصفر، يمكنك إعادة استخدام الأنماط والتركيز على تجربة المنتج.
  </p>

  <h2>ما الذي ستبنيه</h2>
  <ul>
    <li>تخطيط مدونة متجاوب</li>
    <li>رأس مقال قابل لإعادة الاستخدام (عنوان، كاتب، تاريخ، صورة)</li>
    <li>كتل محتوى داعمة لإمكانية الوصول</li>
    <li>قسم “مقالات ذات صلة” جاهز لربطه بـ CMS</li>
  </ul>

  <footer>
    <p><strong>الوسوم:</strong> shadcn/ui، react، tailwind، ui، تصميم</p>
  </footer>
</article>
`.trim(),
  },
};

type BlogSectionProps = {
  className?: string;
};

export async function BlogSection({ className }: BlogSectionProps) {
  const currentLocale = await getLocale();
  const { title, description, html } = blog[currentLocale];

  return (
    <section className={cn("mx-auto w-full max-w-5xl", className)}>
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <h1 className="max-w-3xl text-5xl font-semibold text-pretty md:text-6xl">
            {title}
          </h1>
          <h3 className="mt-3 max-w-3xl text-lg text-muted-foreground md:text-xl">
            {description}
          </h3>

          <div className="relative mt-4 mb-8 aspect-video size-full">
            <Img
              src="/example.svg"
              alt="placeholder"
              fill
              sizes="50dvw"
              className="rounded-lg border object-cover"
            />
          </div>
        </div>
      </div>

      <article
        className="container mx-auto prose max-w-3xl dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}
