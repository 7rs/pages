const SocialServices = {
    YouTube: "www.youtube.com",
    GitHub: "github.com",
    Zenn: "zenn.dev",
    Patreon: "www.patreon.com",
    Pinterest: "www.pinterest.com",
    X: "twitter.com",
} as const;
type SocialServices = (typeof SocialServices)[keyof typeof SocialServices];

const SocialIcons = {
    YouTube: "simple-icons:youtube",
    GitHub: "simple-icons:github",
    Zenn: "simple-icons:zenn",
    Patreon: "simple-icons:patreon",
    Pinterest: "simple-icons:pinterest",
    X: "simple-icons:x",
} as const;
type SocialIcons = (typeof SocialIcons)[keyof typeof SocialIcons];

interface SocialService {
    url: SocialServices;
    icon?: SocialIcons;
}

export function createSocialLink(name: string): SocialService | undefined {
    name = name.toLowerCase();

    switch (name) {
        case "youtube":
            return { url: SocialServices.YouTube, icon: SocialIcons.YouTube };
        case "x":
        case "twitter":
            return { url: SocialServices.X, icon: SocialIcons.X };
        case "pinterest":
            return { url: SocialServices.Pinterest, icon: SocialIcons.Pinterest };
        case "patreon":
            return { url: SocialServices.Patreon, icon: SocialIcons.Patreon };
        case "github":
            return { url: SocialServices.GitHub, icon: SocialIcons.GitHub };
        case "zenn":
            return { url: SocialServices.Zenn, icon: SocialIcons.Zenn };
        default:
            return undefined;
    }
}

