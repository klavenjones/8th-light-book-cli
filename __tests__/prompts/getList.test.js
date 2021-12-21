const { getList } = require("../../prompts/getList");

describe("getList.js", () => {
  it("throws an error if a menu prompt function has not been passed", async () => {
    const error = getList(undefined);
    expect(error.name).toBe("Error");
    expect(error.message).toBe(
      "Invalid menu callback function passed for menu"
    );
  });
});
