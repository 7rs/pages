import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default function PagesUI() {
  return {
    name: "@7rs/pages-ui",
    hooks: {
      "astro:config:setup": ({ updateConfig, injectScript }) => {
        injectScript("page-ssr", `import "@7rs/pages-ui/src/tailwind.css";`);
        updateConfig({
          vite: {
            plugins: [tailwindcss()],
          },
          integrations: [
            icon({
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
            }),
          ],
        });
      },
    },
  };
}
