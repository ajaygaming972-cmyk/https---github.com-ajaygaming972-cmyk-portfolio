'use client';

import Image from 'next/image';

interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  unoptimized?: boolean;
}

export default function AppImage({
  src,
  alt,
  width = 400,
  height = 300,
  className = '',
  priority = false,
  unoptimized = false,
}: AppImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      unoptimized={unoptimized}
      className={className}
    />
  );
}