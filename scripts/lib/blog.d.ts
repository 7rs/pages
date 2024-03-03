import { Langs, Locale } from "@lib/locale"

export type PostData = {
    localeDatas: Array<Locale>;
    datas: Array<any>;
};

type PostMap = Map<string, PostData>;

declare function getPostId(filePath: string): string

export declare function getPostMap(): Promise<PostMap>
