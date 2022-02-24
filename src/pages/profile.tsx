import React, { FunctionComponent } from "react";
import { FormElement } from "../components/form-element/form-element";
import styles from './profile.module.css';
import { Link, useLocation} from "react-router-dom";
import { useSelector, useDispatch } from "../services/types/hooks";
import Api from "../utils/Api";
import { getCookie, deleteCookie, setCookie } from "../utils/utils";
import { getUserData } from "../services/actions/user-data";
import { refreshToken } from "../utils/utils";
import { USER_LOGOUT } from "../services/constants";


export const ProfilePage: FunctionComponent = () => {

  const location = useLocation();
 /*  const token = getCookie('token')
  const tokenForRefresh = getCookie('refreshToken') */
  const dispatch = useDispatch();

 /*  React.useEffect(() => {
    if (token !== undefined) {
       dispatch(getUserData(token))
    } else { tokenForRefresh  !== undefined &&  refreshToken(tokenForRefresh).then(() =>  dispatch(getUserData(token)))}
    const interval = setInterval(refreshToken, 100000);
    return () => {
      clearInterval(interval)
    }
  }, [token, dispatch, tokenForRefresh]) */




  return (
    <div className={styles.profileconteiner}>
      <div className={styles.navconteiner}>
        <nav className={`${styles.navmenu} mr-15`}>
          <ul className={styles.list}>
            <li className={styles.listelement}>
              <Link className={ location.pathname === '/profile' ? `${styles.currentlinktext} text text_type_main-medium`: `${styles.linktext} text text_type_main-medium`} to='/profile' >Профиль</Link>
            </li>
            <li className={styles.listelement}>
              <Link className={location.pathname === '/profile/orders' ? `${styles.currentlinktext} text text_type_main-medium`: `${styles.linktext} text text_type_main-medium`} to='/profile/orders'>История заказов</Link>
            </li>
            <li className={styles.listelement} onClick={() => { const match = getCookie('refreshToken'); match && Api.logoutRequest(match); deleteCookie('token'); deleteCookie('refreshToken'); dispatch({type:USER_LOGOUT}) }}>
              <Link className={`${styles.linktext} text text_type_main-medium`} to='/profile'>Выход</Link>
            </li>
          </ul>
        </nav>
        <p className={`${styles.blockquote} text text_type_main-default text_color_inactive mt-20`}>В этом разделе вы можете&nbsp;  изменить свои персональные данные</p>

      </div>
      <FormElement />

    </div>

  )

}



//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGViN2JjMjViOWE0MDAxYjZkZmVjNCIsImlhdCI6MTY0NTczMjY4MSwiZXhwIjoxNjQ1NzMzODgxfQ.0EboyKERJhso_foLIEVIf-CPrZTR6_fhXt5so2wwQGg;
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMGViN2JjMjViOWE0MDAxYjZkZmVjNCIsImlhdCI6MTY0NTQ3MDA5NSwiZXhwIjoxNjQ1NDcxMjk1fQ.Ro2w6hmhwiLGhOXwaJgE9LIH1_fThvh7fA074SLw5pE

//d0474664067f387b521bc84b75fbaf7d206c5395c5a1a33f2f14164cff6292046f681a25cc907d2e
//ac3224fb7dc6c004a2ffcb59f9971965eb2ee27cfa316883f22733cbc77688bb5f47d78fbd20ad32
