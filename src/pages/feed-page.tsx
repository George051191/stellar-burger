import React from "react";
import { OrderFeed } from "../components/order-feed/order-feed";
import { ScoreBoard } from "../components/scoreboard/scoreboard";
import { Modal } from "../components/modal/modal";
import { OrderStuff } from "../components/order-stuff/order-stuff";
import styles from './feed-page.module.css'



export const FeedPage = () => {




  return (
    <div className={styles.conteiner}>
      <OrderFeed />
      <ScoreBoard />

    </div>

  )
}
