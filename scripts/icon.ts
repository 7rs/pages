import _simpleIcons from "@iconify-json/simple-icons/icons.json" with { type: "json" };
import type { IconifyJSONIconsData } from "@iconify/types";

type Provider = [string, IconifyJSONIconsData];
export interface Icon {
  provider: string;
  name: string;
}

export function hasIcon(iconName: string): Icon | undefined {
  const slug = iconName.toLocaleLowerCase();
  const providers = [["simple-icons", _simpleIcons]] as Provider[];

  for (const provider of providers) {
    if (!Object.prototype.hasOwnProperty.call(provider[1].icons, slug)) {
      continue;
    }

    return {
      provider: provider[0],
      name: slug,
    };
  }
}
