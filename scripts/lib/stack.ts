export interface Stack {
    name: string;
    url: string;
    icon: string;
}

export interface StackList {
    label: string;
    stacks: Stack[];
}

export function createStack(name: string, url: string, icon: string): Stack {
    return { name: name, url: url, icon: icon } as Stack;
}

export function createStackList(label, ...stack: Stack[]): StackList {
    return { label: label, stacks: [...stack] } as StackList;
}
