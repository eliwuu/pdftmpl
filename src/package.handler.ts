import AdmZip from "adm-zip";
import { readdirSync, readFileSync, statSync } from "fs";
import path from "path";
import crypto from "crypto";
class PackageHandler {
  fileManifest?: string[];
  constructor(private readonly folderPath: string) {}

  public zipPackage(
    packageName: string,
    options?: { toFile?: boolean }
  ): void | Buffer {
    const zip = new AdmZip();

    const templatePath = path.join(this.folderPath, packageName);

    const content = this.scanFolder(templatePath, true);
    this.fileManifest = content;
    console.log(JSON.stringify(content));
    
    for (const item of content) {
      if (item.charAt(item.length - 1) !== "/") {
        const rel = path.relative(templatePath, item);
        zip.addFile(rel, readFileSync(item));
      } else {
        const base = path.basename(item);
        zip.addFile(base + "/", Buffer.alloc(0));
      }
    }

    if (options?.toFile) {
      console.log("we should be saving file");
      zip.writeZip(packageName + ".zip");

      return;
    }

    return zip.toBuffer();
  }

  public zipLargePackage() {
    // implement memory-efficient zip (write in chunks);
  }

  public checksum(data: string | Buffer) {
    const cr = crypto;

    return cr.createHash("sha256").update(data).digest("hex");
  }

  private scanFolder(dir: string, recursive?: boolean): string[] {
    let fileList: string[] = [];
    const content = readdirSync(dir);

    for (let item of content) {
      if (item.startsWith(".")) continue;

      let itemPath = path.join(dir, item);

      if (statSync(itemPath).isDirectory() && recursive)
        fileList = fileList.concat(this.scanFolder(itemPath, recursive));

      fileList.push(
        path.normalize(itemPath) +
          (statSync(itemPath).isDirectory() ? path.sep : "")
      );
    }

    return fileList;
  }
}

export { PackageHandler };
