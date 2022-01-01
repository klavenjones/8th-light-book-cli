const chalk = require("chalk");
const boxen = require("boxen");

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "gray",
  backgroundColor: "#008b8b"
};

function welcomeMessage() {
  const greeting = chalk.white.bold(
    "Welcome to the Google Books Command Line Application"
  );

  const message = boxen(greeting, boxenOptions);
  console.log(message);
  console.log(
    chalk.bold.inverse.cyanBright(`Hey there!`) +
      chalk.cyan(
        `\n\nWelcome to my command line application. This application allows you to search for books using the Google Books API. You will also be able to add some of these books to a list, by using the book's ID.`
      ) +
      chalk.cyan(
        `\n\nUse your keyboard to choose what you would like to do and follow the prompts to help guide you through the process`
      ) +
      chalk.cyan.bold(
        `\n\nHave fun finding interesting new books to explore! \n\n`
      )
  );
}

function farewellMessage() {
  const greeting = chalk.white.bold("Goodbye, come back soon!");
  const message = boxen(greeting, boxenOptions);
  console.log(message);
}


module.exports = { welcomeMessage, farewellMessage };
