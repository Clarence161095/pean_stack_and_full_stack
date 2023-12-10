import React from 'react'

import { SVG } from '../../constants/svg'
import InputWithIcon from '../ui/button-icon'
import CustomSVG from '../ui/custom-svg'
import classes from './index.module.scss'

export default function Navigator() {
  return (
    <div className={classes.nav}>
      <div className={classes.right}>
        {/* Câu hỏi: Làm sao khi click vào thanh Tìm kiếm trên Facebook thì ẩn logo và thay vào đó là nút left-arrow và suggestion box???*/}
        <img
          src='assets/facebook_logo_icon.png'
          alt='Facebook Logo'
        />
        {/* Navigator thì hoàn toàn có thể truyền giá trị thông quan props cho từng component con */}
        <InputWithIcon svg={SVG.search} placeholder='Tìm kiếm trên Facebook'/>
        <InputWithIcon svg={SVG.home}/>
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
      <div className={classes.left}>
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
