const chalk = require("chalk");
const Errors = require("../utils/errorMessages");
const { getKeyPress } = require("../utils/getKeyPress");
const { printBookList } = require("../utils/printBookList");

function getList(menuCallback) {
  try {
    if (!menuCallback) {
      Errors.callbackFnError();
    }
    printBookList();
    getKeyPress();
    menuCallback();
  } catch (error) {
    console.log(chalk.red("Something went wrong"));
    return error;
  }
}

module.exports = {
  getList
};
