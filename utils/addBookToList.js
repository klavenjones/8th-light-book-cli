const fs = require("fs");
const chalk = require("chalk");
const Errors = require("../utils/errorMessages");
const { searchBookByID } = require("./searchBookByID");

async function addBookToList(id) {
  try {
    if (!id || typeof id === "number") {
      Errors.bookIdError();
    }
    const book = await searchBookByID(id);
    const { title, authors, publisher } = book.data.volumeInfo;

    const bookInfo = `\nTitle: ${title} \nAuthor(s): ${authors} \nPublisher: ${publisher} \n`;

    await fs.appendFile("book-list.txt", bookInfo, (error) => {
      if (error) {
        Errors.saveBookError();
      }
    });
    console.log(
      chalk.green.inverse("\n You successfully saved the book to your list \n")
    );
    return book;
  } catch (error) {
    if (error.message === "Request failed with status code 503") {
      Errors.serverError();
    }
    return error;
  }
}

module.exports = { addBookToList };
