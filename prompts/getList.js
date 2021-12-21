const { printBookList } = require("../utils/printBookList");

function getList(menuCallback) {
  try {
    if (!menuCallback) {
      throw new Error("Invalid menu callback function passed for menu");
    }
    printBookList();
    menuCallback();
  } catch (error) {
    console.error(error);
    return error;
  }
}

module.exports = {
  getList
};
