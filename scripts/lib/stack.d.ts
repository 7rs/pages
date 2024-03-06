export interface Stack {
    name: string;
    url: string;
    icon: string;
}

export interface StackList {
    label: string;
    stacks: Stack[];
}

export declare function createStack(name: string, url: string, icon: string): Stack

export declare function createStackList(label, ...stack: Stack[]): StackList
