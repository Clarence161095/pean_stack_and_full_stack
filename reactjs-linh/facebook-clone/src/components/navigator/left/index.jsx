import React, { useState } from "react";
import { SVG } from "../../../constants/svg";
import classes from "./index.module.scss";
import CustomSVG from "../../ui/custom-svg";
import InputWithIcon from "../../ui/button-icon";
import SuggestItem from "./suggestion-item";

export default function LeftNavigator() {
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
    <div
      className={`${classes.left} ${!isVisibleLogo ? classes.leftBorder : ''}`}
    >
      <div className={classes.searchControl}>
        {isVisibleLogo ? (
          <img src="assets/fb.png" alt="Facebook Logo" />
        ) : (
          //CustomSVG co 1 div .svg
          <span className={classes.arrow}>
            <CustomSVG svgCode={SVG.arrow} type="span" />
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
      {/* REMEMBER: && check 1 trong 2 dung thi lay cai dung dau tien truoc */}
      {!isVisibleLogo && (
        <div className={classes.suggest}>
          <p className={classes.title}>Gần đây</p>
          <ul>
            <li><SuggestItem /></li>
          </ul>
        </div>
      )}
    </div>
  );
}
