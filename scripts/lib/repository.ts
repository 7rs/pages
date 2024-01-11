export type Lang = {
    name: string;
    icon?: string;
    description: string;
    url: string;
}

export type License = {
    name: string;
    icon?: string;
    description: string;
    url: string;
}

export const Langs = {
    Python: {
        name: "Python",
        icon: "simple-icons:python",
        description: "Interpreter language with simple syntax.",
        url: "https://www.python.org/",
    } as Lang,
    Lua: {
        name: "Lua",
        icon: "simple-icons:lua",
        description: "Script language with simple syntax.",
        url: "https://www.lua.org/",
    } as Lang,
    Thrift: {
        name: "Thrift",
        icon: "simple-icons:apache",
        description: "RPC framework by Facebook.",
        url: "https://thrift.apache.org/",
    } as Lang,
    Astro: {
        name: "Astro",
        icon: "simple-icons:astro",
        description: "All-in-one web framework for content-driven websites.",
        url: "https://astro.build/",
    } as Lang,
}

export function createLang(alias: string): Lang | undefined {
    switch (alias) {
        case "python":
        case "python3":
        case "py":
            return Langs.Python;
        case "lua":
            return Langs.Lua;
        case "thrift":
            return Langs.Thrift;
        case "astro":
        case "astrojs":
            return Langs.Astro;
        default:
            return;
    }
}

export const Licenses = {
    NoLicense: {
        name: "No license",
        icon: "material-symbols:copyright-outline",
        description: "No license granted.",
        url: "https://ja.wikipedia.org/wiki/All_rights_reserved",
    } as License,
    PDM: {
        name: "PDM 1.0 Deed",
        icon: "cib:creative-commons-pd",
        description: "Waiver of Intellectual Property Rights.",
        url: "https://creativecommons.org/publicdomain/mark/1.0",
    } as License,
    WTFPL: {
        name: "WTFPL",
        icon: "wtfpl",
        description: "Do What the Fuck You Want to Public License.",
        url: "http://www.wtfpl.net/",
    } as License,
    CC0: {
        name: "CC0",
        icon: "cib:creative-commons-zero",
        description: "No Rights Reserved.",
        url: "https://creativecommons.org/public-domain/cc0/",
    } as License,
    AGPL: {
        name: "AGPL",
        description: "GPL for software on the network.",
        url: "https://www.gnu.org/licenses/agpl-3.0",
    } as License,
    OFL: {
        name: "OFL 1.1",
        description: "Open source license for fonts.",
        url: "https://openfontlicense.org/",
    }
}

export function createLicense(alias: string): License {
    switch (alias) {
        case "pdm":
        case "publicdomain":
        case "publicdomainmark":
            return Licenses.PDM;
        case "wtfpl":
            return Licenses.WTFPL;
        case "cc0":
            return Licenses.CC0;
        case "agpl":
        case "afferogpl":
            return Licenses.AGPL;
        case "ofl":
            return Licenses.OFL;
        default:
            return Licenses.NoLicense;
    }
}
