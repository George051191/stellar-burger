import React, { FunctionComponent } from "react";
import styles from './order-feed-element.module.css'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ProfileOrdersPage } from "../../pages/profile-orders";


export const OrderFeedElement: FunctionComponent<{ styles: string, status?: string, path:string }> = (props) => {
  const location = useLocation()

  return (
    <Link className={styles.link} to={{ pathname: props.path, state: { background: location } }}>
      <div className={props.styles}>
        <div className={`${styles.conteiner} mt-6 mb-6`}>
          <p className="text text_type_digits-default ">#034535</p>
          <p className="text text_type_main-default text_color_inactive" >Сегодня, 16:20 i-GMT+3</p>
        </div>
        <p className='text text_type_main-medium '>Death Star Starship Main бургер</p>
        {props.status && <p className="text text_type_main-default mt-2 mb-6" >{props.status}</p>}
        <div className={`${styles.conteiner} mb-6`}>
          <div className={`${styles.imagesbox} mr-6`}>
            <div className={styles.firstimageoverlay} >
              <div className={styles.imagebox} >
                <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-02-mobile.png" />
              </div>
            </div>
            <div className={styles.secondimageoverlay} >
              <div className={styles.imagebox} >
                <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-02-mobile.png" />
              </div>
            </div>
            <div className={styles.thirdimageoverlay} >
              <div className={styles.imagebox} >
                <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-02-mobile.png" />
              </div>
            </div>
            <div className={styles.fourthimageoverlay} >
              <div className={styles.imagebox} >
                <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-02-mobile.png" />
              </div>
            </div>
            <div className={styles.fifthimageoverlay} >
              <div className={styles.imagebox} >
                <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-02-mobile.png" />
              </div>
            </div>
            <div className={styles.siximageoverlay} >
              <div className={styles.imagebox} >
                <img className={styles.image} src="https://code.s3.yandex.net/react/code/bun-02-mobile.png" />
              </div>
            </div>
            <div className={styles.outherimageoverlay}>
              <p className="text text_type_main-default">+3</p>
            </div>

          </div>
          <div className={styles.cost}>
            <p className="text text_type_digits-default mr-2" >480</p>
            <CurrencyIcon type="primary" />
          </div>

        </div>
      </div>
    </Link>
  )

}
