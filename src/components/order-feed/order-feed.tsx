import React from "react";
import styles from './order-feed.module.css';
import { OrderFeedElement } from "../order-feed-element/order-feed-element";

export const OrderFeed = () => {

  return (

    <div className={styles.ordersconteiner}>
      <h3 className='text text_type_main-large mb-5' >Лента заказов</h3>
      <div className={styles.feed} >
        <OrderFeedElement styles={styles.element} path='/feed/id'/>
        <OrderFeedElement styles={styles.element} path='/feed/id' />
        <OrderFeedElement styles={styles.element} path='/feed/id' />
        <OrderFeedElement styles={styles.element} path='/feed/id'/>
        <OrderFeedElement styles={styles.element} path='/feed/id' />
        <OrderFeedElement styles={styles.element} path='/feed/id'/>

      </div>

  </div>
)

}
