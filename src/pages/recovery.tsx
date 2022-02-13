import React, { FunctionComponent } from "react";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './recovery.module.css';

export const RecoveryPage: FunctionComponent = () => {
  const [value, setValue] = React.useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={styles.pagestyle}>
      <form className={styles.form}>
        <fieldset className={styles.inputsfield}>
          <h2 className={`text text_type_main-medium ${styles.header}`}>Восстановление пароля</h2>
          <Input type='email' value={value} onChange={onChange} placeholder={'Укажите e-mail'} />
        </fieldset>
        <Button type="primary" size="medium" >Восстановить</Button>
        <div className={`${styles.redirectmenu}  mt-20`}>
          <p className={`${styles.registration} text text_type_main-default text_color_inactive `}>Вспомнили пароль?</p>
          <Link className={`${styles.link} text text_type_main-default`} to='/login'>Войти</Link>
        </div>
      </form>
    </div>
  )
}
