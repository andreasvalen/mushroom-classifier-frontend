import { mushroomFetch } from "./apicontext";
import { IMusrooms } from "./interfaces";
//Gets all mushrooms from the database
const endpoint = "mushrooms";

export const getMushrooms: () => Promise<[IMusrooms]> = async () =>
  await mushroomFetch({ endpoint });
