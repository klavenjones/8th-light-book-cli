var inquirer = require("inquirer");
const { enterSearchPrompt } = require("./enterSearchPrompt");
const { getList } = require("./getList");
const { saveBookPrompt } = require("./saveBookPrompt");
const { farewellMessage } = require("../utils/printMessages");
const { clearConsole } = require("../utils/clearConsole");

const questions = [
  {
    type: "list",
    name: "Welcome",
    description:
      "Hello! Welcome to the Books Command Line Application. What would you like to do?",
    choices: [
      "Search Books",
      "List Books",
      "Save Books",
      new inquirer.Separator(),
      "Exit Application"
    ]
  }
];

function menuPrompt() {
  inquirer.prompt(questions).then((answer) => {
    const { Welcome } = answer;
    if (Welcome === "Search Books") {
      clearConsole();
      enterSearchPrompt(menuPrompt);
    } else if (Welcome === "List Books") {
      getList(menuPrompt);
    } else if (Welcome === "Save Books") {
      clearConsole();
      saveBookPrompt(menuPrompt);
    } else {
      clearConsole();
      farewellMessage();
      return;
    }
  });
}

module.exports = {
  menuPrompt
};
