declare module '*.astro' {
  const component: unknown;
  export default component;
}

declare module 'astro-icon/components' {
  import type { HTMLAttributes } from "astro/types";

  interface Props extends HTMLAttributes<'svg'> {
    name: Icon;
    'is:inline'?: boolean;
    title?: string;
    desc?: string;
    size?: number | string;
    width?: number | string;
    height?: number | string;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function Icon(_props: Props): any;
}
