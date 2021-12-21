const { printResponse } = require("../../utils/printResponse");

describe("printResponse.js", () => {
  it("throws an error if the books object is undefined", async () => {
    const error = await printResponse("Keyword", undefined);
    expect(error.name).toBe("Error");
    expect(error.message).toBe(
      "Something went wrong, the book object is undefined"
    );
  });
});
