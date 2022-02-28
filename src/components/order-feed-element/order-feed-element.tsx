import React from "react";
import styles from './order-feed-element.module.css'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";


export const OrderFeedElement = () => {
  return (
    <div className={styles.element}>
      <div className={`${styles.conteiner} mt-6 mb-6`}>
        <p className="text text_type_digits-default ">#034535</p>
        <p className="text text_type_main-default text_color_inactive" >Сегодня, 16:20 i-GMT+3</p>
      </div>
      <p className='text text_type_main-medium mb-6'>Death Star Starship Main бургер</p>
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
          <div className={styles.outherimageoverlay }>
              <p className="text text_type_main-default">+3</p>
            </div>

        </div>
        <div className={styles.cost}>
          <p className="text text_type_digits-default mr-2" >480</p>
          <CurrencyIcon type="primary" />
        </div>

      </div>
    </div>

  )

}
