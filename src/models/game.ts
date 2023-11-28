import { CategoryName } from "./category";

/**
 * @description Interface for Category
 * @interface
 * @property {string} name - The name of the Game
 * @property {CategoryName[]} categories - The categories of the Game
 * @property {string} image - The image of the Game
 * @property {string} id - The id of the Game
 */
export interface Game {
  name: string,
  categories: CategoryName[],
  image: string,
  id: string
}