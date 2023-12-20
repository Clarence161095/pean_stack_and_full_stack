import {SVG} from '../../../constants/svg'
import CustomSVG from '../custom-svg'

import classes from './index.module.scss'

export default function IconButton({
  iconSvg = SVG.leftArrow,
  onClick = () => console.log('Click IconButton!'),
  style = {},
}) {
  return (
    <div
      className={classes.arrow}
      onClick={onClick}>
      <CustomSVG
        style={style}
        svgCode={iconSvg}
        type='span'
      />
    </div>
  )
}
