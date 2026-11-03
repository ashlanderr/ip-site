import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/site.config";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `Разработка веб-приложений — ${site.shortName}`,
    template: `%s — ${site.shortName}`,
  },
  description:
    "Разработка и доработка веб-приложений на заказ: от технического задания до деплоя. Почасовая оплата.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">
              {site.shortName}
            </Link>
            <nav className="site-nav">
              <Link href="/">Услуги и цены</Link>
              <Link href="/payment/">Оплата и возврат</Link>
              <Link href="/offer/">Оферта</Link>
              <Link href="/contacts/">Контакты</Link>
            </nav>
          </div>
        </header>
        <main>
          <div className="container">{children}</div>
        </main>
        <footer className="site-footer">
          <div className="container">
            <p>{site.name}</p>
            <p>
              ИНН {site.inn} · ОГРНИП {site.ogrnip}
            </p>
            <p>{site.address}</p>
            <p>
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a> ·{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>{site.taxNote}</p>
            <nav>
              <Link href="/offer/">Публичная оферта</Link>
              <Link href="/payment/">Оплата и возврат</Link>
              <Link href="/privacy/">Политика обработки персональных данных</Link>
              <Link href="/contacts/">Реквизиты и контакты</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
