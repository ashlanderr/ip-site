import type { Metadata } from "next";
import { Requisites } from "@/components/Requisites";
import { site, telegramUrl } from "@/site.config";

export const metadata: Metadata = { title: "Реквизиты и контакты" };

export default function ContactsPage() {
  return (
    <>
      <h1>Реквизиты и контакты</h1>

      <h2>Контакты</h2>
      <table className="req">
        <tbody>
          <tr>
            <td>Telegram</td>
            <td>
              <a href={telegramUrl}>@{site.telegram}</a>
            </td>
          </tr>
          <tr>
            <td>Электронная почта</td>
            <td>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </td>
          </tr>
          <tr>
            <td>Телефон</td>
            <td>
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </td>
          </tr>
          <tr>
            <td>Резюме</td>
            <td>
              <a href={site.cvUrl}>{site.cvUrl}</a>
            </td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td>
              <a href={site.githubUrl}>{site.githubUrl}</a>
            </td>
          </tr>
        </tbody>
      </table>

      <h2>Реквизиты</h2>
      <Requisites />
    </>
  );
}
