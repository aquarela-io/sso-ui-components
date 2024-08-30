import fs from "fs";
import packageJson from "../package.json" assert { type: "json" };

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

fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));

console.log(`Pacote preparado para publicação em: ${target}`);
