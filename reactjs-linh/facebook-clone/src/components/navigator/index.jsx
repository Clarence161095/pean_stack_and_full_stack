import React from "react";
import classes from "./index.module.scss";
import CustomSVG from "../ui/custom-svg";
import { SVG } from "../../constants/svg";
import InputWithIcon from "../ui/button-icon";

export default function Navigator() {
  return (
    <div className={classes.nav}>
      <div className={classes.right}>
        <img src="assets/fb.png" alt="Facebook Logo" />
        <InputWithIcon svgCode={SVG.home} />
      </div>
      <nav>
        <ul className={classes.middle}>
          <li>
            <CustomSVG svg={SVG.home} />
          </li>
          <li>
            <CustomSVG svgCode={SVG.friend} />
          </li>
          <li>
            <CustomSVG svgCode={SVG.video} />
          </li>
          <li>
            <CustomSVG svgCode={SVG.market} />
          </li>
          <li>
            <CustomSVG svgCode={SVG.game} />
          </li>
        </ul>
      </nav>
      <div className={classes.left}>
        <CustomSVG svgCode={SVG.menu} />
        <CustomSVG svgCode={SVG.messenger} />
        <CustomSVG svgCode={SVG.notificate} />
        <img src="assets/batman.png" alt="My Avatar" />
      </div>
    </div>
  );
}
