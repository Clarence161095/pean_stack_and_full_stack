import React, {useState} from 'react'

import {SVG} from '../../../constants/svg'
import classes from './index.module.scss'
import CustomSVG from '../custom-svg'

export default function InputWithIcon({
  svg = SVG.search,
  placeholder = 'Search...',
  IconCmp,
}) {
  const [searchIcon, setSearchIcon] = useState(true)
  return (
    <div className={classes.input}>
      <input
        className={searchIcon ? '' : classes.focus}
        onFocus={() => setSearchIcon(false)}
        onBlur={() => setSearchIcon(true)}
        placeholder={placeholder}
      />
      <span className={searchIcon ? '' : classes.hidden}>
        {IconCmp ? IconCmp : <CustomSVG svgCode={svg} />}
      </span>
    </div>
  )
}
