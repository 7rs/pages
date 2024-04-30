export const SchemeStatus = {
  System: 'system',
  Light: 'light',
  Dark: 'dark',
} as const;
export type SchemeStatus = (typeof SchemeStatus)[keyof typeof SchemeStatus];
