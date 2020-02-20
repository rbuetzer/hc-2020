import { read } from "../src/read";
import { write } from "../src/write";

describe("write", () => {
  it("works", async () => {
    const data = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 0]
    ];
    await write(__dirname + "/out.txt", data);
  });
});
