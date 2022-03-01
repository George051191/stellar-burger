import React from "react";
import styles from './scoreboard.module.css';

export const ScoreBoard = () => {

  return (
    <div className={styles.conteiner}>
      <div className={styles.statusbox} >
        <div className={styles.box}>
          <p className="text text_type_main-medium mb-6" >Готовы:</p>
          <ul className={styles.list} >
            <li className={`${styles.statusdone} text text_type_digits-default`}>525252</li>
            <li className={`${styles.statusdone} text text_type_digits-default`} >52524124</li>
            <li className={`${styles.statusdone} text text_type_digits-default`} >5225</li>

          </ul>
        </div>
        <div className={styles.box} >
          <p className="text text_type_main-medium mb-6"  >В работе:</p>
          <ul className={styles.list} >
            <li className='text text_type_digits-default'>525252 </li>
            <li className='text text_type_digits-default' >52524124</li>
            <li className='text text_type_digits-default' >5225</li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text text_type_main-medium" >Выполнено за все время:</p>
        <p className={`text text_type_digits-large ${styles.digits} `} >28 752</p>
      </div>
      <div>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className={`text text_type_digits-large ${styles.digits} `} >138</p>
      </div>
    </div>

  )




}
