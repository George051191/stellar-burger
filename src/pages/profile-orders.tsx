import React from "react";
import { ProfileNav } from "../components/profile-nav/profile-nav";
import styles from './profile-orders.module.css';
import { OrderFeedElement } from "../components/order-feed-element/order-feed-element";



export function ProfileOrdersPage() {

  return (
    <div className={styles.conteiner}>
      <ProfileNav navconteiner={styles.navconteiner} text='В этом разделе вы можете&nbsp;  просмотреть свою историю заказов' />
      <div className={styles.feed} >
        <OrderFeedElement styles={styles.element} status='Создан' path='/profile/orders/id' />
        <OrderFeedElement styles={styles.element } status='Создан' path='/profile/orders/id' />
        <OrderFeedElement styles={styles.element } status='Создан' path='/profile/orders/id' />
        <OrderFeedElement styles={styles.element } status='Создан' path='/profile/orders/id' />
        <OrderFeedElement styles={styles.element } status='Создан' path='/profile/orders/id' />
        <OrderFeedElement styles={styles.element } status='Создан' path='/profile/orders/id' />

      </div>


    </div>

  )

}
