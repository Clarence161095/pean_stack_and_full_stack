import React, {useState} from 'react'

import {SVG} from '../../constants/svg'
import InputWithIcon from '../ui/button-icon'
import CustomSVG from '../ui/custom-svg'
import classes from './index.module.scss'

export default function Navigator() {
  const [isVisibleLogo, setIsVisibleLogo] = useState(true)

  function focusHandler() {
    console.log('Child focused!!', isVisibleLogo)
    setIsVisibleLogo(false)
  }

  return (
    <div className={classes.nav}>
      <div className={classes.left}>
        {isVisibleLogo ? (
          <img
            src='assets/facebook_logo_icon.png'
            alt='Facebook Logo'
          />
        ) : (
          <div className={classes.arrow}>
            <CustomSVG svgCode={SVG.leftArrow} type='span'/>
          </div>
        )}

        <InputWithIcon
          svg={SVG.search}
          placeholder='Tìm kiếm trên Facebook'
          onFocused={focusHandler}
          onBlurred={() => {
            console.log('Child Blurred', isVisibleLogo)
            setIsVisibleLogo(true)
          }}
        />
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
