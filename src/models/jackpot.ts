/**
 * @description Interface for Jackpot
 * @interface
 * @property {string} game - The id of the Game
 * @property {string} amount - The amount of the jackpot
 */
export interface Jackpot {
  game: string,
  amount: number,
}