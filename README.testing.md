# Synkronex Testing Guide

[![CI](https://img.shields.io/github/actions/workflow/status/viraj-js/synkronex/ci.yml?branch=main)](https://github.com/viraj-js/synkronex/actions)
[![License](https://img.shields.io/github/license/viraj-js/synkronex)](LICENSE)

A comprehensive guide to testing in the Synkronex project, covering setup, structure, and best practices using Jest, React Testing Library, and TypeScript.

---

## Table of Contents

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Running Tests](#running-tests)
- [Adding Tests](#adding-tests)
- [References](#references)

---

## Overview

Synkronex uses a modern, scalable approach to testing. All major code areas—including components, pages, and utilities—are covered by colocated tests. We use:

- **Jest** for test running and assertions
- **React Testing Library** for UI/component tests
- **TypeScript** for type safety throughout

---

## Folder Structure

Test files are placed in `__tests__` folders next to the code they test. This keeps tests maintainable and discoverable.

```text
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

## Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)
- All project dependencies installed (`npm install`)

---

## Running Tests

- **Install dependencies:**
  ```bash
  npm install
  ```
- **Run all tests:**
  ```bash
  npm test
  ```
- **Run tests in watch mode:**
  ```bash
  npm run test:watch
  ```
  _(If `test:watch` is missing, add this to your `package.json` scripts:)_
  ```json
  "scripts": {
    "test:watch": "jest --watch"
  }
  ```

---

## Adding Tests

- Place new test files in the nearest `__tests__` folder to the code under test.
- Name test files as `[filename].test.ts` (for logic) or `[filename].test.tsx` (for React components).
- Use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for UI.
- Use [Jest](https://jestjs.io/docs/getting-started) for logic and content modules.

---

## References

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [ts-jest Documentation](https://kulshekhar.github.io/ts-jest/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
