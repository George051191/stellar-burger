import React from 'react';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import itemStyles from './constructor-item.module.css';
import { useDrag, useDrop } from 'react-dnd';
import { CHANGE_POSITION_1, CHANGE_POSITION_2 } from '../../services/actions/burger-consructor';
import { useDispatch, useSelector } from 'react-redux';


export function ConstructorItem(props) {
  const { elements } = useSelector(store => store.constructorState)
  const ref = React.useRef();
  const dispatch = useDispatch();

  const { id } = props;
  const [{ isDrag }, drag] = useDrag({
    type: 'element',
    item: { id },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })
  })

  const [{ handlerId }, drop] = useDrop({
    accept: 'element',
    collect: monitor => ({ handlerId: monitor.getHandlerId(), }),
    hover(itemId) {
      if (!ref.current) {
        return;
      }
      const dragIndex = itemId.id;
      const hoverIndex = id;

      if (dragIndex === hoverIndex) {
        return;
      }

      dispatch({ type: CHANGE_POSITION_1, dragIndex: dragIndex })
      dispatch({ type: CHANGE_POSITION_2, hoverIndex: hoverIndex, item: elements[dragIndex] })

      itemId.id = hoverIndex;
    }

  })

  drag(drop(ref));

  return (

    <li ref={ref} className={`mt-4 ${itemStyles.constructoritem__element}`}>
      <DragIcon type='primary' />
      {props.children}
    </li>
  )
}


/**
 *  function moveIngredient() {

        let currentDragItem = newIngredientArray[dragIndex];

        newIngredientArray.splice(dragIndex, 1);

        newIngredientArray.splice(hoverIndex, 0, currentDragItem);
        dispatch({ type: CHANGE_POSITION, drag: newIngredientArray })
      }
      moveIngredient();
 *
 *
 *
 */
