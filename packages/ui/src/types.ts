export interface IconProfile {
  id: string;
  label: string;
}

export const IconAliases = {
  youtube: { id: "simple-icons:youtube", label: "YouTube" },
  discord: { id: "simple-icons:discord", label: "Discord" },
  github: { id: "simple-icons:github", label: "GitHub" },
  patreon: { id: "simple-icons:patreon", label: "Patreon" },
  zenn: { id: "simple-icons:zenn", label: "Zenn" },
} as const;
export type IconAliases = (typeof IconAliases)[keyof typeof IconAliases];

export const IconAliasKeys = Object.keys(IconAliases);
