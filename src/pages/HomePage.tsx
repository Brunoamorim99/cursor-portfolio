import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HomePage() {
  return (
    <div className="px-6 pb-20">
      {/* Hero */}
      <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center gap-10 pt-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-violet-700">
            UX / UI Designer
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            I design digital experiences where usability meets business goals.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-600">
            I take messy ideas and turn them into polished, user-centered
            solutions that solve real problems for real people, across web,
            product, and interactive experiences.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-violet-700 px-7 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-pink-600"
            >
              View my work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400 px-7 py-3 text-sm font-medium text-amber-500 transition hover:bg-amber-400 hover:text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="mt-10 flex-1 md:mt-0">
          <div className="relative mx-auto h-72 max-w-sm rounded-3xl bg-gradient-to-br from-violet-700 via-pink-500 to-amber-400 p-[2px]">
            <div className="flex h-full items-center justify-center rounded-3xl bg-white">
              <div className="space-y-2 px-6 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
                  Portfolio
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Figma concepts, UX flows, and polished UI ready for real
                  products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

