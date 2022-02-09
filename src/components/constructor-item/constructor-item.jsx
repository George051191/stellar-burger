import React from 'react';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyles from './constructor-item.module.css';
import { useDrag, useDrop } from 'react-dnd';
import { REORDER_INGREDIENTS } from '../../services/constants/index'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';


export function ConstructorItem(props) {
  const { elements } = useSelector(state => state.constructorState);
  const ref = React.useRef();
  const dispatch = useDispatch();
  const { id, index } = props;

  ///заменяем массив с новым порядком в стейте
  function moveCard(dragIndex, hoverIndex) {
    let newCards = [...elements];
    let dragCard = newCards[dragIndex];
    newCards.splice(dragIndex, 1);
    newCards.splice(hoverIndex, 0, dragCard);
    dispatch({ type: REORDER_INGREDIENTS, data: newCards });
  }


  const [{ opacity }, drag] = useDrag({
    type: 'element',
    item: { id, index },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  })

  const [{ isHover }, drop] = useDrop({
    accept: 'element',
    collect: monitor => ({ isHover: monitor.isOver() }),
    hover(item) {
      if (item.index === index) {
        return;
      }
      if (!ref.current) {
        return;
      }
      moveCard(item.index, index);
      item.index = index
    }
  })

  const itemStyle = isHover ? itemStyles.constructoritem__hoverelement : itemStyles.constructoritem__element


  drag(drop(ref))

  return (
    <li ref={ref} index={index} className={`mt-4 ${itemStyle}`} style={{ opacity }}>
      <DragIcon type='primary' />
      {props.children}
    </li>
  )
}

ConstructorItem.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
}
