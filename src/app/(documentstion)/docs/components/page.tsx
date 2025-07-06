import { Badge } from '@/components/ui/badge';
import componentsContent from '../content/en/components';
import ClientComponentGrid from '@/components/client/ClientComponentGrid';

const page = () => {
  return (
    <main className="min-h-screen bg-background px-2 sm:px-4 py-8">
      <section className="max-w-2xl mx-auto text-center mb-8 px-2">
        <Badge variant="secondary" className="mb-3 text-xs px-2 py-1">{componentsContent.hero.badge}</Badge>
        <h1 className="text-2xl sm:text-4xl font-bold mb-3 leading-tight">{componentsContent.hero.title}</h1>
        <p className="text-muted-foreground text-base sm:text-lg mb-5 px-1">{componentsContent.hero.description}</p>
      </section>
      <ClientComponentGrid components={componentsContent.components} />
    </main>
  );
};

export default page;
