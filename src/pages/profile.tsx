import React,{FunctionComponent} from "react";
import { FormElement } from "../components/form-element/form-element";
import styles from './profile.module.css';
import { Link } from "react-router-dom";

export const ProfilePage: FunctionComponent = () => {
console.log(document.cookie)
  return (
    <div className={styles.profileConteiner}>
      <div className={styles.navconteiner}>
        <nav className={`${styles.navmenu} mr-15`}>
          <ul className={styles.list}>
            <li className={styles.listelement}>
              <Link className={`${styles.currentlinktext} text text_type_main-medium`} to='/profile' >Профиль</Link>
            </li>
            <li className={styles.listelement}>
              <Link className={`${styles.linktext} text text_type_main-medium`} to='/login'>История заказов</Link>
            </li>
            <li className={styles.listelement}>
              <Link className={`${styles.linktext} text text_type_main-medium`} to='/profile'>Выход</Link>
            </li>
          </ul>
        </nav>
        <p className={`${styles.blockquote} text text_type_main-default text_color_inactive mt-20`}>В этом разделе вы можете&nbsp;  изменить свои персональные данные</p>

      </div>
      <FormElement name='fgg' login='ddfd' password='df' onSubmit={() => console.log(1)} />

    </div>

  )



}
