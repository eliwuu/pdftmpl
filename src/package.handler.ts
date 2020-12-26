import AdmZip from "adm-zip";
import { readdirSync, statSync } from "fs";
import path from "path";

class PackageHandler {
  constructor(private readonly folderPath: string) {}

  public async preaparePackage(templatePath: string, templateName: string) {}

  public zipPackage(packageName: string) {
    const zip = new AdmZip();

    const templatePath = path.join(this.folderPath, packageName);

    const content = this.scanFolder(templatePath).flat();

    for (const item of content) {
      console.log(item);
      zip.addLocalFile(item);
    }

    zip.writeZip(packageName + ".zip");
  }

  public zipFolder(packageName: string) {
    const zip = new AdmZip();

    const templatePath = path.join(this.folderPath, packageName);

    // zip.addLocalFolder(templatePath, this.folderPath, /(\\\.)\w+/g);
    zip.addLocalFolder(templatePath);

    zip.writeZip(packageName + "h" + ".zip");
  }
  private scanFolder(
    nextDir: string,
    currentDir?: string
  ): (string | string[])[] {
    if (currentDir) {
      nextDir = path.join(currentDir, nextDir);
    }

    const fileContent: any = [];
    const content = readdirSync(nextDir);

    for (let item of content) {
      if (item.startsWith(".")) {
        continue;
      }

      let itemPath = path.join(nextDir, item);

      if (statSync(itemPath).isDirectory()) {
        fileContent.push(this.scanFolder(item, nextDir).flat());
      }

      if (statSync(itemPath).isFile()) {
        fileContent.push(itemPath);
      }
    }

    return fileContent;
  }
}

interface IPackageHandler {
  preparePackage(templatePath: string, templateName: string);
  zipPackage(path);
  postPackage(data: Buffer, handshake: Handshake);
}

export { PackageHandler };
