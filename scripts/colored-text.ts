export function isTextStart(className: string) {
  for (const property of className.split(" ")) {
    if (property === "text-start") {
      return true;
    }
  }

  return false;
}

export function getLinearDirection(className: string) {
  const properties = className.split(" ");
  if (properties.includes("text-end")) {
    return "bg-linear-to-l";
  }

  return "bg-linear-to-r"
}
