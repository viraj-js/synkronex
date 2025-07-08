import CodeBlock from "@/components/client/CodeBlock";
import React from "react";

const BabelInNextjsDocs = () => (
  <div>
    <h1>Babel in Next.js Project</h1>
    <h2>What is Babel?</h2>
    <p>
      <b>Babel</b> is a popular JavaScript compiler that allows you to use next-generation JavaScript features (ES6/ES7/ESNext) by transpiling your code into a version compatible with older environments or browsers. It also supports JSX (used in React) and TypeScript, making it a key tool for modern web development.
    </p>
    <ul>
      <li>Transpiles modern JavaScript to widely supported JavaScript.</li>
      <li>Enables the use of JSX syntax in React projects.</li>
      <li>Supports TypeScript, allowing type-safe code that compiles to JavaScript.</li>
      <li>Allows use of plugins and presets to customize how code is transformed.</li>
    </ul>
    <h2>How Does Babel Actually Work?</h2>
    <p>
      Babel acts as a <b>translator</b> between your modern code (JavaScript, JSX, TypeScript) and the JavaScript that your runtime (Node.js, browsers, or test runners) understands. Here’s how it fits into your workflow:
    </p>
    <ol>
      <li><b>You write code</b> using the latest JavaScript (ES6+), React JSX, or TypeScript in your <code>src/</code> directory.</li>
      <li><b>Babel configuration</b> (in <code>babel.config.js</code>) tells Babel which presets to use for transforming your code. In your project, these presets are:
        <ul>
          <li><code>@babel/preset-env</code> – For modern JS features</li>
          <li><code>@babel/preset-react</code> – For JSX</li>
          <li><code>@babel/preset-typescript</code> – For TypeScript</li>
        </ul>
      </li>
      <li><b>When you build or run your project</b> (with Next.js, or manually with Babel CLI), Babel processes each file:
        <ul>
          <li>Reads your code</li>
          <li>Applies the presets/plugins</li>
          <li>Outputs standard JavaScript that can run in Node.js or browsers</li>
        </ul>
      </li>
      <li><b>Next.js Integration:</b> Next.js automatically uses Babel under the hood. When you run <code>next dev</code> or <code>next build</code>, it:
        <ul>
          <li>Detects your <code>babel.config.js</code></li>
          <li>Transpiles your code before bundling and serving it</li>
        </ul>
      </li>
      <li><b>Jest Integration:</b> When you run tests with <code>jest</code>, <code>babel-jest</code> transforms your files so that tests can run code using modern JS, JSX, or TypeScript.</li>
      <li><b>Result:</b> Your code runs everywhere it needs to, even if those environments don’t support the latest JS, JSX, or TypeScript.</li>
    </ol>
    <h4>Visual Flow</h4>
    <ul>
      <li>Write code (modern JS, JSX, TS) → <b>Babel (via Next.js/Jest/CLI)</b> → Compatible JavaScript → Run in Node.js, browser, or tests</li>
    </ul>
    <p>
      <b>In summary:</b> Babel is always running in the background (via Next.js or Jest), translating your code so you can use the newest features without worrying about compatibility.
    </p>
    <h2>How Babel is Used in <code>synkronex</code></h2>
    <p>
      In this project, Babel is configured in <code>babel.config.js</code> as follows:
    </p>
    {/* Display the config using CodeBlock */}
    {/* @ts-ignore: CodeBlock is a client component */}
    <CodeBlock
      code={`module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};`}
      language="js"
    />
    <h3>Explanation of Each Line</h3>
    <ul>
      <li><b>module.exports = &#123;</b> — Exports the Babel configuration object so it can be used by build tools and scripts.</li>
      <li><b>presets: [</b> — The <code>presets</code> array defines sets of plugins/rules for how Babel should transform your code.</li>
      <li><b>['@babel/preset-env', &#123; targets: &#123; node: 'current' &#125; &#125;]</b> — Uses the <code>@babel/preset-env</code> preset, targeting your current Node.js version. This ensures only the necessary transformations for your Node environment are applied, keeping builds efficient and compatible.</li>
      <li><b>'@babel/preset-react'</b> — Adds support for JSX syntax, which is required for React components.</li>
      <li><b>'@babel/preset-typescript'</b> — Allows Babel to transpile TypeScript code to JavaScript, removing type annotations.</li>
      <li><b>]</b> — Closes the presets array.</li>
      <li><b>&#125;;</b> — Ends the configuration object.</li>
    </ul>
    <h3>What Happens If You Skip Babel?</h3>
    <ul>
      <li><b>Modern JavaScript Features:</b> Code using ES6+ syntax (like arrow functions, async/await, optional chaining, etc.) may not run in environments that do not support them, causing runtime errors.</li>
      <li><b>JSX Support:</b> React components written in JSX will not be understood by Node.js or browsers without Babel, resulting in syntax errors.</li>
      <li><b>TypeScript:</b> TypeScript files will not be converted to JavaScript, so any type annotations or TypeScript-specific syntax will cause errors during execution.</li>
      <li><b>Testing:</b> Tools like <code>babel-jest</code> rely on Babel to transform code before running tests. Without Babel, tests may fail to execute or require alternative setups.</li>
      <li><b>Plugin Ecosystem:</b> Many plugins and presets (e.g., for polyfills, experimental features) are only available through Babel.</li>
    </ul>
    <p>
      <b>In summary:</b> Skipping Babel would mean losing support for modern JavaScript, React JSX, and TypeScript in your project, resulting in compatibility issues, build failures, and a much more limited development experience.
    </p>

    <h2>Where is Babel Configured?</h2>
    <ul>
      <li><code>babel.config.js</code> – Main Babel configuration file.</li>
      <li><code>package.json</code> – Babel-related dependencies such as presets and <code>babel-jest</code> for testing.</li>
    </ul>

    <h2>Common Babel Commands</h2>
    <p>Here are some common commands you might use to work with Babel in this project:</p>
    {/* Install Babel and presets */}
    {/* @ts-ignore: CodeBlock is a client component */}
    <CodeBlock
      code={`npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript babel-jest`}
      language="bash"
    />
    {/* Run Babel CLI to transpile files (example) */}
    {/* @ts-ignore: CodeBlock is a client component */}
    <CodeBlock
      code={`npx babel src --out-dir dist --extensions ".js,.jsx,.ts,.tsx"`}
      language="bash"
    />
    {/* Run tests with Babel-Jest (example) */}
    {/* @ts-ignore: CodeBlock is a client component */}
    <CodeBlock
      code={`npx jest`}
      language="bash"
    />

    <h2>Summary</h2>
    <p>
      Babel makes it possible for this project to use the latest JavaScript features, JSX, and TypeScript, while ensuring compatibility and smooth development, testing, and deployment workflows.
    </p>
  </div>
);

export default BabelInNextjsDocs;
