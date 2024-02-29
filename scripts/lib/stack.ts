export interface Stack {
    name: string;
    url: string;
    icon: string;
}

export function createStack(name: string, url: string, icon: string): Stack {
    return { name: name, url: url, icon: icon } as Stack;
}
