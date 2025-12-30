// シェーダー用の型定義
export interface ShaderSources {
  vertex: string;
  fragment: string;
  postVertex: string;
  postFragment: string;
  backgroundVertex: string;
  backgroundFragment: string;
}

// 変換用の型定義
export interface Transform {
  scale: number;
  translateX: number;
  translateY: number;
  rotation?: number;
}

// パス用の型定義
export interface Path {
  vertices: number[];
  color: number[];
  transform: Transform;
}

