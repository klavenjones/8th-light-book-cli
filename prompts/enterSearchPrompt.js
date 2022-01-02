var inquirer = require("inquirer");
const chalk = require("chalk");
const Errors = require("../utils/errorMessages");
const { searchBooks } = require("../utils/searchBooks");

const searchQuestion = [
  {
    type: "input",
    name: "query",
    description: "Search for the books you want to see",
    message: "Enter the search term:"
  }
];

function enterSearchPrompt(menuCallback) {
  try {
    if (!menuCallback) {
      Errors.callbackFnError();
    }
    inquirer
      .prompt(searchQuestion)
      .then((answer) => searchBooks(answer.query))
      .then(() => menuCallback());
  } catch (error) {
    return error;
  }
}

module.exports = {
  enterSearchPrompt
};
