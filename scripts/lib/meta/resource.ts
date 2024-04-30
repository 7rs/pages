export interface ThemeColor {
  light: string;
  dark?: string;
}

export interface Image {
  src: string;
  format?: string;
  media?: string;
}

export interface Resources {
  images?: Image[];
  fonts?: string[];
  useCloudflareFonts?: boolean;
}

export interface Backgrounds {
  light: ImageMetadata;
  dark?: ImageMetadata;
  options?: { [key: string]: any; format: string; quality: number };
  resolution?: number;
}
