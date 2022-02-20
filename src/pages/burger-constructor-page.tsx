import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "../services/types/hooks";
import { getBurgerData } from "../services/actions/burger-ingredients";
import style from './burger-page.module.css'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BurgerConstructor } from "../components/burger-constructor/burger-constructor";
import { BurgerIngredients } from "../components/burger-ingredients/burger-ingredients";
import Api from "../utils/Api";
import { getCookie, setCookie } from "../utils/utils";
import { refreshToken } from "../utils/utils";



export const Constructor: FunctionComponent = () => {
  const { loginStatus } = useSelector(state=> state.userState)
  React.useEffect(() => {
    refreshToken();

    const interval = setInterval(refreshToken, 100000);

    return () => {
      clearInterval(interval)

    }
},[])


  return (

    <section className={`${style.constructor}`}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </section>

  )
}
