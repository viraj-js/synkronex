import React from 'react';
import comingSoonContent from './content/en/coming-soon';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Github } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/theme-toggle';

const Page = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-2">
      <Card className="w-full max-w-md shadow-xl border border-border bg-card dark:bg-[#10131a] dark:border-[#23263a] relative">
        <div className="absolute top-3 right-3 z-10">
          <ThemeToggle />
        </div>
        <CardContent className="flex flex-col items-center py-10 px-4 sm:px-8">
          <Badge variant="secondary" className="mb-4 text-base px-3 py-1 rounded-full bg-muted dark:bg-[#23263a] text-foreground dark:text-[#c7d0e0] border-none">
            Coming Soon
          </Badge>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground dark:text-[#e7eaf3] mb-3 text-center">{comingSoonContent.title}</h1>
          <p className="text-muted-foreground dark:text-[#b0b8c9] text-center mb-8 text-base sm:text-lg">{comingSoonContent.message}</p>
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto dark:bg-[#23263a] dark:text-[#e7eaf3] dark:hover:bg-[#2a2e3f] dark:border-[#363b50]">
              <a href={comingSoonContent.docsLink}>
                <BookOpen className="w-5 h-5 mr-2" /> View Docs
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto dark:border-[#363b50] dark:text-[#c7d0e0] dark:hover:bg-[#1a1d29]">
              <a href={comingSoonContent.contributeLink} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" /> Contribute
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
