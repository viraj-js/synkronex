if (!self.define) {
  let e,
    s = {};
  const t = (t, c) => (
    (t = new URL(t + '.js', c).href),
    s[t] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          ((e.src = t), (e.onload = s), document.head.appendChild(e));
        } else ((e = t), importScripts(t), s());
      }).then(() => {
        let e = s[t];
        if (!e) throw new Error(`Module ${t} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, n) => {
    const a = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[a]) return;
    let i = {};
    const r = (e) => t(e, a),
      o = { module: { uri: a }, exports: i, require: r };
    s[a] = Promise.all(c.map((e) => o[e] || r(e))).then((e) => (n(...e), i));
  };
}
define(['./workbox-4754cb34'], function (e) {
  'use strict';
  (importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/app-build-manifest.json', revision: 'ed9226bb312f66c82aca0cf73e6f0363' },
        { url: '/_next/static/chunks/329-123f7288f9a504cf.js', revision: 'klWAcI_NGcea7b8pCNtrd' },
        { url: '/_next/static/chunks/37-310c3b191143efe4.js', revision: 'klWAcI_NGcea7b8pCNtrd' },
        {
          url: '/_next/static/chunks/4bd1b696-1c01b40e0faff23e.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        { url: '/_next/static/chunks/601.6d8ffc248640a499.js', revision: '6d8ffc248640a499' },
        { url: '/_next/static/chunks/708.13a9c112f934f349.js', revision: '13a9c112f934f349' },
        { url: '/_next/static/chunks/891-80d47d7301559152.js', revision: 'klWAcI_NGcea7b8pCNtrd' },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/api-reference/page-7b16ca40dd099b6c.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/components/page-13287b89a87be4d6.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/getting-started/page-f3155932cd8d1580.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/introduction/page-9b9e912a7b08f460.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/layout-3b829dd8c71daffa.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/page-f9a14dc06f6bf1c6.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/setups/github-actions-in-nextjs/page-27f00c0a62637f27.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/setups/husky-in-nextjs/page-5aa34383ee7d88cc.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/setups/jest-in-nextjs/page-21f4e616bb069cc3.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/setups/layout-4c267a5682816677.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/setups/page-88cb8f7b02f2a827.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/setups/pwa-in-nextjs/page-5587725bffddf628.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/setups/shadcn-in-nextjs/page-c3c5c560089047a6.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/(documentstion)/docs/setups/ts-in-nextjs/page-fb8d6d195cf99cca.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-7376c4417c6fc887.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/api/view-code/route-b715d48773b0dbf7.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/layout-c07ff00390cb929f.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/app/page-67c7ef0df79d4da4.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/framework-f593a28cde54158e.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/main-app-4b8fd9f5a08c0e92.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        { url: '/_next/static/chunks/main-c9638ac730f94fc5.js', revision: 'klWAcI_NGcea7b8pCNtrd' },
        {
          url: '/_next/static/chunks/pages/_app-0d3b52efe8911d4f.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/pages/_error-152443a84ec48432.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-12ed5ba2be37465e.js',
          revision: 'klWAcI_NGcea7b8pCNtrd',
        },
        { url: '/_next/static/css/319b930fa74aab77.css', revision: '319b930fa74aab77' },
        {
          url: '/_next/static/klWAcI_NGcea7b8pCNtrd/_buildManifest.js',
          revision: '91699e73395a2208d08ef0a0b42aacab',
        },
        {
          url: '/_next/static/klWAcI_NGcea7b8pCNtrd/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/file.svg', revision: 'd09f95206c3fa0bb9bd9fefabfd0ea71' },
        { url: '/globe.svg', revision: '2aaafa6a49b6563925fe440891e32717' },
        { url: '/icon512_maskable.png', revision: '21d5b62366049034cc03924faa58a4c3' },
        { url: '/icon512_rounded.png', revision: '136a4a39833e8fb0cf86901a3b8464aa' },
        { url: '/manifest.json', revision: 'e50f0c8f01a4b5888ee810ee44bc3040' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/vercel.svg', revision: 'c0af2f507b369b085b35ef4bbe3bcf1e' },
        { url: '/window.svg', revision: 'a2760511c65806022ad20adf74370ff3' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: t, state: c }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET'
    ));
});
