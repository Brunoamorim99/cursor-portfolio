import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur dark:border-gray-800 dark:bg-black/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Bruno Amorim dos Santos logo"
            className="h-10 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={
                'text-sm uppercase tracking-[0.16em] transition-colors ' +
                (isActive(item.path)
                  ? 'text-gray-900 dark:text-[#E5D4FF]'
                  : 'text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-[#F9F7F9]')
              }
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="inline-flex rounded-full p-2 text-gray-700 dark:text-gray-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-black md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={
                  'py-2 text-sm font-medium transition-colors ' +
                  (isActive(item.path)
                    ? 'text-gray-900 dark:text-[#E5D4FF]'
                    : 'text-gray-700 hover:text-pink-500 dark:text-gray-300 dark:hover:text-[#F9F7F9]')
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

