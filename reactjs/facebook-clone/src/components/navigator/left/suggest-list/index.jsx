import React from 'react'
import SuggestItem from './suggest-item'
import classes from './index.module.scss'

export default function SuggestList({list}) {
  return (
    <>
      <div className={classes.suggest}>
        <p className={classes.title}>Gần đây</p>
        <ul>
          {list.slice(0, 8).map((suggest) => (
            <li>
              {/* <SuggestItem {...suggest} /> */}
              <SuggestItem
                src={suggest.src}
                alt={suggest.alt}
                name={suggest.name}
                type={suggest.type}
                notification={suggest.notification}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
