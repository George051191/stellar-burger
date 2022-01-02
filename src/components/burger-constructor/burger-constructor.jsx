import consructorStyles from './burger-constructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorItem } from '../constructor-item/constructor-item';
import { OrderRegistration } from '../order-registration/order-registration';

import { Modal } from '../modal/modal';

import React from 'react';
import { OrderDetails } from '../order-details/order-details';
import { useSelector, useDispatch } from 'react-redux';
import { OPEN_ORDER_POPUP, CLOSE_ORDER_POPUP } from '../../services/actions/order-details';
import { getOrderNumber } from '../../services/actions/order-details';

export function BurgerConstructor() {
  const array = ['60d3b41abdacab0026a733cc', '60d3b41abdacab0026a733cd'];
  const dispatch = useDispatch();
  const { orderButtonIsClicked, requestIsSuccessed, orderNumber } = useSelector(store => store.currentOrder);
  return (
    <div className={`pl-4   ml-10 pt-25 ${consructorStyles.burgerconstructor__conteiner}`}>
      <ConstructorElement type="top" isLocked={true} text="Краторная булка N-200i (верх)" price={200} thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"} />
      <ul className={`pr-4 mr-4 ${consructorStyles.burgerconstructor__elements}`}>
        {/*{props.staff.map((item) => (
          <ConstructorItem key={item._id}>
            <ConstructorElement text={item.name} thumbnail={item.image_mobile} price={item.price} />
        </ConstructorItem>))}*/}
      </ul>
      <ConstructorElement type="bottom" isLocked={true} text="Краторная булка N-200i (низ)" price={200} thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"} />
      <OrderRegistration clickHandler={() => {
        dispatch({ type: OPEN_ORDER_POPUP }); dispatch(getOrderNumber(array));
      }} styles={`mt-10 ${consructorStyles.burgerconstructor__cost}`} cost={610} />
      {orderButtonIsClicked && requestIsSuccessed && <Modal closeModal={() => { dispatch({ type: CLOSE_ORDER_POPUP }) }} modalHeaderStyles={consructorStyles.burgerconstructor__modalheader}><OrderDetails number={orderNumber} /></Modal>}
    </div>


  )
}



