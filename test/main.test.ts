import { main } from "../src/main";

describe("main", () => {
  it("works", async () => {
    await main(__dirname + "/../data/a_example.txt", __dirname + "/../out/a_example.txt");
  });
});
