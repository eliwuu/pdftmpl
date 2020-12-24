import { execSync } from "child_process";
import path from "path";

function gitInit(repoName: string) {
  const currentDir = process.cwd();
  process.chdir(path.join(currentDir, repoName));
  execSync("git init");
  process.chdir(currentDir);
}

function gitAdd(templateName: string) {
  const currentDir = process.cwd();
  process.chdir(path.join(process.cwd(), templateName));
  execSync("git add .");
  execSync("git commit -m \"created\"");

  process.chdir(currentDir);
}

export { gitInit, gitAdd };
