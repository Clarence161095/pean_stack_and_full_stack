import React, {useState} from 'react'

import classes from './index.module.scss'
import CustomSVG from '../../ui/custom-svg'
import InputWithIcon from '../../ui/button-icon'
import {SVG} from '../../../constants/svg'
import SuggestItem from './suggest-item'

export default function LeftNavigator() {
  const [isVisibleLogo, setIsVisibleLogo] = useState(true)

  return (
    <div
      className={`${classes.left} ${!isVisibleLogo ? classes.leftBorder : ''}`}>
      <div className={classes.searchControl}>
        {isVisibleLogo ? (
          <img
            src='assets/facebook_logo_icon.png'
            alt='Facebook Logo'
          />
        ) : (
          <div className={classes.arrow}>
            <CustomSVG
              svgCode={SVG.leftArrow}
              type='span'
            />
          </div>
        )}

        <InputWithIcon
          svg={SVG.search}
          placeholder='Tìm kiếm trên Facebook'
          onFocused={() => {
            setIsVisibleLogo(false)
          }}
          onBlurred={() => {
            setIsVisibleLogo(true)
          }}
        />
      </div>
      {!isVisibleLogo && (
        <div className={classes.suggest}>
          <p>Gần đây</p>
          <ul>
            <li>
              <SuggestItem />
            </li>
            <li>
              <SuggestItem />
            </li>
            <li>
              <SuggestItem />
            </li>
            <li>
              <SuggestItem />
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
