import React from 'react'

import classes from './index.module.scss'

export default function SuggestItem({
  src = 'assets/avatar.png',
  alt = 'suggest avatar',
  name = 'User or Group name',
  type = 'user',
  notification = '',
}) {
  return (
    <div className={classes.suggestItem}>
      <img
        src={src}
        alt={alt}
        className={type === 'user' ? '' : classes.groupType}
      />
      <div>
        <p>{name}</p>
        {notification && (
          <div>
            <div className={classes.dot}></div>{notification}
          </div>
        )}
      </div>
    </div>
  )
}
