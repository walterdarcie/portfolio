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
        className="h-auto w-full rounded-sm border border-line"
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function ImageGrid({ children }: { children: React.ReactNode }) {
  return <div className="my-10 grid gap-6 md:grid-cols-2">{children}</div>;
}

export const mdxComponents = {
  ProjectImage,
  ImageGrid,
};
