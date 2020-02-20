import { read } from "./read";
import { write } from "./write";
import { flatten } from "lodash";

// [numBooks, signUpTime, booksPerDay, books];

export const main = async (path: string, out: string) => {
  const [[numBooks, numLibraries, numDays], bookScores, ...rest] = await read(path);

  const libraryData = rest.filter((x, i) => i % 2 === 0);
  const bookData = rest.filter((x, i) => i % 2 === 1);
  const libraryOrder = libraryData.map((_x, i) => [[i, bookData[i].length], bookData[i]]);

  const result = [[numLibraries], ...flatten(libraryOrder)];
  console.log(result);

  write(out, result as any);
};
