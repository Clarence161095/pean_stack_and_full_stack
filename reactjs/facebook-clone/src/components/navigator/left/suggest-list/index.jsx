import React, { useState } from 'react'
import SuggestItem from './suggest-item'
import classes from './index.module.scss'

export default function SuggestList({list}) {
  const [color, setColor] = useState('red')
  function switchColor() {
    setColor(color === 'red' ? 'gray': 'red')
  }
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
                color={color}
                onClick={(_abc) => {
                  switchColor()
                  _abc((name)=> {console.log("Here!!! ", name);})
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
