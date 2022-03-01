import React from "react";
import { OrderFeed } from "../components/order-feed/order-feed";
import { ScoreBoard } from "../components/scoreboard/scoreboard";
import styles from './orders-page.module.css'

export const OrderPage = () => {

  return (
    <div className={styles.conteiner}>
      <OrderFeed />
      <ScoreBoard />

    </div>

  )
}
