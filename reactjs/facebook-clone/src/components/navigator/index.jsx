import React from 'react'

import classes from './index.module.scss'

export default function Navigator() {
  return (
    <div className={classes.nav}>
      <div className={classes.right}>
        <img src="assets/facebook_logo_icon.png" alt="Facebook Logo" />
        <div>search</div>
      </div>
      <nav>
        <ul className={classes.middle}>
          <li>
            feed
          </li>
          <li>
            marketplace
          </li>
        </ul>
      </nav>
      <div className={classes.left}>
        <div>chat</div>
        <img src="assets/my_avatar.png" alt='My Avatar'/>
      </div>
    </div>
  )
}
