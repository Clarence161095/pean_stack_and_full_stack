import React from 'react'

import { SVG } from '../../constants/svg'
import CustomSVG from '../ui/custom-svg'
import classes from './index.module.scss'
import LeftNavigator from './left'

export default function Navigator() {
  return (
    <div className={classes.nav}>
      <LeftNavigator />
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
      <div className={classes.right}>
        <CustomSVG svgCode={SVG.menu} />
        <CustomSVG svgCode={SVG.message} />
        <CustomSVG svgCode={SVG.notification} />
        <img
          src='assets/my_avatar.png'
          alt='My Avatar'
        />
      </div>
    </div>
  )
}
