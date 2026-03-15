import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Walter Darcie — Product Designer',
  description:
    'Portfólio de Product Design com foco em estratégia, craft e impacto no negócio.',
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projetos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-8 md:px-10 md:pt-10">
          <header className="mb-16 flex items-center justify-between border-b border-line pb-6">
            <Link href="/" className="font-serif text-xl text-ink no-underline">
              Walter Darcie
            </Link>
            <nav className="flex items-center gap-5 text-sm text-muted">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="no-underline hover:text-ink">
                  {item.label}
                </Link>
              ))}
            </nav>
          </header>
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
