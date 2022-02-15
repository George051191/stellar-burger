import React, { FunctionComponent } from "react";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './form-element.module.css';

export const FormlElement: FunctionComponent<{ name: string, login: string, password: string, onSubmit: () => any }> = (props) => {
  const [nameInputValue, setNameInputValue] = React.useState(props.name);
  const [loginInputValue, setLoginInputValue] = React.useState(props.login);
  const [passwordInputValue, setPasswordInputValue] = React.useState(props.password);

  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const loginInputRef = React.useRef<HTMLInputElement>(null);
  const passwordInputRef = React.useRef<HTMLInputElement>(null);
  const onNameClick = () => {
    setTimeout(() => nameInputRef.current && nameInputRef.current.focus(), 0)
  }
  const onLoginClick = () => {
    setTimeout(() => loginInputRef.current && loginInputRef.current.focus(), 0)
  }
  const onPasswordClick = () => {
    setTimeout(() => passwordInputRef.current && passwordInputRef.current.focus(), 0)
  }

  return (
    <div className={styles.formelement}>
      <form className={styles.form} onSubmit={() => props.onSubmit()}>
        <fieldset className={styles.fieldset}>
          <Input onIconClick={onNameClick} ref={nameInputRef} type={'text'} placeholder={'Имя'} onChange={e => setNameInputValue(e.target.value)} icon={'EditIcon'} value={nameInputValue} />
          <Input onIconClick={onLoginClick} ref={loginInputRef} type={'text'} placeholder={'Логин'} onChange={e => setLoginInputValue(e.target.value)} icon={'EditIcon'} value={loginInputValue} />
          <Input onIconClick={onPasswordClick} ref={passwordInputRef} type={'password'} placeholder={'Пароль'} onChange={e => setPasswordInputValue(e.target.value)} icon={'EditIcon'} value={passwordInputValue} />
        </fieldset>
        <Button type="primary" size="medium" >Сохранить</Button>
      </form>
    </div>
  )
}

