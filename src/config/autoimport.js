import fg from "fast-glob";
import { minimatch } from "minimatch";
import path from "path";
import autoImportComponentFlowbite from "./auto-import-flowbite";
import autoImportComponentReactIcons from "./auto-import-react-icons";

function pascalCaseWithCapitals(str) {
  return str
    .split("/")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

function removeExtension(str) {
  return path.basename(str, path.extname(str));
}

function getComponentImports(exportDefault = true) {
  const directories = [
    {
      pattern: "./src/components/**/*.{tsx,jsx}",
      omit: "./src/components",
    },
    {
      pattern: "./src/layouts/*.{tsx,jsx}",
      omit: "./src/layouts",
    },
    {
      pattern: "./src/pages/*.{tsx,jsx}",
      omit: "./src",
    },
  ];

  const entries = fg.sync(
    directories.map((x) => x.pattern),
    {
      dot: true,
      objectMode: true,
    }
  );

  // Fix data not valid Type
  function covertToObject(data) {
    let tam = {};
    data.forEach((i) => {
      tam = { ...tam, ...i };
    });
    return tam;
  }

  return covertToObject(
    entries.map((entry) => {
      const dirOptions = directories.find((dir) =>
        minimatch(entry.path, dir.pattern)
      ) || { omit: "" };

      const componentName = entry.path
        .replace(new RegExp(dirOptions.omit, "gi"), "")
        .split("/")
        .filter(Boolean)
        .map(pascalCaseWithCapitals)
        .join("");

      const fromPath = entry.path.replace(/\.\/src/gi, "@");

      return {
        [fromPath]: [
          [
            exportDefault ? "default" : removeExtension(entry.name),
            removeExtension(componentName),
          ],
        ],
      };
    })
  );
}

const imports = getComponentImports(true);
const flowbiteImports = autoImportComponentFlowbite();
const ReactIconsImports = autoImportComponentReactIcons();

export const configAutoImport = {
  dts: "./auto-imports.d.ts",
  defaultExportByFilename: true,
  eslintrc: {
    enabled: true,
    filepath: "./.eslintrc-auto-import.json",
    globalsPropValue: true,
  },
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
  ],
  dirs: ["./src/hooks"],
  vueTemplate: false,
  imports: [
    "react",
    "react-router-dom",
    {
      'react-router-dom': [['BrowserRouter','BrowserRouter']]
    },
    imports,
    flowbiteImports,
    ReactIconsImports,
  ],
};
console.log(
  "🚀 ~ export  configAutoImport.getComponentImports:",
  flowbiteImports
);
