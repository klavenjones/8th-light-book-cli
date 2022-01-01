const readline = require("readline");
const { clearConsole } = require("../utils/clearConsole");

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function getKeyPress() {
  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") {
      process.exit();
    } else if (key.name === "up" || key.name === "down") {
      clearConsole();
    }
  });
}

module.exports = {
  getKeyPress
};
