import React from 'react';

import { SVG } from '../../../../../constants/svg';
import IconButton from '../../../../ui/icon-button';
import classes from './index.module.scss';

export default function SuggestItem({
  src = 'assets/avatar.png',
  alt = 'suggest avatar',
  name = 'User or Group name',
  type = 'user',
  notification = '',
  color = 'yellow',
  onClick = () => {},
}) {

  // TODO: Tìm hiểu trước useContext
  function abc(fnc) {
    fnc(name)
  }

  return (
    <div className={classes.suggestItem}>
      {/* TODO: Hiểu được follow nàyn. Sử dụng cở bản được callback function function.*/}
      <div className={classes.left} onClick={() => onClick(abc)}>
        <img
          src={src}
          alt={alt}
          className={type === 'user' ? '' : classes.groupType}
        />
        <div>
          <p style={{color: color}}>{name}</p>
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

