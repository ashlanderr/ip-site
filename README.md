# Сайт ИП Шилов А. А.

Статический сайт для приёма оплаты от физлиц через Т-Кассу (ссылки на оплату из личного кабинета).
Адрес: https://ip.ashlanderr.ru

Все реквизиты, контакты, ставка и сроки — в [src/site.config.ts](src/site.config.ts).

## Страницы

- `/` — услуги, цена, порядок работы
- `/payment/` — оплата, безопасность, отказ и возврат
- `/offer/` — публичная оферта
- `/privacy/` — политика обработки персональных данных
- `/contacts/` — контакты и реквизиты

## Сборка

```bash
npm ci
npm run build   # статический сайт в out/
```

## Deployment

The site is deployed with Docker to a server shared with other projects: one
`docker-compose.proxy.yml` and `deploy.sh` are shared between projects — keep them identical.

```bash
./deploy.sh prod
```

Push to `main` deploys via GitHub Actions (secrets `DOTENV_KEYS` — contents of `.env.keys`,
and `DEPLOY_SSH_KEY`). Variables live in `.env.prod`; the project has no secrets, so nothing in it
is encrypted with [dotenvx](https://dotenvx.com).

DNS: A-record `ip.ashlanderr.ru` → server IP (same as `time.ashlanderr.ru`). Caddy issues the
HTTPS certificate automatically on first request.

## Подключение Т-Кассы

1. Т-Бизнес → Касса → подать заявку на интернет-эквайринг, указать сайт `https://ip.ashlanderr.ru`.
2. Подключить онлайн-кассу (чеки) от Т-Кассы и убедиться, что она настроена на АУСН.
3. После одобрения создавать ссылки на оплату в кабинете Т-Кассы на итоговую сумму и отправлять клиенту.
