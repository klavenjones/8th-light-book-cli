const chalk = require("chalk");

module.exports = {
  emptyQueryError: function () {
    console.log(
      chalk.red.bold(
        "\n Looks like something went wrong with your search query, let's try that again. \n"
      )
    );
    throw new Error(
      "Your search query is invalid, please make sure you type in a valid query"
    );
  },
  badQueryError: function () {
    console.log(
      chalk.red.bold(
        "Uh oh, looks like there is an issue. It's likely the query you provided is not in the database. Double check your query and try again"
      )
    );
  },
  noBooksError: function () {
    console.log(
      chalk.red.bold(
        "\n Uh oh looks like something went wrong. We can't find what you are looking for. \n"
      )
    );
    throw new Error("Something went wrong, the book object is undefined");
  },
  bookListError: function () {
    console.log(
      chalk.inverse.red.bold(
        `\n\nThere was an issue finding your list. ${error.message}\n`
      )
    );
  },
  emptyBookListError: function () {
    console.log(
      chalk.red.bold(
        "\n\n It looks like your list is empty, Let's add some books to it. \n"
      )
    );
  },
  saveBookError: function () {
    console.log(
      chalk.inverse.red.bold(
        `\n\nSorry something went wrong trying to save your book\n`
      )
    );
  },
  bookIdError: function () {
    console.log(
      chalk.red.bold(
        "\n\nUh oh, looks like there is an issue. It's likely the book ID you provided is not valid. Double check your id and try again\n\n"
      )
    );
    throw new Error("I'm Sorry you entered an invalid ID");
  },
  serverError: function () {
    console.log(
      chalk.red.bold(
        "\n\nLooks like something went wrong on our end, the server is unavailable\n\n"
      )
    );
    throw new Error(
      "Looks like something went wrong on our end, the server is unavailable"
    );
  },
  callbackFnError: function () {
    console.log(
      chalk.red(
        "Uh oh something went wrong, make sure the menu call back function works"
      )
    );
    throw new Error("Invalid menu callback function passed for menu");
  }
};
