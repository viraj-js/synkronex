'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CodeBlock from './CodeBlock';
import ComponentSearch from './ComponentSearch';
import ViewCodeModal from './ViewCodeModal';
import { BadgeCheck, LayoutDashboard, Square, Menu } from 'lucide-react';

const iconMap = {
  LayoutDashboard,
  Square,
  BadgeCheck,
  Menu,
};

interface ClientComponentGridProps {
  components: Array<{
    icon: string;
    name: string;
    usage: string;
    description: string;
  }>;
}

const ClientComponentGrid: React.FC<ClientComponentGridProps> = ({ components }) => {
  const [query, setQuery] = useState('');
  const [viewCodeOpen, setViewCodeOpen] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filename, setFilename] = useState('');

  const handleViewCode = async (componentName: string) => {
    setLoading(true);
    setError('');
    setCode('');
    setFilename(componentName + '.tsx');
    setViewCodeOpen(true);
    try {
      const res = await fetch(`/api/view-code?file=${componentName}.tsx`);
      if (!res.ok) throw new Error('Failed to fetch code');
      const data = await res.json();
      setCode(data.code);
    } catch {
      setError('Could not load code.');
    } finally {
      setLoading(false);
    }
  };

  const filteredComponents = components.filter((component) => component.name.toLowerCase().includes(query.toLowerCase()) || component.description.toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <ComponentSearch onSearch={setQuery} />
      <section className="max-w-3xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 px-1 w-full">
        {filteredComponents.map((component, idx) => {
          const Icon = iconMap[component.icon as keyof typeof iconMap];
          return (
            <Card key={idx} className="rounded-lg shadow-sm border border-gray-200">
              <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                <Button size="icon" className="mb-3 w-10 h-10">
                  {Icon && <Icon className="w-6 h-6" />}
                </Button>
                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">{component.name}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2 px-1">{component.description}</p>
                <div className="w-full mb-2">
                  <CodeBlock code={component.usage} language="tsx" />
                </div>
                <Button variant="outline" size="sm" className="mt-1" onClick={() => handleViewCode(component.name)}>
                  View Code
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </section>
      <ViewCodeModal open={viewCodeOpen} onClose={() => setViewCodeOpen(false)} code={loading ? (error ? error : 'Loading...') : code} filename={filename} />
    </>
  );
};

export default ClientComponentGrid;
