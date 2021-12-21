#!/usr/bin/env node
const { welcomeMessage } = require("../utils/printMessages");
const { menuPrompt } = require("../prompts/menuPrompt");

function main() {
  welcomeMessage();
  menuPrompt();
}

main();
