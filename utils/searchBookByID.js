const axios = require("axios");
const chalk = require("chalk");




async function searchBookByID(id) {
  try {
    if (!id || typeof id !== "string") {
      throw new Error("Incorrect input for the book ID");
    }
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    return result;
  } catch (error) {
    if (error.message === "Request failed with status code 503") {
      throw new Error(
        chalk.red.bold(
          "Uh oh, looks like there is an issue. It's likely the book ID you provided is not in the database. Double check your id and try again"
        )
      );
    }
    console.error(error.message);
    return error;
  }
}

module.exports = {
  searchBookByID
};
