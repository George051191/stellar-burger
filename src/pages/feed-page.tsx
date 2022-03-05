import React from "react";
import { OrderFeed } from "../components/order-feed/order-feed";
import { ScoreBoard } from "../components/scoreboard/scoreboard";
import { useDispatch, useSelector } from "../services/types/hooks";
import { WS_CONNECTION_START, WS_CLOSE_CONNECTION} from "../services/constants";
import styles from './feed-page.module.css'



export const FeedPage = () => {
  const dispatch = useDispatch();
  const { orders, wsConnected } = useSelector(state => state.ordersFeed)
  console.log(orders)
  React.useEffect(() => {
    dispatch({ type: WS_CONNECTION_START })

    return () => {
      dispatch({type: WS_CLOSE_CONNECTION})
    }
  }, [dispatch])


  return (
    <div className={styles.conteiner}>
      <OrderFeed />
      <ScoreBoard />

    </div>

  )
}
