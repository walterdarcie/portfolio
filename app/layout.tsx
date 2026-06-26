import type { Metadata } from 'next';
import { Source_Serif_4, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Walter Darcie — Staff Product Designer',
  description:
    'Portfólio de Product Design com foco em produtos financeiros, crédito e collections na América Latina.',
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projetos' },
  { href: '/sobre', label: 'Sobre' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sourceSerif4.variable} ${sourceSans3.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        {/* Header */}
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <header className="flex items-center justify-between border-b border-line py-6">
            <Link href="/" className="font-serif text-lg font-semibold text-ink no-underline tracking-tight">
              WD
            </Link>
            <nav className="flex items-center gap-7 font-sans text-sm text-muted">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="no-underline transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
        </div>

        {/* Main */}
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 md:px-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-auto w-full bg-ink">
          <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
            <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-serif text-3xl font-light text-paper md:text-4xl">
                  Walter Darcie
                </p>
                <p className="mt-2 font-sans text-xs font-light uppercase tracking-[0.25em] text-paper/40">
                  Staff Product Designer
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <a
                  href="mailto:walter.darcie@yahoo.com.br"
                  className="flex items-center gap-3 font-sans text-sm text-paper/60 no-underline transition-colors hover:text-paper"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  walter.darcie@yahoo.com.br
                </a>
                <a
                  href="https://wa.me/5511971642798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 font-sans text-sm text-paper/60 no-underline transition-colors hover:text-paper"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  (11) 9 7164-2798
                </a>
              </div>
            </div>

            <div className="mt-16 border-t border-paper/10 pt-8">
              <p className="font-sans text-xs text-paper/25">
                © 2026 Walter Darcie. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
