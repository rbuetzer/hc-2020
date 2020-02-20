import { promises as fs } from "fs";

export async function read(path: string): Promise<number[][]> {
  const result = await fs.readFile(path, "utf8");
  console.log("result", result);
  return result
    .split("\n")
    .map(line => line.split(" ").map(item => parseFloat(item)));
}
