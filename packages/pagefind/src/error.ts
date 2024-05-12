export const PagefindErrors = {
  FailedImport: "Pagefind script couldn't be imported.",
  FailedSearch: 'Searching is failed.',
} as const;

export type PagefindErrors = (typeof PagefindErrors)[keyof typeof PagefindErrors];

export function getErrorMessage(errorMessage: PagefindErrors, e: Error): string {
  console.error(e);
  return errorMessage;
}
