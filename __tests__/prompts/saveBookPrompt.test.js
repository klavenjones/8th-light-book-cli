const { saveBookPrompt } = require("../../prompts/saveBookPrompt");

describe("saveBookPrompt.js", () => {
  it("throws an error if a menu prompt function has no been passed", async () => {
    const error = await saveBookPrompt(undefined);
    expect(error.name).toBe("Error");
    expect(error.message).toBe(
      "Invalid menu callback function passed for menu"
    );
  });
});
