export interface Headings {
  [key: string]: any;
  depth: number;
  slug: string;
  text: string;
}

export function formatDate(dateObject: Date): string {
  if (typeof dateObject === 'string') {
    dateObject = new Date(dateObject);
  }

  const year = String(dateObject.getFullYear()).padStart(4, '0');
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const date = String(dateObject.getDate()).padStart(2, '0');

  return `${year}-${month}-${date}`;
}
