import { promises as fs } from "fs";

export async function write(path: string, data: number[][]): Promise<void> {
  // const fileContent = data.map(line => line.join(" ")).join(" ");

  await (fs as any).writeFile(path, "fileContent");

  //   const result = await fs.readFile(path, "utf8");
  //   console.log("result", result);
  //   return result
  //     .split("\n")
  //     .map(line => line.split(" ").map(item => parseFloat(item)));
}
