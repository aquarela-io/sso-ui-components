import fs from "fs";
import packageJson from "../package.json" assert { type: "json" };

// Verifica se o primeiro argumento passado ao script é 'npm' ou 'github'
const target = process.argv[2];

if (target === "npm") {
  packageJson.name = "@aquarela/sso-ui-components";
  packageJson.publishConfig = {
    registry: "https://registry.npmjs.org/",
  };
} else if (target === "github") {
  packageJson.name = "@aquarela-io/sso-ui-components";
  packageJson.publishConfig = {
    registry: "https://npm.pkg.github.com/",
  };
} else {
  console.error('Especifique "npm" ou "github" como argumento.');
  process.exit(1);
}

// Escreve o package.json modificado de volta ao sistema de arquivos
fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));

console.log(`Pacote preparado para publicação em: ${target}`);
