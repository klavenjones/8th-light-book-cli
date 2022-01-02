const chalk = require("chalk");
const fs = require("fs");
const Errors = require("../utils/errorMessages");

async function printBookList() {
  await fs.readFile("book-list.txt", "utf8", (error, list) => {
    if (error) {
      Errors.bookListError();
    } else if (!list) {
      Errors.emptyBookListError();
    } else {
      console.log(
        chalk.cyan.inverse.bold(`\n\nYour Reading List:\n`) +
          chalk.cyan(`________________________________\n`) +
          chalk.white(`${list}\n`) +
          chalk.cyan.bold(
            `\nPress up or down on the keyboard to go back to the main menu`
          )
      );
    }
  });
}

module.exports = {
  printBookList
};
