import React, { FunctionComponent } from "react";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import styles from './reset.module.css';


export const ResetPage: FunctionComponent = () => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const [visible, setVisible] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onIconClick = () => {
    setVisible(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };
  const validateField = (value: string) => {
    setError(value.length < 6);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value) {
      validateField(e.target.value);
    } else {
      setError(false);
    }
    setVisible(false);
  };


  return (
    <div className={styles.pagestyle}>
      <form className={styles.form}>
        <fieldset className={styles.inputsfield}>
          <h2 className={`text text_type_main-medium ${styles.header}`}>Восстановление пароля</h2>
          <Input errorText={'Некорректный пароль'} error={error} ref={inputRef} icon={visible ? 'HideIcon' : 'ShowIcon'} type={visible ? 'text' : 'password'} onChange={onChange} onBlur={onBlur} onIconClick={onIconClick} value={value} name={'password'} placeholder='Введите новый пароль' />
          <Input onChange={onChange} value={value} name={'password'} placeholder='Введите код из письма' />
        </fieldset>
        <Button type="primary" size="medium" >Сохранить</Button>
        <div className={`${styles.redirectmenu}  mt-20`}>
          <p className={`${styles.password} text text_type_main-default text_color_inactive `}>Вспомнили пароль?</p>
          <Link className={`${styles.link} text text_type_main-default`} to='/login'>Войти</Link>
        </div>
      </form>

    </div>
  )
}
