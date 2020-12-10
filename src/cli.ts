import commander, { Command } from "commander";

class CliHandler {
  constructor(private readonly cmd: commander.Command) {
    this.cmd = new Command();
  }

  public init() {
    this.cmd
      .option("-i, --init [type]", "create template")
      .option("--setEmail <type>", "set email address")
      .option("--setKey <type>", "set api key")
      .option("--setIp <type>", "set ip/url and port, i.e localhost:3000")
      .option("--upload");

    this.cmd.parse(process.argv);

    if(this.cmd.setEmail) {
        console.log(this.cmd.setEmail);
    }

    if (this.cmd.init) {
        console.log("template init");
    }
  }
}

export { CliHandler };
