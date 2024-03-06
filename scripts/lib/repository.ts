export const Hostings = {
    GitHub: "github.com",
    GitLab: "gitlab.com",
} as const;

export type Hostings = (typeof Hostings)[keyof typeof Hostings];
