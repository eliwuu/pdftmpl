import { execSync } from "child_process";
import path from "path";

function gitInit(repoName: string, dirPath: string) {
  const currentDir = process.cwd();
  process.chdir(path.join(currentDir, dirPath));
  execSync("git init");
  process.chdir(currentDir);
}

function gitAdd(dirPath: string) {
  const currentDir = process.cwd();
  process.chdir(path.join(process.cwd(), dirPath));
  execSync("git add .");
  execSync("git commit");

  process.chdir(currentDir);
}

export { gitInit, gitAdd };
