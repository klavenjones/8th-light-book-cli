var inquirer = require("inquirer");
const { addBookToList } = require("../utils/addBookToList");

const saveQuestion = [
  {
    type: "input",
    name: "query",
    description: "Please Enter the volume ID for the book you want to save",
    message: "Enter ID of the book:"
  }
];

function saveBookPrompt(menuCallback) {
  try {
    if (!menuCallback || undefined) {
      throw new Error("Invalid menu callback function passed for menu");
    }
    inquirer
      .prompt(saveQuestion)
      .then(async (answer) => {
        await addBookToList(answer.query);
      })
      .then(() => menuCallback());
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = {
  saveBookPrompt
};
