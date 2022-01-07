import consructorStyles from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorItem } from '../constructor-item/constructor-item';
import { OrderRegistration } from '../order-registration/order-registration';
import { useDrop } from 'react-dnd';
import { ADD_ITEM, ADD_BUN, DELETE_INGREDIENT } from '../../services/actions/burger-consructor';
import { Modal } from '../modal/modal';
import React from 'react';
import { OrderDetails } from '../order-details/order-details';
import { useSelector, useDispatch } from 'react-redux';
import { OPEN_ORDER_POPUP, CLOSE_ORDER_POPUP } from '../../services/actions/order-details';
import { getOrderNumber } from '../../services/actions/order-details';
import { uid, calculateCost } from '../utils/utils';


export function BurgerConstructor() {
  const dispatch = useDispatch();
  const { orderButtonIsClicked, requestIsSuccessed, orderNumber } = useSelector(store => store.currentOrder);
  const { ingredients } = useSelector(store => store.burgerData);
  const { elements, bun } = useSelector(store => store.constructorState);
  console.log(elements)

  const [, dropTarget] = useDrop({
    accept: 'item',
    drop(itemId) {
      dispatch({
        type: ADD_ITEM, data: ingredients.filter(item => {
          return item._id === itemId.id && item.type !== 'bun'
        }).map(item => { return { ...item, uid: uid() } })
      })
      dispatch({
        type: ADD_BUN, bunItem: ingredients.find(item => {
          return item._id === itemId.id && item.type === 'bun'

        })
      })
    }
  });




  const array = ['60d3b41abdacab0026a733cc', '60d3b41abdacab0026a733cd'];

  return (
    elements && <div className={`pl-4   ml-10 pt-25 ${consructorStyles.burgerconstructor__conteiner}`}>
      {bun && Array.of(bun).map(item => (
        <ConstructorElement key={uid()} type="top" isLocked={true} text={item.name} price={item.price} thumbnail={item.image_mobile} />
      ))
      }
      <ul ref={dropTarget} className={`pr-4 mr-4 ${consructorStyles.burgerconstructor__elements}`}>
        {elements.filter(item => { return item.type !== 'bun' }).map((item) => (
          <ConstructorItem key={uid()}>
            <ConstructorElement id={item.uid} text={item.name} thumbnail={item.image_mobile} price={item.price} handleClose={() => { dispatch({ type: DELETE_INGREDIENT, id: item.uid }); }} />
          </ConstructorItem>))}
      </ul>
      {bun && Array.of(bun).map(item => (
        <ConstructorElement key={uid()} type="bottom" isLocked={true} text={item.name} price={item.price} thumbnail={item.image_mobile} />))}
      <OrderRegistration clickHandler={() => {
        dispatch({ type: OPEN_ORDER_POPUP }); dispatch(getOrderNumber(array));
      }} styles={`mt-10 ${consructorStyles.burgerconstructor__cost}`} cost={calculateCost(elements, bun.price)} />
      {orderButtonIsClicked && requestIsSuccessed && <Modal closeModal={() => { dispatch({ type: CLOSE_ORDER_POPUP }) }} modalHeaderStyles={consructorStyles.burgerconstructor__modalheader}><OrderDetails number={orderNumber} /></Modal>}
    </div >


  )
}



