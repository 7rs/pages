export function getRawTextContent(textContent: string) {
  return textContent
    .replace(/^import\s.+?from\s.+?;?$/gm, "")
    .replace(/<\/?[\w\d]+(?:\s[^>]*)?>/g, "")
    .replace(/\s+/g, "");
}
