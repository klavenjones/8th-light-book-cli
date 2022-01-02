const fakeAxios = require("axios");
const { searchBooks } = require("../../utils/searchBooks");
const mockQueryResponse = require("../../__fixtures__/mockVolumeByQuery");

describe("searchBooks.js", () => {
  it("makes a request to Google Books API using a query and returns a list of five books", async () => {
    fakeAxios.get.mockImplementationOnce(() =>
      Promise.resolve(mockQueryResponse)
    );
    const query = "web";
    const books = await searchBooks(query);

    expect(books).toEqual(mockQueryResponse);
    expect(fakeAxios.get).toHaveBeenCalledTimes(1);
    expect(fakeAxios.get).toHaveBeenCalledWith(
      `https://www.googleapis.com/books/v1/volumes?q=web&maxResults=5`
    );
  });

  it("throws an error if query is not passed or undefined", async () => {
    const error = await searchBooks();
    expect(error.name).toBe("Error");
    expect(error.message).toBe(
      "Your search query is invalid, please make sure you type in a valid query"
    );
  });

  it("throws an error if query is undefined", async () => {
    const error = await searchBooks(undefined);
    expect(error.name).toBe("Error");
    expect(error.message).toBe(
      "Your search query is invalid, please make sure you type in a valid query"
    );
  });
});
