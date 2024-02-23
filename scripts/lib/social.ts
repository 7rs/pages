export type Social = {
    iconName: string;
    description: string;
    url: string;
}

export type SocialType = {
    originUrl: string;
    needAtSign: boolean;
    iconName: string;
    description: string;
}

export type SocialAlias = {
    alias: string;
    userId: string;
}

export const SocialTypes = {
    Youtube: {
        originUrl: "youtube.com",
        needAtSign: true,
        iconName: "simple-icons:youtube",
        description: "The world's #1 video-sharing platform.",
    } as SocialType,
    Twitch: {
        originUrl: "twitch.tv",
        needAtSign: false,
        iconName: "simple-icons:twitch",
        description: "Live streaming platform for gamers."
    } as SocialType,
    Tiktok: {
        originUrl: "tiktok.com",
        needAtSign: true,
        iconName: "simple-icons:tiktok",
        description: "Platform for short video sharing."
    } as SocialType,
    Pinterest: {
        originUrl: "pinterest.com",
        needAtSign: false,
        iconName: "simple-icons:pinterest",
        description: "Social media service for image sharing."
    } as SocialType,
    AppleMusic: {
        originUrl: "music.apple.com/profile",
        needAtSign: false,
        iconName: "simple-icons:applemusic",
        description: "Music streaming service for Apple users."
    } as SocialType,
    Github: {
        originUrl: "github.com",
        needAtSign: false,
        iconName: "simple-icons:github",
        description: "Powerful git hosting service.",
    } as SocialType,
    Gitlab: {
        originUrl: "gitlab.com",
        needAtSign: false,
        iconName: "simple-icons:gitlab",
        description: "Open source git hosring service.",
    } as SocialType,
    InternetArchive: {
        originUrl: "archive.org/details",
        needAtSign: true,
        iconName: "simple-icons:internetarchive",
        description: "Archives for Electronic library, Time travel on Internet and More medias etc."
    } as SocialType,
    Patreon: {
        originUrl: "patreon.com",
        needAtSign: false,
        iconName: "simple-icons:patreon",
        description: "Crowdfunding service for creators"
    } as SocialType,
    Paypal: {
        originUrl: "paypal.me",
        needAtSign: false,
        iconName: "simple-icons:paypal",
        description: "World-wide online payment service."
    } as SocialType,
    Reddit: {
        originUrl: "reddit.com",
        needAtSign: false,
        iconName: "simple-icons:reddit",
        description: "Powerful BBS site for communites."
    } as SocialType,
    Zenn: {
        originUrl: "zenn.dev",
        needAtSign: false,
        iconName: "simple-icons:zenn",
        description: "Modern community for engineers.",
    } as SocialType,
    Qiita: {
        originUrl: "qiita.com",
        needAtSign: false,
        iconName: "simple-icons:qiita",
        description: "Traditional community for developers.",
    } as SocialType,
    X: {
        originUrl: "x.com",
        needAtSign: false,
        iconName: "simple-icons:x",
        description: "Social Network Services in short sentences."
    } as SocialType,
    Mastodon: {
        originUrl: "mastodon.social",
        needAtSign: true,
        iconName: "simple-icons:mastodon",
        description: "Open-source social network services"
    } as SocialType,
    MastodonCloud: {
        originUrl: "mastodon.cloud",
        needAtSign: true,
        iconName: "simple-icons:mastodon",
        description: "Mastodon in French."
    } as SocialType,
    MastodonJp: {
        originUrl: "mstdn.jp",
        needAtSign: true,
        iconName: "simple-icons:mastodon",
        description: "Mastodon in Japanese."
    } as SocialType,
    DiscordServer: {
        originUrl: "discord.gg",
        needAtSign: false,
        iconName: "simple-icons:discord",
        description: "Group chat application for gamers.",
    } as SocialType,
    Telegram: {
        originUrl: "t.me",
        needAtSign: false,
        iconName: "simple-icons:telegram",
        description: "Secure message application with open-source client.",
    } as SocialType,
}

function getSocialTypeWithAlias(alias: string): SocialType {
    switch (alias) {
        case "youtube":
        case "yt":
            return SocialTypes.Youtube;
        case "twitch":
        case "ttv":
            return SocialTypes.Twitch;
        case "tiktok":
            return SocialTypes.Tiktok;
        case "pinterest":
            return SocialTypes.Pinterest;
        case "applemusic":
            return SocialTypes.AppleMusic;
        case "github":
        case "gh":
            return SocialTypes.Github;
        case "gitlab":
        case "gl":
            return SocialTypes.Gitlab;
        case "internetarchive":
        case "archive":
        case "waybackmachine":
        case "wayback":
            return SocialTypes.InternetArchive;
        case "patreon":
            return SocialTypes.Patreon;
        case "paypal":
            return SocialTypes.Paypal;
        case "reddit":
            return SocialTypes.Reddit;
        case "zenn":
            return SocialTypes.Zenn;
        case "qiita":
            return SocialTypes.Qiita;
        case "x":
        case "twitter":
            return SocialTypes.X;
        case "mastodon":
        case "mstdn":
        case "mastodon.social":
            return SocialTypes.Mastodon;
        case "mastodon.cloud":
            return SocialTypes.MastodonCloud;
        case "mstdn.jp":
        case "mastodon.jp":
            return SocialTypes.MastodonJp;
        case "discord":
            return SocialTypes.DiscordServer;
        case "telegram":
            return SocialTypes.Telegram;
        default:
            throw new Error("Not found alias.");
    }
}

function generateURL(socialType: SocialType, userId: string): string {
    return `https://${socialType.originUrl}/${socialType.needAtSign ? "@" : ""}${userId}`
}

export function createSocial(alias: string, userId: string): Social {
    const socialType = getSocialTypeWithAlias(alias);

    return {
        iconName: socialType.iconName,
        description: socialType.description,
        url: generateURL(socialType, userId),
    } as Social;
}

export function createSocialList(aliasList: Array<SocialAlias>): Array<Social> {
    const socialList = new Array<Social>();
    for (const alias of aliasList) {
        socialList.push(createSocial(alias.alias, alias.userId));
    }

    return socialList;
}

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

