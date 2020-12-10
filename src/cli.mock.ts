import { Command } from "commander";
import { CliHandler } from "./cli";

const command = new Command();

const init = new CliHandler(command);

init.init();