import { content } from '@/lib/content';
import ProjectDetail from '@/components/ProjectDetail';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return content.pl.projects.items.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exists = content.pl.projects.items.some((p) => p.slug === slug);
  if (!exists) notFound();
  return <ProjectDetail slug={slug} />;
}
