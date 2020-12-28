import { Command } from "commander";
import { existsSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import { PackageHandler } from "./package.handler";
import TemplateBuilder from "./TemplateBuilder";
import os from "os";

interface AppSettings {
  username: string;
  userkey: string;
  useremail: string;
  ip: string;
}
class CliHandler {
  private cmd = new Command();

  public init() {
    this.cmd
      .option("-i, --init [type]", "create template")
      .option("--setUsername <type>", "set username")
      .option("--setEmail <type>", "set email address")
      .option("--setKey <type>", "set api key")
      .option("--setIp <type>", "set ip/url and port, i.e localhost:3000")
      .option(
        "--upload <type>",
        'upload template folder --upload "package name"'
      )
      .option("--global", "sets global options");

    this.cmd.parse(process.argv);

    if (this.cmd.setEmail) {
      this.setSettings({useremail: this.cmd.setEmail});
    }

    if (this.cmd.setUsername) {
      this.setSettings({username: this.cmd.setUsername});
    }

    if (this.cmd.setKey) {
      this.setSettings({userkey: this.cmd.setKey});
    }

    if (this.cmd.setIp) {
      this.setSettings({ip: this.cmd.setIp});
    }

    if (this.cmd.init) {
      appInit();
    }

    if (this.cmd.upload) {
      this.handleUpload(this.cmd.upload, true);
      // load user credentials
      // load ip/url [prefer url instead of ip addresses due to vulnerabilities that may leak server credentials in ssrf]
      // validate folder, select files and folders from manifest
      // calculate uncompressed checksum
      // shadowcopy them/add them directly to zip file
      // zip them, calculate zip checksum
      // get zip file as a buffer, send it to ip/url
      // report back status
      // log error on stdout if problems
    }
    if (this.cmd.global) {
      console.log(this.cmd.opts);
    }
  }

  private handleUpload(templateName: string, toFile?: boolean) {
    const wd = process.cwd();
    console.log(templateName);

    // check if folder exist
    if (!existsSync(path.join(wd, templateName))) {
      console.log(`Template ${templateName} doesn't exist.`);
    }

    const pkg = new PackageHandler(wd);

    const data = pkg.zipPackage(templateName, { toFile });

    let hash: string;
    if (toFile) {
      const rzip = readFileSync(path.join(wd, templateName + ".zip"));
      hash = pkg.checksum(rzip);
    } else {
      hash = pkg.checksum(data as Buffer);
    }

    console.log(hash);
  }

  private checkSettings() {
    const homedir = os.homedir();

    if (!existsSync(path.join(homedir, ".pdfcli"))) return false;

    return true;
  }

  private readSettings() {
    const localPath = path.join(process.cwd(), ".pdfcli");
    const globalPath = path.join(os.homedir(), ".pdfcli");
    if (existsSync(localPath))
      return <AppSettings>(
        JSON.parse(readFileSync(localPath, { encoding: "utf-8" }))
      );

    if (existsSync(globalPath))
      return <AppSettings>(
        JSON.parse(readFileSync(globalPath, { encoding: "utf-8" }))
      );

    return undefined;
  }

  private setSettings(
    settings: {
      username?: string;
      userkey?: string;
      useremail?: string;
      ip?: string;
    },
    global?: boolean
  ) {
    const homedir = os.homedir();
    const globalPath = path.join(homedir, ".pdfcli");

    const load = readFileSync(globalPath, { encoding: "utf-8" });

    const data: AppSettings = JSON.parse(load);

    settings.ip ? (data.ip = settings.ip) : data.ip;
    settings.useremail ? (data.useremail = settings.useremail) : data.useremail;
    settings.userkey ? (data.userkey = settings.userkey) : data.userkey;
    settings.username ? (data.username = settings.username) : data.username;

    if (global) {
      writeFileSync(globalPath, JSON.stringify(data), { encoding: "utf-8" });

      return;
    }

    const localPath = path.join(process.cwd(), ".pdfcli");

    writeFileSync(localPath, data, { encoding: "utf-8" });
    return;
  }
}

async function appInit() {
  const cwd = process.cwd();

  await TemplateBuilder.Make(cwd);
}

export { CliHandler };
