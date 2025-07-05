import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Zap, Layers, Cloud } from 'lucide-react'
import introductionContent from '../content/en/introduction'

const iconMap = {
  Users,
  Zap,
  Layers,
  Cloud,
};

const page = () => {
  const { hero, features } = introductionContent;
  return (
    <main className="min-h-screen bg-background px-4 sm:px-6 py-12">
      <section className="max-w-3xl mx-auto text-center mb-12">
        <Badge variant="secondary" className="mb-4">{hero.badge}</Badge>
        <h1 className="text-4xl font-bold mb-4">{hero.title}</h1>
        <p className="text-muted-foreground text-lg mb-6">{hero.description}</p>
      </section>
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, idx) => {
          const Icon = iconMap[feature.icon as keyof typeof iconMap];
          return (
            <Card key={idx}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Icon className={`w-8 h-8 mb-2 text-${feature.color}-600`} />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </main>
  );
}

export default page
