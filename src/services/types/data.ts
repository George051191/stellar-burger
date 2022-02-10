export type TIngredient = {
  readonly amount: number;
  readonly calories: number;
  readonly carbohydrates: number;
  readonly fat: number;
  readonly image: string;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly name: string;
  readonly price: number;
  readonly proteins: number;
  readonly type: string;
  readonly __v: number;
  readonly _id: string;
  readonly uid: number;
}



export type TOrder = {
  readonly name: string;
  readonly order: { number: number };
  readonly success: boolean;
}
