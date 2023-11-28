import { CategoryName } from './category';

export interface HeaderNameInterface {
  top: CategoryName,
  new: CategoryName,
  slots: CategoryName,
  classic: CategoryName,
  blackjack: CategoryName,
  roulette: CategoryName,
  poker: CategoryName,
  other: CategoryName[]
}

export const HeaderName:HeaderNameInterface = {
  top: CategoryName.top,
  new: CategoryName.new,
  slots: CategoryName.slots,
  classic: CategoryName.classic,
  blackjack: CategoryName.blackjack,
  roulette: CategoryName.roulette,
  poker: CategoryName.poker,
  other: [CategoryName.ball, CategoryName.virtual, CategoryName.fun]
}