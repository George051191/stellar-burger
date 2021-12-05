import React from "react";
import menuItemStyles from './menu-item.module.css'

export function MenuItem(props) {
    return (
        <li className={`pr-5 pl-5 mt-4 mb-4 mr-2 ${menuItemStyles.menu__item}`}>
            {props.children}
            <p className='text text_type_main-default mr-2 ml-2'>{props.text}</p>
        </li>
    )
}