import React, {useState} from 'react'

import {SVG} from '../../../constants/svg'
import classes from './index.module.scss'
import CustomSVG from '../custom-svg'

export default function InputWithIcon(props123) {
  const [searchIconHidden, setSearchIconHidden] = useState(true)

  // const {
  //   svg = SVG.search,
  //   placeholder = 'Search...',
  //   IconCmp,
  //   onFocused = () => {},
  //   onBlurred = () => {},
  // } = props123;

  return (
    <div className={classes.input}>
      <input
        className={searchIconHidden ? '' : classes.focus}
        onFocus={() => {
          setSearchIconHidden(false)
          props123.onFocused(searchIconHidden)
        }}
        onBlur={() => {
          setSearchIconHidden(true)
          props123.onBlurred(searchIconHidden)
        }}
        placeholder={props123.placeholder}
      />
      <span className={searchIconHidden ? '' : classes.hidden}>
        {props123.IconCmp ? (
          props123.IconCmp
        ) : (
          <CustomSVG svgCode={props123.svg || SVG.home} />
        )}
      </span>
    </div>
  )
}

// Behind the scene of the React Technology
// function reRender(id) {
//   const div = (document.createElement('div').id = id)
//   const dive123 = document.createElement('div')
//   const input123 = (document.createElement('input').className = '')
//   dive123.appendChild(input123)
//   div.appendChild(dive123)
//   div.reRender()
// }

// function useState2(initValue) {
//   let value = initValue
//   const setValue = (newValue) => {
//     reRender()
//     // so on
//     value = newValue
//   }
//   return [value, reRender]
// }
