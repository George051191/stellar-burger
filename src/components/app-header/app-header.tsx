import React from "react";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from './app-header.module.css';
import { BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { MenuItem } from "../menu-item/menu-item";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ILocation } from "../../utils/interfaces";

export const AppHeader: FunctionComponent = () => {
  const location = useLocation<ILocation>();


  const isActivePage = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.header__navigation}>
        <ul className={headerStyles.header__list}>
          <Link to='/' className={headerStyles.link} >
            <MenuItem text='Конструктор' textStyles={isActivePage('/') ? `${headerStyles.activenavlink} text text_type_main-default ml-2` : `text text_type_main-default ml-2 ${headerStyles.navlink}`} styles={`${headerStyles.header__item} pl-5 pr-5`}>
              <BurgerIcon type={isActivePage('/') ? 'primary' : 'secondary'} />
            </MenuItem>
          </Link>
          <Link to='/feed' className={headerStyles.link}>
            <MenuItem text='Лента заказов' textStyles={isActivePage('/feed') || isActivePage('/feed/id') ? `${headerStyles.activenavlink} text text_type_main-default ml-2` : `text text_type_main-default ml-2 ${headerStyles.navlink}`} styles={`${headerStyles.header__item} pl-5 pr-5`} >
              <ListIcon type={isActivePage('/feed') || isActivePage('/feed/id') ? 'primary' : 'secondary'} />
            </MenuItem>
          </Link>
          <MenuItem styles={headerStyles.header__logo}>
            <Logo />
          </MenuItem>
          <Link to='/profile' className={headerStyles.link} >
            <MenuItem text='Личный кабинет' textStyles={isActivePage('/profile') || isActivePage('/profile/orders') ? `${headerStyles.activenavlink} text text_type_main-default ml-2` : `text text_type_main-default ml-2 ${headerStyles.navlink}`} styles={`${headerStyles.header__item} pl-5 pr-5`} >
              <ProfileIcon type={isActivePage('/profile') || isActivePage('/profile/orders') ? 'primary' : 'secondary'} />
            </MenuItem>
          </Link>
        </ul>
      </nav>
    </header>

  )
}





