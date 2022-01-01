var inquirer = require("inquirer");
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
      throw new Error("Invalid menu callback function passed for menu");
    }
    inquirer
      .prompt(searchQuestion)
      .then((answer) => searchBooks(answer.query))
      .then(() => menuCallback());
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = {
  enterSearchPrompt
};
