import {SVG} from '../../../constants/svg'
import CustomSVG from '../custom-svg'
import React, {useState} from 'react';
import classes from './index.module.scss'

export default function IconButton({
  iconSvg = SVG.leftArrow,
  onClick = () => console.log('Click IconButton!'),
  style = {},
}) {
  const[clickNotification,setClickNotification] = useState('Click IconButton!');

  function buttonClick(event){
   event.stopPropagation();
   setClickNotification(clickNotification);  
   console.log('click', clickNotification);
  }
  return (
    <div
      className={classes.arrow}
      onClick={buttonClick}>
      <CustomSVG
        style={style}
        svgCode={iconSvg}
        type='span'
      />
    </div>
  )
}
