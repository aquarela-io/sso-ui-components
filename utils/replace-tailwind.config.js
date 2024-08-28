import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the Tailwind config in the package
const packageConfigPath = path.resolve(__dirname, "../tailwind.config.ts");

// Paths relative to the root of the user's project
const projectRoot = path.resolve(process.cwd());
const projectConfigPath = path.join(projectRoot, "tailwind.config.ts");
const backupConfigPath = path.join(projectRoot, "tailwind.config.old.ts");
const diffFilePath = path.join(projectRoot, "tailwind.config.diff.txt");

// Create a readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to prompt the user and handle the replacement
const promptUser = () => {
  return new Promise((resolve) => {
    rl.question(
      "The tailwind.config.ts file will be replaced to ensure it works properly. If you already have everything configured, press N. To continue, press Y: ",
      (answer) => {
        resolve(answer.trim().toLowerCase());
      }
    );
  });
};

// Function to generate a diff file
const generateDiffFile = () => {
  try {
    // Check if `diff` command is available (works on Unix-based systems)
    execSync(
      `diff -u ${backupConfigPath} ${packageConfigPath} > ${diffFilePath}`,
      {
        stdio: "ignore",
      }
    );
    console.info("Diff file created: tailwind.config.diff.txt");
  } catch (error) {
    console.warn(
      "Could not create a diff file. Ensure the diff command is available on your system."
    );
  }
};

(async () => {
  try {
    const userAnswer = await promptUser();
    rl.close();

    if (userAnswer === "y") {
      if (fs.existsSync(projectConfigPath)) {
        // Rename the existing tailwind.config.ts to tailwind.config.old.ts
        fs.renameSync(projectConfigPath, backupConfigPath);
        console.info(
          `Existing tailwind.config.ts renamed to tailwind.config.old.ts`
        );
      }

      if (fs.existsSync(packageConfigPath)) {
        // Copy the new tailwind.config.ts from the package to the root of the project
        fs.copyFileSync(packageConfigPath, projectConfigPath);
        console.info(
          "New tailwind.config.ts copied to the root of the project."
        );

        // Generate a diff file to show the differences
        if (fs.existsSync(backupConfigPath)) {
          generateDiffFile();
        }
      } else {
        console.error(
          `Error: The source tailwind.config.ts file was not found at ${packageConfigPath}.`
        );
      }
    } else {
      console.info("Operation cancelled. No changes were made.");
    }
  } catch (error) {
    console.error("Error during the update process:", error);
  }
})();
