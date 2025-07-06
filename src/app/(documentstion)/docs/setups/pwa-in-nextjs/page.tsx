import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import CodeBlock from '@/components/client/CodeBlock';
import { Badge } from '@/components/ui/badge';

export default function PWAInNextjsPage() {
  return (
    <div className="max-w-3xl mx-auto py-8">
      <Card className="mb-8">
        <CardContent className="py-8">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-base px-3 py-1">
              ⚡ PWA
            </Badge>
            <span className="text-muted-foreground text-sm">Progressive Web App + Next.js</span>
          </div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">🚀 Add PWA Support to Next.js</h1>
          <p className="mb-4 text-muted-foreground">
            Learn how to enable Progressive Web App (PWA) features in your Next.js project using <code>next-pwa</code> and a manifest file.
          </p>
          <h2 className="text-xl font-semibold mb-2">1. Install next-pwa</h2>
          <CodeBlock code="npm install next-pwa" language="bash" />
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Configure next-pwa in <code>next.config.ts</code></h2>
          <CodeBlock code={`const withPWA = require('next-pwa')({\n  dest: 'public',\n  register: true,\n  skipWaiting: true,\n  disable: process.env.NODE_ENV === 'development',\n});\n\nconst nextConfig = withPWA({\n  // ...other config\n});\n\nmodule.exports = nextConfig;`} language="js" />
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Add a manifest file</h2>
          <p className="mb-2">Create <code>public/manifest.json</code> with your app details:</p>
          <CodeBlock code={`{\n  "name": "Your App Name",\n  "short_name": "AppName",\n  "icons": [\n    {\n      "src": "icon512_rounded.png",\n      "sizes": "512x512",\n      "type": "image/png"\n    }\n  ],\n  "start_url": "/",\n  "display": "standalone",\n  "theme_color": "#8936FF",\n  "background_color": "#2EC6FE"\n}`} language="json" />
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Reference Manifest in <code>layout.tsx</code></h2>
          <CodeBlock code={`<head>\n  <link rel=\"manifest\" href=\"/manifest.json\" />\n</head>`} language="html" />
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Build and Test</h2>
          <CodeBlock code={`npm run build\nnpm start`} language="bash" />
          <p className="mt-4 text-muted-foreground text-sm">
            PWA features (service worker, offline, install prompt) are only enabled in production builds.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
