const { enterSearchPrompt } = require("../../prompts/enterSearchPrompt");

describe("enterSearchPrompt.js", () => {
  it("throws an error if a menu prompt function has not been passed", async () => {
    const error = enterSearchPrompt(undefined);
    expect(error.name).toBe("Error");
    expect(error.message).toBe(
      "Invalid menu callback function passed for menu"
    );
  });
});
