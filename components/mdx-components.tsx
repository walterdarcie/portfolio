import Image from 'next/image';
import { ParallaxHero } from './parallax-hero';

// ── Types ─────────────────────────────────────────────────────────────────────

type ProjectImageProps = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  className?: string;
  align?: 'stretch' | 'center';
  maxWidth?: string;
};

type ProjectVideoProps = {
  src: string;
  caption?: string;
  className?: string;
  maxWidth?: string;
};

// ── Hero ──────────────────────────────────────────────────────────────────────

export function ProjectHero({
  backgroundSrc,
  logoSrc,
  logoAlt,
  title,
  tags,
  summary,
  year,
  impact,
}: {
  backgroundSrc: string;
  logoSrc?: string;
  logoAlt?: string;
  title: string;
  tags?: string;
  summary?: string;
  year?: string;
  impact?: string;
}) {
  return (
    <ParallaxHero
      backgroundSrc={backgroundSrc}
      logoSrc={logoSrc}
      logoAlt={logoAlt}
      title={title}
      tags={tags}
      summary={summary}
      year={year}
      impact={impact}
    />
  );
}

// ── Standard image ────────────────────────────────────────────────────────────

export function ProjectImage({
  src,
  alt,
  caption,
  width = 1600,
  height = 1000,
  className,
  align = 'stretch',
  maxWidth,
}: ProjectImageProps) {
  const centered = align === 'center';
  return (
    <figure
      className={[centered ? 'flex flex-col items-center' : '', className].filter(Boolean).join(' ')}
      style={maxWidth ? { maxWidth, marginLeft: 'auto', marginRight: 'auto' } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={centered ? 'h-auto max-w-full rounded-sm' : 'h-auto w-full rounded-sm'}
      />
      {caption ? <figcaption className={centered ? 'text-center' : ''}>{caption}</figcaption> : null}
    </figure>
  );
}

// ── Full bleed image — capped at 1400px, centered ─────────────────────────────

export function ProjectImageBleed({
  src,
  alt,
  caption,
  width = 2400,
  height = 1200,
}: ProjectImageProps) {
  return (
    <figure
      style={{
        width: 'min(100vw, 1400px)',
        marginLeft: 'calc(50% - min(50vw, 700px))',
      }}
      className="my-12"
    >
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full" />
      {caption ? (
        <figcaption className="mx-auto max-w-[860px] px-6">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

// ── Floating image — extends outside container on xl screens ──────────────────

export function ProjectImageFloat({
  src,
  alt,
  caption,
  width = 900,
  height = 700,
  side = 'right',
}: ProjectImageProps & { side?: 'left' | 'right' }) {
  return (
    <figure
      className={[
        'my-6 w-full md:w-[40%]',
        side === 'right'
          ? 'md:float-right md:ml-10 md:clear-right xl:-mr-28'
          : 'md:float-left md:mr-10 md:clear-left xl:-ml-28',
      ].join(' ')}
    >
      <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full rounded-sm" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

// ── Persona image — centered, natural size ────────────────────────────────────

export function PersonaImage({
  src,
  alt,
  width = 684,
  height = 341,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="my-8 flex justify-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto max-w-full rounded-sm"
      />
    </figure>
  );
}

// ── Video — autoplay loop muted, like a GIF ───────────────────────────────────

export function ProjectVideo({ src, caption, className, maxWidth }: ProjectVideoProps) {
  return (
    <figure
      className={className}
      style={maxWidth ? { maxWidth, marginLeft: 'auto', marginRight: 'auto' } : undefined}
    >
      <video src={src} autoPlay loop muted playsInline className="h-auto w-full rounded-lg" />
      {caption ? (
        <figcaption className="mt-3 font-sans text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

// ── Floating video — extends outside container on xl screens ──────────────────

export function ProjectVideoFloat({
  src,
  caption,
  side = 'right',
}: ProjectVideoProps & { side?: 'left' | 'right' }) {
  return (
    <figure
      className={[
        'my-6 w-full md:w-[44%]',
        side === 'right'
          ? 'md:float-right md:ml-10 md:clear-right xl:-mr-28'
          : 'md:float-left md:mr-10 md:clear-left xl:-ml-28',
      ].join(' ')}
    >
      <video src={src} autoPlay loop muted playsInline className="h-auto w-full rounded-lg" />
      {caption ? (
        <figcaption className="mt-2 font-sans text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

// ── Side-by-side two-column layout ────────────────────────────────────────────

export function SideBySide({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 grid items-start gap-6 md:grid-cols-2 [&_figure]:my-0">
      {children}
    </div>
  );
}

// ── Context cards ─────────────────────────────────────────────────────────────

export function ContextCards({ children }: { children: React.ReactNode }) {
  return <div className="my-12 grid gap-5 md:grid-cols-2">{children}</div>;
}

export function ContextCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white p-8 shadow-sm ring-1 ring-line/70">
      <span className="font-sans text-xl font-semibold md:text-xl uppercase">
        {title}
      </span>
      <div className="font-sans text-base leading-7 text-muted [&_p]:mt-0 [&_p]:leading-7 [&_strong]:font-semibold [&_strong]:text-ink">
        {children}
      </div>
    </div>
  );
}

// ── Business impact — white card, centered, accent heading ────────────────────

export function BusinessImpact({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-14 rounded-2xl border border-line/50 bg-white px-8 py-12 text-center shadow-sm md:px-16 md:py-14">
      <span className="font-sans text-xl font-semibold text-accent md:text-xl uppercase">
        Business impact
      </span>
      <div className="mt-8 font-sans text-xl leading-9 text-muted md:text-2xl md:leading-[1.6] [&_p]:mt-0 [&_strong]:font-bold [&_strong]:text-accent">
        {children}
      </div>
    </div>
  );
}

// ── Role tags — discrete label + pill chips ───────────────────────────────────

export function RoleTags({ roles }: { roles: string }) {
  const items = roles.split(',').map((r) => r.trim()).filter(Boolean);
  return (
    <div className="mb-14 mt-2">
      <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted/40">
        Meu papel
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((role) => (
          <span
            key={role}
            className="inline-flex items-center rounded-full border border-line bg-white px-3.5 py-1.5 font-sans text-sm font-medium text-muted"
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Discovery list — plain minimal style ──────────────────────────────────────

export function DiscoveryList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="my-5 list-none space-y-1.5 pl-0">
      {children}
    </ul>
  );
}

export function DiscoveryItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-baseline gap-3 font-sans text-base leading-7 text-muted">
      <span className="shrink-0 text-sm text-accent/50">–</span>
      <span>{children}</span>
    </li>
  );
}

// ── Finding card (evidence + source + decision) ───────────────────────────────

export function FindingCard({
  stat,
  label,
  source,
  decision,
  children,
}: {
  stat?: string;
  label?: string;
  source: string;
  decision: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 rounded-xl border border-line bg-white p-7 md:p-9">
      {stat ? (
        <div className="mb-4 font-serif text-5xl font-bold leading-none text-accent md:text-6xl">
          {stat}
        </div>
      ) : label ? (
        <div className="mb-4 font-sans text-2xl font-bold uppercase tracking-[0.08em] text-accent">
          {label}
        </div>
      ) : null}
      <div className="font-sans text-base leading-7 text-muted [&_strong]:font-semibold [&_strong]:text-ink">
        {children}
      </div>
      <div className="mt-7 mb-4 rounded-lg bg-ink/[0.05] p-5 md:p-5">
        <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-muted/60">
          Decisão gerada
        </span>
        <p className="font-sans text-sm font-medium leading-6 text-ink">{decision}</p>
      </div>
      <span className="mt-5 font-sans text-sm leading-5 text-muted/80">
        <span className="font-semibold uppercase tracking-[0.15em]">Fonte</span>
        {' · '}
        {source}
      </span>
    </div>
  );
}

// ── Hypothesis cards (decision matrix) ───────────────────────────────────────

export function HypothesisCards({
  header,
  columns = 3,
  children,
}: {
  header: string;
  columns?: 2 | 3;
  children: React.ReactNode;
}) {
  return (
    <div className="my-10">
      <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted/60">
        {header}
      </p>
      <div className={columns === 2 ? 'grid gap-4 md:grid-cols-2' : 'grid gap-4 md:grid-cols-3'}>
        {children}
      </div>
    </div>
  );
}

type HypothesisStatus = 'descartada' | 'escolhida' | 'backlog';

export function HypothesisCard({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: HypothesisStatus;
}) {
  const isChosen = status === 'escolhida';
  return (
    <div
      className={[
        'flex flex-col justify-between rounded-2xl p-6',
        isChosen ? 'border-2 border-accent bg-accent/5' : 'border border-line bg-white',
      ].join(' ')}
    >
      <div>
        <h4 className="font-serif text-xl font-bold leading-tight text-ink">{title}</h4>
        <p className="mt-3 font-sans text-sm leading-6 text-muted">{description}</p>
      </div>
      <span
        className={[
          'mt-6 font-sans text-xs font-bold uppercase tracking-[0.2em]',
          isChosen ? 'text-accent' : 'text-muted/40',
        ].join(' ')}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    </div>
  );
}

// ── Image grid ────────────────────────────────────────────────────────────────

export function ImageGrid({ children }: { children: React.ReactNode }) {
  return <div className="my-10 grid gap-6 md:grid-cols-2">{children}</div>;
}

// ── Stat grid ─────────────────────────────────────────────────────────────────

export function StatGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 md:grid-cols-3">
      {children}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col bg-white px-6 py-7">
      <span className="font-serif text-3xl font-semibold leading-none text-accent md:text-4xl">
        {value}
      </span>
      <span className="mt-3 font-sans text-sm leading-6 text-muted">{label}</span>
    </div>
  );
}

// ── Pull-quote ────────────────────────────────────────────────────────────────

export function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 border-l-2 border-accent pl-6 md:pl-8">
      <div className="font-serif text-2xl font-medium italic leading-snug text-ink md:text-[2rem] md:leading-[1.25]">
        {children}
      </div>
    </blockquote>
  );
}

// ── Component map ─────────────────────────────────────────────────────────────

export const mdxComponents = {
  ProjectHero,
  ProjectImage,
  ProjectImageBleed,
  ProjectImageFloat,
  PersonaImage,
  ProjectVideo,
  ProjectVideoFloat,
  SideBySide,
  ContextCards,
  ContextCard,
  BusinessImpact,
  RoleTags,
  DiscoveryList,
  DiscoveryItem,
  FindingCard,
  HypothesisCards,
  HypothesisCard,
  ImageGrid,
  StatGrid,
  Stat,
  Pullquote,
};
