# Testing & Setup Guide for Synkronex

This guide covers everything you need to know to set up and run tests in this project, including Jest, React Testing Library, and TypeScript integration.

---

## 🧪 Test Structure & Philosophy

- **Colocated `__tests__` folders:**
  - Every major code area (component, page, content module, feature) has a nearby `__tests__` folder.
  - Test files are named `[name].test.ts` or `[name].test.tsx`.
- **Test what matters:**
  - UI: Render and assert on visible output and interactivity.
  - Content modules: Check for correct exports and structure.
  - Utilities/hooks: Test pure logic and side effects.

### Example Structure
```
src/
  components/
    Card.tsx
    __tests__/
      Card.test.tsx
  app/
    (documentstion)/
      docs/
        page.tsx
        __tests__/
          page.test.tsx
        content/
          en/
            about.ts
            __tests__/
              about.test.ts
            dashboard/
              analytics.ts
              __tests__/
                analytics.test.ts
```

---

## ⚙️ Setup & Running Tests

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run all tests:**
   ```bash
   npm test
   ```
3. **Run tests with watch mode:**
   ```bash
   npm run test:watch
   ```
   *(Add this script to `package.json` if not present:)*
   ```json
   "scripts": {
     "test:watch": "jest --watch"
   }
   ```

---

## 📝 Adding New Tests

- Add new test files in the closest `__tests__` folder to the code you’re testing.
- Name them `[filename].test.ts` (for pure TS) or `[filename].test.tsx` (for React components).
- Use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for UI components.
- Use [Jest](https://jestjs.io/docs/getting-started) for pure logic/content modules.

---

## 📚 References
- [Jest Docs](https://jestjs.io/docs/getting-started)
- [ts-jest Docs](https://kulshekhar.github.io/ts-jest/)
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
