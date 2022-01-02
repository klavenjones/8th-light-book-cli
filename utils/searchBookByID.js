const axios = require("axios");
const chalk = require("chalk");
const Errors = require("../utils/errorMessages");

async function searchBookByID(id) {
  try {
    if (!id || typeof id === "number") {
      Errors.bookIdError();
    }
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}`
    );
    return result;
  } catch (error) {
    if (error.message === "Request failed with status code 503") {
      Errors.serverError();
    }
    return error;
  }
}

module.exports = {
   searchBookByID
};
