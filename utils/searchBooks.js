const axios = require("axios");
const Errors = require("../utils/errorMessages");
const { printResponse } = require("./printResponse");
require("dotenv").config();

async function searchBooks(query) {
  try {
    if (!query || query === undefined) {
      Errors.emptyQueryError();
    }
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=5`
    );
    return response;
  } catch (error) {
    if (error.message === "Request failed with status code 503") {
      Errors.serverError();
    }
    return error;
  }
}

module.exports = {
  searchBooks
};
