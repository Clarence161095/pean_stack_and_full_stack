import React, { useState } from "react";
import classes from "./index.module.scss";
import CustomSVG from "../ui/custom-svg";
import { SVG } from "../../constants/svg";
import InputWithIcon from "../ui/button-icon";

export default function Navigator() {
  // let isVisibleLogo = true; khong duoc dung nhu vay
  // Su dung co che cua react nhu sau
  const [isVisibleLogo, setIsVisibleLogo] = useState(true); //state cho icon FB
  function focusHandler() {
    console.log("Click Vao", isVisibleLogo);
    setIsVisibleLogo(false);
    //isVisibleLogo = false; khong dc dung nhu nay
    //Do se khong update lai gia tri cho isVisibleLogo
  }
  return (
    <div className={classes.nav}>
      <div className={classes.left}>
        {isVisibleLogo ? (
          <img src="assets/fb.png" alt="Facebook Logo" />
        ) : (
          //CustomSVG co 1 div .svg
          <span className={classes.arrow}>
            <CustomSVG svgCode={SVG.arrow} type='span'/>
          </span>
        )}
        <InputWithIcon
          svg={SVG.search}
          placeholdersomething="Tim kiem tren Facebook" //thay gtri moi cho placeholders
          onFocusSomething={focusHandler}
          //TODO: truyen focusHandler nay la callback ?
          onBlurSomething={() => {
            console.log("click Ra", isVisibleLogo);
            setIsVisibleLogo(true);
          }}
        />
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
      <div className={classes.right}>
        <CustomSVG svgCode={SVG.menu} />
        <CustomSVG svgCode={SVG.messenger} />
        <CustomSVG svgCode={SVG.notificate} />
        <img src="assets/batman.png" alt="My Avatar" />
      </div>
    </div>
  );
}
