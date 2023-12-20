import React from 'react'

import classes from './index.module.scss'
import IconButton from '../../../../ui/icon-button'
import {SVG} from '../../../../../constants/svg'

export default function SuggestItem({
  src = 'assets/avatar.png',
  alt = 'suggest avatar',
  name = 'User or Group name',
  type = 'user',
  notification = '',
  onClick = () => {
    console.log('Click SuggestItem: ', name)
  },
}) {
  return (
    <div
      className={classes.suggestItem}
      onClick={onClick}>
      <div className={classes.left}>
        <img
          src={src}
          alt={alt}
          className={type === 'user' ? '' : classes.groupType}
        />
        <div>
          <p>{name}</p>
          {notification && (
            <div>
              <div className={classes.dot}></div>
              {notification}
            </div>
          )}
        </div>
      </div>
      <IconButton
        iconSvg={SVG.leftArrow}
        style={{ transform: 'scale(0.85)', opacity: 0.7 }}
      />
    </div>
  )
}
