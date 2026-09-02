import type React from 'react';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SITE_URL?: string;
    }
  }
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

export {};
