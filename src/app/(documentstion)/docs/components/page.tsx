import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { LayoutDashboard, Square, BadgeCheck, Menu } from 'lucide-react'
import componentsContent from '../content/en/components'

const iconMap = {
  LayoutDashboard,
  Square,
  BadgeCheck,
  Menu,
};

const page = () => {
    return (
  <main className="min-h-screen bg-background px-4 sm:px-6 py-12">
    <section className="max-w-3xl mx-auto text-center mb-12">
      <Badge variant="secondary" className="mb-4">{componentsContent.hero.badge}</Badge>
      <h1 className="text-4xl font-bold mb-4">{componentsContent.hero.title}</h1>
      <p className="text-muted-foreground text-lg mb-6">{componentsContent.hero.description}</p>
    </section>
    <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {componentsContent.components.map((component, idx) => {
        const Icon = iconMap[component.icon as keyof typeof iconMap];
        return (
          <Card key={idx}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Button size="icon" className="mb-4">
                {Icon && <Icon className="w-6 h-6" />}
              </Button>
              <h3 className="font-semibold text-lg mb-2">{component.name}</h3>
              <p className="text-muted-foreground text-sm mb-2">{component.description}</p>
              <pre className="bg-muted rounded px-2 py-1 text-xs mt-2 w-full overflow-x-auto text-left"><code>{component.usage}</code></pre>
            </CardContent>
          </Card>
        );
      })}
    </section>
  </main>
);
}

export default page
