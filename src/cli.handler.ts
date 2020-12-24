import commander, { Command } from "commander";
import TemplateBuilder from "./TemplateBuilder";

class CliHandler {
  private cmd = new Command();

  public init() {
    this.cmd
      .option("-i, --init [type]", "create template")
      .option("--setUsername <type>", "set username")
      .option("--setEmail <type>", "set email address")
      .option("--setKey <type>", "set api key")
      .option("--setIp <type>", "set ip/url and port, i.e localhost:3000")
      .option("--upload");

    this.cmd.parse(process.argv);

    if (this.cmd.setEmail) {

      // get email and store it in sqlite3 db
      // or in .json file?
      console.log(this.cmd.setEmail);
    }

    if (this.cmd.setUsername) {
      
    }

    if (this.cmd.setKey) {
      // should we keep keys local (per project) or global with email?
    }

    if (this.cmd.setIp) {
      // should we keep ip/urls (per project)?
    }

    if (this.cmd.init) {
      appInit()
    }

    if (this.cmd.upload) {
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
  }
}

async function appInit() {
  const cwd = process.cwd();

  await TemplateBuilder.Make(cwd);
}

export { CliHandler };
