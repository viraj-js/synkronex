# Project Setup Guide for Synkronex

This guide explains how to set up the project for development, including installing dependencies, configuring the environment, and setting up Jest for testing.

---

## ⚡ Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/viraj-js/synkronex.git
   cd synkronex
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🧪 Setting Up Jest for Testing

Jest is used for unit and integration tests, with React Testing Library for UI components and `ts-jest` for TypeScript support.

### 1. **Install Dev Dependencies**
If not already installed, run:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom ts-jest @types/jest jest-environment-jsdom identity-obj-proxy
```

### 2. **Jest Configuration**
The project uses a preconfigured `jest.config.js`:
```js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'ts-jest',
      { tsconfig: 'tsconfig.json' }
    ]
  },
  transformIgnorePatterns: ['/node_modules/'],
};
```

### 3. **Jest Setup File**
The `jest.setup.js` file includes:
```js
require('@testing-library/jest-dom');
```

### 4. **TypeScript Config**

> **Note:** For Next.js projects, `"jsx": "preserve"` is required and automatically set by Next.js. This allows Next.js to apply its own optimized JSX transform during build. You do **not** need to change this for testing or component development.

Example from `tsconfig.json`:
```json
"jsx": "preserve"
```

- Use ES6 `import`/`export` syntax everywhere in your code and tests.
- For config files (like `jest.config.js`), use CommonJS (`require`/`module.exports`) for maximum compatibility.

### 5. **Run Tests**
To run all tests:
```bash
npm test
```

---

## 📝 Additional Setup Notes
- Tests are colocated in `__tests__` folders near the code they test.
- See [`README.testing.md`](./README.testing.md) for more on test structure and best practices.
- See [`README.md`](./README.md) for project features, folder structure, and contribution guidelines.
