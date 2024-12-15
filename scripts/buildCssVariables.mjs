import { themeVariables } from "../src/config/theme.mjs";
import fs from "fs/promises";
import path from "path";

(async () => {
  const cssPath = path.resolve("src/styles/variables.css");

  try {
    // Le o arquivo JSON
    const theme = themeVariables;

    // Gera o conteúdo CSS com as variáveis
    const cssContent = Object.entries(theme)
      .map(([key, value]) => `--${key}: ${value};`)
      .join("\n");

    // Escreve o conteúdo no arquivo CSS
    await fs.writeFile(cssPath, `:root {\n${cssContent}\n}`, "utf-8");
    console.log("CSS variables built successfully.");
  } catch (error) {
    console.error("Failed to build CSS variables:", error);
    process.exit(1);
  }
})();
