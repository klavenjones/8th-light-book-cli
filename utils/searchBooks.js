const axios = require("axios");
const chalk = require("chalk");
const { printResponse } = require("./printResponse");
require("dotenv").config();

async function searchBooks(query) {
  try {
    if (!query || query === undefined) {
      throw new Error(
        chalk.red.bold(
          "Your search query is invalid, please make sure you type in a valid query"
        )
      );
    }
    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes",
      {
        params: {
          q: query,
          key: process.env.GOOGLE_API_KEY,
          maxResults: 5,
          orderBy: "relevance"
        }
      }
    );
    const books = response.data.items;
    printResponse(query, books);
  } catch (error) {
    if (error.message === "Request failed with status code 503") {
      throw new Error(
        chalk.red.bold(
          "Uh oh, looks like there is an issue. It's likely the query you provided is not in the database. Double check your query and try again"
        )
      );
    }
    console.error(error.message);
  }
}

module.exports = {
  searchBooks
};
