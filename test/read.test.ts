import { read } from "../src/read";

describe("read", () => {
  it("works", async () => {
    const result = await read(__dirname + "/samples/numbers1.txt");

    expect(result).toEqual([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 0]
    ]);
  });
});
