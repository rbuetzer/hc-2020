import { promises as fs } from "fs";

// 6 2 7
// 1 2 3 6 5 4
// 5 2 2
// 0 1 2 3 4
// 4 3 1
// 0 2 3 5

export async function read(path: string): Promise<number[][]> {
  const result = await fs.readFile(path, "utf8");
  console.log("result", result);
  return result
    .split("\n")
    .filter(line => line.length > 0)
    .map(line => line.split(" ").map(item => parseFloat(item)));
}
