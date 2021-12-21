const chalk = require("chalk");

function printResponse(query, books) {
  try {
    if (!books) {
      throw new Error("Something went wrong, the book object is undefined");
    }

    console.log(
      chalk.inverse.cyan.bold(
        `\n Here are the results from the keyword: '${query}'`
      )
    );
    books.forEach((book) => {
      console.log(
        chalk.cyan.bold(`\n Title:`) +
          chalk.white(` ${book.volumeInfo.title || "No Title Listed"} `) +
          chalk.cyan.bold(`\n Author(s):`) +
          chalk.white(` ${book.volumeInfo.authors || "No Authors Listed"} `) +
          chalk.cyan.bold(`\n Publisher:`) +
          chalk.white(
            ` ${book.volumeInfo.publisher || "No Publisher Listed"} `
          ) +
          chalk.cyan.bold(`\n Book ID:`) +
          chalk.white(` ${book.id} \n`)
      );
    });
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = {
  printResponse
};
