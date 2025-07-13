import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import apiReferenceContent from '../content/en/api-reference';

const page = () => {
  const methodColorMap = {
    GET: 'text-blue-600 border-blue-200',
    POST: 'text-green-600 border-green-200',
    PATCH: 'text-yellow-600 border-yellow-200',
    DELETE: 'text-red-600 border-red-200',
  };

  return (
    <main className="min-h-screen bg-background px-4 sm:px-6 py-12">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          {apiReferenceContent.hero.badge}
        </Badge>
        <h1 className="text-4xl font-bold mb-4">{apiReferenceContent.hero.title}</h1>
        <p className="text-muted-foreground text-lg mb-6">{apiReferenceContent.hero.description}</p>
      </section>
      <section className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6 overflow-x-auto">
            <table className="w-full text-left text-sm border-separate border-spacing-y-2">
              <thead>
                <tr className="text-muted-foreground">
                  <th className="font-semibold">Endpoint</th>
                  <th className="font-semibold">Method</th>
                  <th className="font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {apiReferenceContent.endpoints.map((ep, idx) => (
                  <tr key={idx}>
                    <td className="font-mono">{ep.path}</td>
                    <td>
                      <Badge variant="outline" className={methodColorMap[ep.method as keyof typeof methodColorMap] || ''}>
                        {ep.method}
                      </Badge>
                    </td>
                    <td>{ep.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-xs text-muted-foreground mt-4">
              For full details, see the{' '}
              <Button variant="link" size="sm" asChild>
                <a href="https://github.com/viraj-js/synkronex#api" target="_blank" rel="noopener noreferrer">
                  API Docs <ExternalLink className="w-3 h-3 inline ml-1" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default page;
