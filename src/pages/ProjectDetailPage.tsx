import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

function ImageFrame({ label }: { label: string }) {
  return (
    <div className="flex aspect-video items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-4 text-center text-xs font-medium uppercase tracking-[0.12em] text-gray-500">
      {label}
    </div>
  );
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="bg-white px-6 pb-20">
      <div className="mx-auto max-w-5xl pt-4">
        {/* hero visual placeholder */}
        <div className="mb-10 h-64 w-full rounded-3xl bg-gray-100">
          <div className="flex h-full items-center justify-center px-6 text-sm text-gray-400">
            Replace this area with your main Figma export for{' '}
            <span className="ml-1 font-medium text-gray-600">
              {project.title}
            </span>
          </div>
        </div>

        <header className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            {project.category} • {project.year}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            {project.description}
          </p>
        </header>

        <section className="mb-12 grid gap-8 border-b border-gray-200 pb-10 md:grid-cols-3">
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Role
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Timeline
            </h2>
            <p className="text-sm text-gray-800">{project.year}</p>
          </div>
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Category
            </h2>
            <p className="text-sm text-gray-800">{project.category}</p>
          </div>
        </section>

        <section className="mb-10 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Overview
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {project.description}
          </p>
        </section>
        <div className="mb-10">
          <ImageFrame label="Overview Image Placeholder" />
        </div>

        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            The problem
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {project.problem}
          </p>
        </section>
        <div className="mb-10 grid gap-4 md:grid-cols-2">
          <ImageFrame label="Problem Image Placeholder 1" />
          <ImageFrame label="Problem Image Placeholder 2" />
        </div>

        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Research & discovery
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {project.research}
          </p>
        </section>
        <div className="mb-10">
          <ImageFrame label="Research Image Placeholder" />
        </div>

        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Challenges
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {project.challenges}
          </p>
        </section>

        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Design process
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {project.designProcess}
          </p>
        </section>
        <div className="mb-10 grid gap-4 md:grid-cols-3">
          <ImageFrame label="Process Placeholder 1" />
          <ImageFrame label="Process Placeholder 2" />
          <ImageFrame label="Process Placeholder 3" />
        </div>

        <section className="mb-10 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            The solution
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {project.solution}
          </p>
        </section>
        <div className="mb-10">
          <ImageFrame label="Solution Image Placeholder" />
        </div>

        <section className="mb-10 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Key features
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {project.keyFeatures.map((feature) => (
              <div key={feature.title} className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Impact & results
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            {project.impact}
          </p>
        </section>
        <div className="mb-12">
          <ImageFrame label="Final Showcase Placeholder" />
        </div>

        {project.liveUrl && (
          <div className="mb-12 flex justify-center">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-pink-500 to-amber-400 px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:shadow-lg hover:brightness-110"
            >
              Visit live project
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        )}

        <div className="flex justify-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

