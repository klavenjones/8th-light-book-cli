var inquirer = require("inquirer");
const Errors = require("../utils/errorMessages");
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
      Errors.callbackFnError();
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
