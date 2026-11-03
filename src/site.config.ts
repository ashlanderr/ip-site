// Все реквизиты и контакты ИП — в одном месте.

export const site = {
  fullName: "Индивидуальный предприниматель Шилов Александр Александрович",
  name: "ИП Шилов Александр Александрович",
  shortName: "ИП Шилов А. А.",
  inn: "761023671163",
  ogrnip: "326760000045788",
  registration:
    "Запись в ЕГРИП внесена 02.10.2026, регистрирующий орган — Управление Федеральной налоговой службы по Ярославской области",
  address: "152912, Ярославская обл., г. Рыбинск, ул. Молодогвардейцев, д. 7, кв. 14",
  okved: "62.01 — Разработка компьютерного программного обеспечения",
  phone: "+7 910 814-53-61",
  phoneHref: "+79108145361",
  email: "aleksandr.schilow2012@gmail.com",
  telegram: "ashlanderr",
  taxNote: "НДС не облагается (АУСН)",

  bank: {
    name: "АО «ТБанк»",
    account: "40802810000010157250",
    corrAccount: "30101810145250000974",
    bik: "044525974",
    inn: "7710140679",
  },

  cvUrl: "https://ashlanderr.github.io/cv/",
  githubUrl: "https://github.com/ashlanderr",
  domain: "ashlanderr.ru",

  hourlyRate: 1500,
  // Сколько рабочих дней у заказчика на проверку результата и на оплату
  reviewDays: 5,
  paymentDays: 5,
  warrantyDays: 30,

  offerDate: "3 ноября 2026 г.",
};

export const telegramUrl = `https://t.me/${site.telegram}`;
export const rate = `${site.hourlyRate.toLocaleString("ru-RU")} ₽`;
