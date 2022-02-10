import { MouseEventHandler, ReactNode } from "react";
import { TIngredient } from "../services/types/data";

export interface IMenuItem {
  children: ReactNode;
  styles: string;
  text?: string;
  textStyles?: string;
}


export interface IConstructorItem {
  id: number;
  index: number;
  key: number;
  children: ReactNode;
}

export interface IModal {
  closeModal: () => void;
  modalHeaderStyles: string;
  headerText?: string;
  modalStyles?: string;
  children: ReactNode;
}

export interface IModalOverlay {
  closeFunction: (evt: React.MouseEvent<HTMLDivElement>) => void;
}


export interface IOrderDetails {
  number: number | null
}

export interface IIngredientType {
  ingredientName: string;
  data: Array<TIngredient>;
}

export interface IIngredient {
  id: string;
  elements: Array<TIngredient>;
  bun: TIngredient | { [key in any]: never };

  type: string;
  image: string;
  name: string;
  price: number;
  amount: number;
}
