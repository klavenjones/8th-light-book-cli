const fs = require("fs");
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

    return book;
  } catch (error) {
    if (error.message === "Request failed with status code 503") {
      Errors.serverError();
    }
    return error;
  }
}

module.exports = { addBookToList };
