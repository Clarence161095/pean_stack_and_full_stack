import React, { useState } from 'react'

import { SVG } from '../../constants/svg'
import CustomSVG from '../ui/custom-svg'
import classes from './index.module.scss'

export default function Navigator() {
  const [searchIcon, setSearchIcon] = useState(true)

  return (
    <div className={classes.nav}>
      <div className={classes.right}>
        <img src="assets/facebook_logo_icon.png" alt="Facebook Logo" />
        <div className={classes.search}>
          <input onFocus={() => setSearchIcon(false)} onBlur={() => setSearchIcon(true)} />
          <span className={searchIcon ? '' : classes.hidden}>
            <CustomSVG svgCode={SVG.search} />
          </span>
        </div>
      </div>
      <nav>
        <ul className={classes.middle}>
          <li>
            <CustomSVG svgCode={SVG.home} />
          </li>
          <li>
            <CustomSVG svgCode={SVG.play} />
          </li>
          <li>
            <CustomSVG svgCode={SVG.shop} />
          </li>
          <li>
            <CustomSVG svgCode={SVG.group} />
          </li>
          <li>
            <CustomSVG svgCode={SVG.game} />
          </li>
        </ul>
      </nav>
      <div className={classes.left}>
        <CustomSVG svgCode={SVG.menu} />
        <CustomSVG svgCode={SVG.message} />
        <CustomSVG svgCode={SVG.notification} />
        <img src="assets/my_avatar.png" alt='My Avatar' />
      </div>
    </div>
  )
}
