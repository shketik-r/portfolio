# Стек технологий

## Основные технологии

| Категория | Технология | Версия | Назначение |
|-----------|-----------|--------|------------|
| Фреймворк | Next.js | 15.1.7 | React-фреймворк (App Router, SSR/RSC) |
| UI-библиотека | React | 19.0.0 | Построение интерфейса |
| Язык | TypeScript | 5 | Типизация |
| ORM | Prisma | 6.4.1 | Работа с PostgreSQL |
| БД | PostgreSQL (Neon) | — | Хранение данных |
| Стили | Tailwind CSS | 3.4.1 | Utility-first CSS |
| HTTP-клиент | Axios | 1.8.1 | Запросы к API |
| Состояние | Zustand | 5.0.3 | Управление состоянием |
| Иконки | lucide-react | 0.475.0 | SVG-иконки |

## UI-компоненты (Radix / shadcn)

| Пакет | Версия |
|-------|--------|
| @radix-ui/react-checkbox | ^1.1.4 |
| @radix-ui/react-dialog | ^1.1.6 |
| @radix-ui/react-popover | ^1.1.6 |
| @radix-ui/react-select | ^2.1.6 |
| @radix-ui/react-slider | ^1.2.3 |
| @radix-ui/react-slot | ^1.1.2 |
| vaul | ^1.1.2 |

## Утилиты

| Пакет | Версия | Назначение |
|-------|--------|------------|
| class-variance-authority | ^0.7.1 | Варианты классов компонентов |
| clsx | ^2.1.1 | Условные классы |
| tailwind-merge | ^3.0.1 | Слияние классов Tailwind |
| tailwindcss-animate | ^1.0.7 | Анимации Tailwind |
| qs | ^6.14.0 | Парсинг query-строк |
| react-use | ^17.6.0 | React-хуки |
| bcrypt | ^5.1.1 | Хеширование паролей |

## Dev-зависимости

| Пакет | Версия |
|-------|--------|
| eslint | ^9 |
| eslint-config-next | 15.1.7 |
| @eslint/eslintrc | ^3 |
| postcss | ^8 |
| tailwindcss | ^3.4.1 |
| typescript | ^5 |
| @types/node | ^20 |
| @types/react | ^19 |
| @types/react-dom | ^19 |
| ts-node | ^10.9.2 |

## Шрифты

- **Nunito** (Google Fonts) — подключён через `next/font/google`, subsets: `cyrillic`, веса: 400–900.

## Конфигурационные файлы

| Файл | Назначение |
|------|------------|
| `next.config.ts` | Конфигурация Next.js (пока пустая) |
| `tailwind.config.ts` | Конфигурация Tailwind + плагин animate |
| `postcss.config.mjs` | PostCSS для Tailwind |
| `tsconfig.json` | TypeScript (strict, alias `@/*` → `./*`) |
| `eslint.config.mjs` | ESLint (Flat Config, next/core-web-vitals, next/typescript) |
