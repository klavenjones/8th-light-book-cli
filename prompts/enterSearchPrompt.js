var inquirer = require("inquirer");
const chalk = require("chalk");
const Errors = require("../utils/errorMessages");
const { searchBooks } = require("../utils/searchBooks");
const { printResponse } = require("../utils/printResponse");

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
      .then(async (answer) => {
        const books = await searchBooks(answer.query);
        if (books && answer.query) {
          printResponse(answer.query, books?.data?.items);
        }
      })
      .then(() => menuCallback());
  } catch (error) {
    return error;
  }
}

module.exports = {
  enterSearchPrompt
};
