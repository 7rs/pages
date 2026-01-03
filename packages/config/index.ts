export { getAliases } from "./src/alias.ts";

export const svgoOptions = {
  svgoOptions: {
    multipass: true,
    plugins: [
      {
        name: "convertPathData",
        params: {
          floatPrecision: 2,
        },
      },
    ],
  },
};

export const playformCompressOptions = {
  HTML: {
    "html-minifier-terser": {
      sortClassName: false,
    },
  },
};

export const compressorOption = { gzip: false, brotli: true };
