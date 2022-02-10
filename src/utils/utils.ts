import { TIngredient } from "../services/types/data"

export const uid = (): number => { return Date.now() * Math.random() }

export const calculateCost = (elements: Array<TIngredient>, bunPrice: number = 0): number => {
  return (2 * bunPrice) + elements.reduce((res, item) => {
    return res + item.price
  }, 0)
}
