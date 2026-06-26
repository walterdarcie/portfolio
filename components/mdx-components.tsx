import Image from 'next/image';

type ProjectImageProps = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

// Standard image — no border
export function ProjectImage({
  src,
  alt,
  caption,
  width = 1600,
  height = 1000,
}: ProjectImageProps) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

// Full viewport-width bleed image — escapes the prose container and page max-width
export function ProjectImageBleed({
  src,
  alt,
  caption,
  width = 2400,
  height = 1200,
}: ProjectImageProps) {
  return (
    <figure style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }} className="my-12">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
      />
      {caption ? <figcaption className="mx-auto max-w-[860px] px-6">{caption}</figcaption> : null}
    </figure>
  );
}

// Floating image — sits beside text on desktop
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
        'my-6 w-full md:w-[48%]',
        side === 'right'
          ? 'md:float-right md:ml-10 md:clear-right'
          : 'md:float-left md:mr-10 md:clear-left',
      ].join(' ')}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

// Context/Problem/Role cards — 3 columns
export function ContextCards({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-12 grid gap-6 md:grid-cols-3">
      {children}
    </div>
  );
}

export function ContextCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-sm border border-line bg-white p-6">
      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-muted/60">
        {title}
      </span>
      <div className="font-sans text-sm leading-7 text-muted [&_p]:mt-0 [&_p]:text-sm [&_p]:leading-7 [&_strong]:font-semibold [&_strong]:text-ink">
        {children}
      </div>
    </div>
  );
}

// Full-width business impact card
export function BusinessImpact({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="my-12 rounded-sm border border-line bg-accent/5 p-8 md:p-10">
      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
        Business impact
      </span>
      <div className="mt-4 font-sans text-base leading-8 text-ink md:text-lg [&_p]:mt-0">
        {children}
      </div>
    </div>
  );
}

export function ImageGrid({ children }: { children: React.ReactNode }) {
  return <div className="my-10 grid gap-6 md:grid-cols-2">{children}</div>;
}

// Band of headline metrics
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

// Editorial pull-quote
export function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 border-l-2 border-accent pl-6 md:pl-8">
      <div className="font-serif text-2xl font-medium italic leading-snug text-ink md:text-[2rem] md:leading-[1.25]">
        {children}
      </div>
    </blockquote>
  );
}

export const mdxComponents = {
  ProjectImage,
  ProjectImageBleed,
  ProjectImageFloat,
  ContextCards,
  ContextCard,
  BusinessImpact,
  ImageGrid,
  StatGrid,
  Stat,
  Pullquote,
};
