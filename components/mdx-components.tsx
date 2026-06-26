import Image from 'next/image';

type ProjectImageProps = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
};

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
        className="h-auto w-full rounded-sm border border-line bg-white"
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function ImageGrid({ children }: { children: React.ReactNode }) {
  return <div className="my-10 grid gap-6 md:grid-cols-2">{children}</div>;
}

// Band of headline metrics. Labels use <span>/<div> (not <p>) so the
// `.prose-editorial p` rule can't override their styling.
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

// Editorial pull-quote. Inner text is a <div> to dodge the prose <p> rule.
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
  ImageGrid,
  StatGrid,
  Stat,
  Pullquote,
};
