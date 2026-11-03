import { site } from "@/site.config";

export function Requisites() {
  const rows: [string, string][] = [
    ["Наименование", site.fullName],
    ["ИНН", site.inn],
    ["ОГРНИП", site.ogrnip],
    ["Регистрация", site.registration],
    ["Адрес", site.address],
    ["Основной вид деятельности", `ОКВЭД ${site.okved}`],
    ["Расчётный счёт", site.bank.account],
    ["Банк", site.bank.name],
    ["Корр. счёт", site.bank.corrAccount],
    ["БИК", site.bank.bik],
    ["ИНН банка", site.bank.inn],
    ["Налогообложение", site.taxNote],
    ["Телефон", site.phone],
    ["Электронная почта", site.email],
  ];
  return (
    <table className="req">
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label}>
            <td>{label}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
