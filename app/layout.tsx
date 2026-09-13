import { Nunito } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";
import { Header, PageTransition } from "@/components";

/**
 * Инлайн-скрипт в <head>. Выполняется ДО отрисовки body и гидратации.
 * Показывает прелоадер только при первой загрузке в рамках сессии.
 */
const preloaderScript = `
(function () {
  try {
    var seen = sessionStorage.getItem('portfolio-preloaded') === '1';
    if (seen) {
      document.documentElement.classList.add('app-loaded');
    } else {
      sessionStorage.setItem('portfolio-preloaded', '1');
    }
  } catch (e) {
    /* sessionStorage недоступен — считаем, что первый визит */
  }
})();
`;

const geistNunito = Nunito({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: "Руслан — Frontend разработчик",
    template: "%s — Руслан",
  },
  description: "Персональный сайт-портфолио Frontend-разработчика Руслана: проекты, технологии и контакты.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistNunito.variable}`}
      >
        <Script
          id="preloader-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: preloaderScript }}
        />
        {/* Прелоадер в HTML: виден сразу, скрывается после гидратации */}
        <div id="preloader" aria-hidden>
          <div className="preloader-spinner" />
        </div>

        <div className="bg-glow" aria-hidden />
        <Header className="sticky top-0 z-50 flex py-4 mb-[100px] max-lg:mb-[50px] backdrop-blur-sm" />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
