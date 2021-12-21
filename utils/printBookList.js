const { default: chalk } = require("chalk");
const fs = require("fs");

async function printBookList() {
  await fs.readFile("book-list.txt", "utf8", (error, list) => {
    if (error) {
      console.error(
        chalk.inverse.red.bold(
          `\n\nThere was an issue finding your list. ${error.message}\n`
        )
      );
    } else if (!list) {
      console.error(
        chalk.inverse.red.bold(
          `\n\nUnfortunately, your list is empty ${error.message}\n`
        )
      );
    } else {
      console.log(
        chalk.cyan.inverse.bold(`\n\n\nYour Reading List:\n`) +
          chalk.cyan(`________________________________\n`) +
          chalk.white(`\n${list}\n`) +
          chalk.cyan.bold(
            `\n\nPress up or down on the keyboard to go back to the main menu`
          )
      );
    }
  });
}

module.exports = {
  printBookList
};
