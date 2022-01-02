const fakeAxios = require("axios");
const { searchBookByID } = require("../../utils/searchBookByID");
const mockIDResponse = require("../../__fixtures__/mockVolumeByID");

describe("searchBookByID.js", () => {
  it("makes a request to Google Books API using an ID and returns a book", async () => {
    fakeAxios.get.mockImplementationOnce(() => Promise.resolve(mockIDResponse));
    const id = "a-OvFQyAi08C";
    const book = await searchBookByID(id);

    expect(book).toEqual(mockIDResponse);
    expect(fakeAxios.get).toHaveBeenCalledTimes(1);
    expect(fakeAxios.get).toHaveBeenCalledWith(
      "https://www.googleapis.com/books/v1/volumes/a-OvFQyAi08C"
    );
  });

  it("throws an error if book ID is not passed or undefined", async () => {
    const error = await searchBookByID();
    expect(error.name).toBe("Error");
    expect(error.message).toBe("I'm Sorry you entered an invalid ID");
  });

  it("throws an error if book ID is not a string", async () => {
    const error = await searchBookByID(1);
    expect(error.name).toBe("Error");
    expect(error.message).toBe("I'm Sorry you entered an invalid ID");
  });
});
