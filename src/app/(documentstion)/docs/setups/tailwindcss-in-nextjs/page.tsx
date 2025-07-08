import CodeBlock from '@/components/client/CodeBlock';
import React from 'react';

const TailwindcssInNextjsDocs = () => (
  <div>
    <h1>Tailwind CSS in Next.js Project</h1>
    <h2>What is Tailwind CSS?</h2>
    <p>
      <b>Tailwind CSS</b> is a utility-first CSS framework for rapidly building custom user
      interfaces. Instead of writing custom CSS, you use utility classes directly in your HTML/JSX
      to style elements.
    </p>
    <ul>
      <li>Faster styling with pre-built utility classes</li>
      <li>Highly customizable via configuration</li>
      <li>Responsive, dark mode, and more out-of-the-box</li>
      <li>Removes unused CSS in production builds (tree-shaking)</li>
    </ul>
    <h2>
      How Tailwind CSS is Used in <code>synkronex</code>
    </h2>
    <p>
      In this project, Tailwind CSS is configured in <code>tailwind.config.ts</code> and integrated
      with Next.js. Here’s how it works:
    </p>
    <ol>
      <li>
        <b>Configuration:</b> The <code>tailwind.config.ts</code> file defines which files Tailwind
        should scan for class names (the <b>content</b> array), customizes the theme, and enables
        dark mode.
      </li>
      <li>
        <b>Usage:</b> You use Tailwind utility classes directly in your React components’{' '}
        <code>className</code> attributes.
      </li>
      <li>
        <b>Build:</b> When you run <CodeBlock code={`npm run dev`} language="bash" /> or{' '}
        <CodeBlock code={`npm run build`} language="bash" />, Tailwind scans your project for used
        classes and generates a single CSS file with only what you need.
      </li>
      <li>
        <b>Result:</b> Your app loads fast, and you never ship unused CSS.
      </li>
    </ol>
    <h3>
      Example <code>tailwind.config.ts</code>
    </h3>
    <CodeBlock
      code={`export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    // ...extend theme, colors, etc.
  },
  plugins: [],
};`}
      language="js"
    />
    <h3>Install Tailwind CSS</h3>
    <p>
      To set up Tailwind CSS, you need to install some tools and create config files. Here’s what
      each command does and why you need it:
    </p>
    <ul>
      <li>
        <b>Install Tailwind and its tools:</b>
        <CodeBlock code={`npm install -D tailwindcss postcss autoprefixer`} language="bash" />
        <ul>
          <li>
            <b>tailwindcss</b>: The main Tailwind CSS engine that generates your utility classes.
          </li>
          <li>
            <b>postcss</b>: A tool that processes your CSS and helps Tailwind work with it.
          </li>
          <li>
            <b>autoprefixer</b>: Adds extra code to your CSS so it works in all browsers.
          </li>
          <li>
            <b>-D</b> or <b>--save-dev</b>: Installs these as development tools (not needed when
            your app runs in production).
          </li>
        </ul>
      </li>
      <li>
        <b>Set up config files:</b>
        <CodeBlock code={`npx tailwindcss init -p`} language="bash" />
        <ul>
          <li>
            <b>npx</b>: Runs Tailwind’s setup tool without installing it globally.
          </li>
          <li>
            <b>tailwindcss init</b>: Creates a <code>tailwind.config.js</code> (or .ts) file for
            your settings.
          </li>
          <li>
            <b>-p</b>: Also creates a <code>postcss.config.js</code> file at the same time.
          </li>
        </ul>
      </li>
    </ul>
    <h4>Quick Reference Table</h4>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Command</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>What it does</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Why?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <code>npm install -D tailwindcss postcss autoprefixer</code>
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            Installs Tailwind, PostCSS, and Autoprefixer as dev dependencies
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            Needed for Tailwind to generate and process your CSS
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            <code>npx tailwindcss init -p</code>
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            Creates Tailwind and PostCSS config files
          </td>
          <td style={{ border: '1px solid #ddd', padding: '8px' }}>
            Sets up your project for Tailwind usage
          </td>
        </tr>
      </tbody>
    </table>

    <h3>How Tailwind Works in Your Project</h3>
    <ol>
      <li>You write markup using Tailwind classes.</li>
      <li>
        Tailwind scans your files (as configured in <code>tailwind.config.ts</code>) for used
        classes.
      </li>
      <li>It generates a CSS file with only the styles you actually use.</li>
      <li>This CSS is injected into your app via Next.js, making your app styled and fast.</li>
    </ol>
    <h3>How Tailwind CSS Works Under the Hood</h3>
    <ol>
      <li>
        <b>Class Scanning:</b> Tailwind uses the <code>content</code> array in your config to know
        which files to scan. It reads your code and finds every class name that matches a Tailwind
        utility.
      </li>
      <li>
        <b>CSS Generation:</b> Based on the classes it finds, Tailwind generates CSS rules for only
        those utilities. For example, if you use <code>bg-blue-500</code>, it generates the CSS for
        that background color.
      </li>
      <li>
        <b>Purge/Tree-shaking:</b> In production, Tailwind removes any unused CSS classes so your
        final CSS file is as small as possible. This is called <b>purging</b> or <b>tree-shaking</b>
        .
      </li>
      <li>
        <b>Injection:</b> The generated CSS is included in your app (often via a global CSS import
        like <code>globals.css</code> in Next.js). When your app loads, only the CSS for classes you
        actually used is loaded by the browser.
      </li>
      <li>
        <b>Result:</b> You get a tiny, fast-loading CSS file and never ship unused styles.
      </li>
    </ol>
    <p>
      <b>Summary:</b> Tailwind automates the process of writing, optimizing, and delivering CSS—so
      you can focus on building, not managing stylesheets.
    </p>
    <h3>What Happens Without Tailwind?</h3>
    <ul>
      <li>You would have to write and maintain custom CSS for every style.</li>
      <li>Styling would be slower and less consistent.</li>
      <li>You might ship a lot of unused CSS, making your app slower.</li>
    </ul>
    <h2>Summary</h2>
    <p>
      Tailwind CSS makes your development faster, your styles more consistent, and your app smaller
      and faster to load.
    </p>
  </div>
);

export default TailwindcssInNextjsDocs;
