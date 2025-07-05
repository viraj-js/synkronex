# Synkronex

![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-2E3A4C?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-%23F7DF1E.svg?logo=react)
![Multi-Language](https://img.shields.io/badge/Multi--Language-enabled-green)
![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Enabled-22272e)

**Synkronex** is a modern, open-source project management/documentation platform built with Next.js, TypeScript, and shadcn/ui. It features modular, multi-language content, a professional dark theme, and a scalable folder structure for easy maintenance and contribution.

---

## 🚀 Features

- **Next.js 13+ App Router** with TypeScript
- **shadcn/ui** components for consistent, modern UI
- **Multi-language support** with modular content files
- **Dark mode** and theme toggle (system preference by default)
- **Responsive** and accessible design
- **Easy-to-extend** folder structure for docs, dashboard, and more

---

## 📁 Folder Structure (Content Example)

```
src/app/(documentstion)/docs/content/en/
  pages/
    home.content.ts
    about.content.ts
    docs.content.ts
    contact.content.ts
  sections/
    footer.content.ts
    navbar.content.ts
  dashboard/
    dashboardProjects.content.ts
    dashboardTasks.content.ts
  system/
    comingSoon.content.ts
```

- Add new languages by copying the structure under another language code (e.g. `fr/`, `de/`).
- Each file exports a clearly named content object for its route or section.

---

## 🛠️ Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/viraj-js/synkronex.git
cd synkronex
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 🌐 Multi-Language Content

All textual content is externalized into modular files for each language and route. To add or edit content, update the appropriate file in `src/app/(documentstion)/docs/content/[lang]/...`.

---

## 🌓 Dark Mode & Theme Toggle

- Fully supports dark and light themes.
- Users can toggle theme via the button in the UI (defaults to device preference).

---

## 🤝 Contributing

1. Fork the repo and create a feature branch.
2. Add or edit content/components as needed.
3. Ensure your changes follow the modular folder and naming conventions.
4. Open a pull request with a clear description.

---

## 📄 License

MIT

---

## 📬 Contact

- [GitHub Issues](https://github.com/viraj-js/synkronex/issues)
- Email: contact@synkronex.com
You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
