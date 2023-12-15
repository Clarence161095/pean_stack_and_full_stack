import React, {useState} from 'react'

import classes from './index.module.scss'
import CustomSVG from '../../ui/custom-svg'
import InputWithIcon from '../../ui/button-icon'
import {SVG} from '../../../constants/svg'
import SuggestItem from './suggest-item'

export default function LeftNavigator() {
  const [isVisibleLogo, setIsVisibleLogo] = useState(true)

  // TODO: Danh sach suggest được lấy từ 1 list, khi tên dài quá thì xuống dòng. Trường hợp quá 2 dòng thì dòng thứ 2 ...

  // TODO: Tách suggest list thành component riêng biệt.

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
          <p className={classes.title}>Gần đây</p>
          <ul>
            <li>
              <SuggestItem src='assets/avatar2.png'/>
            </li>
            <li>
              <SuggestItem type='group' />
            </li>
            <li>
              <SuggestItem notification='1 thông tin mới' />
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
