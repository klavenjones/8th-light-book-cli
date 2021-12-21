const { addBookToList } = require("../../utils/addBookToList");

describe("addBookToList.js", () => {
  it("throws an error if the ID parameter is invalid", async () => {
    const error = await addBookToList(1);
    expect(error.name).toBe("Error");
    expect(error.message).toBe("I'm sorry this is an invalid ID");
  });
});
