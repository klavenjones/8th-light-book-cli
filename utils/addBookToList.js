const fs = require("fs");
const chalk = require("chalk");
const { searchBookByID } = require("./searchBookByID");

async function addBookToList(id) {
  try {
    if (!id || typeof id !== "string") {
      throw new Error("I'm sorry this is an invalid ID");
    }
    const book = await searchBookByID(id);
    const { title, authors, publisher } = book.data.volumeInfo;

    const bookInfo = `\nTitle: ${title} \nAuthor(s): ${authors} \nPublisher: ${publisher} \n`;

    await fs.appendFile("book-list.txt", bookInfo, (error) => {
      if (error) {
        console.log(
          chalk.inverse.red.bold(
            `\n\nSorry something went wrong trying to save your book\n`
          )
        );
      }
    });

    return book;
  } catch (error) {
    if (error.message === "Request failed with status code 503") {
      throw new Error(
        chalk.red.bold(
          "Uh oh, looks like there is an issue. It's likely the book ID you provided is not in the database. Double check your id and try again"
        )
      );
    }
    console.error(error);
    return error;
  }
}

module.exports = { addBookToList };
