import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Download, Settings } from 'lucide-react'
import gettingStartedContent from '../content/en/getting-started'

const iconMap = {
  CheckCircle,
  Download,
  Settings,
};

const page = () => {
    return (
  <main className="min-h-screen bg-background px-4 sm:px-6 py-12">
    <section className="max-w-3xl mx-auto text-center mb-12">
      <Badge variant="secondary" className="mb-4">{gettingStartedContent.hero.badge}</Badge>
      <h1 className="text-4xl font-bold mb-4">{gettingStartedContent.hero.title}</h1>
      <p className="text-muted-foreground text-lg mb-6">{gettingStartedContent.hero.description}</p>
    </section>
    <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {gettingStartedContent.steps.map((step, idx) => {
        const Icon = iconMap[step.icon as keyof typeof iconMap];
        return (
          <Card key={idx}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              {Icon && <Icon className="w-8 h-8 mb-2" />}
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </section>
  </main>
);
}

export default page
