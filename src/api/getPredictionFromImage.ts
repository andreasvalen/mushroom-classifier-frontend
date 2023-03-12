import { mushroomFetch } from "./apicontext";
import { IMusrooms } from "./interfaces";
//Gets all mushrooms from the database
const endpoint = "mushrooms/predict";

export const getPredictionFromImage: (
  image: File
) => Promise<[IMusrooms]> = async (image?: File) =>
  await mushroomFetch({
    endpoint,
    contentType: "image/jpeg",
    method: "POST",
    body: image,
  });
