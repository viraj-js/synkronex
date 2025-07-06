# Synkronex

![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-2E3A4C?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-%23F7DF1E.svg?logo=react)


**Synkronex** is a modern, open-source project management and documentation platform built with Next.js, TypeScript, and shadcn/ui. It features modular, multi-language content, a professional dark theme, and a scalable folder structure for easy maintenance and contribution.

---

## 🛠️ Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/viraj-js/synkronex.git
cd synkronex
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 🧪 Testing & Quality

This project uses **Jest** and **React Testing Library** for unit and integration tests. All tests are colocated in `__tests__` folders near the code they test.

- To run all tests:
  ```bash
  npm test
  ```
- For detailed setup and advanced usage, see [`README.testing.md`](./README.testing.md).

### Adding or Updating Tests
- Add new test files in the closest `__tests__` folder to your component, page, or module.
- Name tests `[filename].test.ts` or `[filename].test.tsx`.
- Use React Testing Library for UI; use plain Jest for logic/content.
- See the Testing README for more examples and best practices.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork** the repository.
2. **Create a feature branch.**
3. **Make your changes and test them.**
4. **Open a pull request** with a clear description.

See the [Testing Guide](./README.testing.md) for details on running tests.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 📬 Contact

- [GitHub Issues](https://github.com/viraj-js/synkronex/issues)
- Email: contact@synkronex.com

---

> You can start editing the landing page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More


Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
