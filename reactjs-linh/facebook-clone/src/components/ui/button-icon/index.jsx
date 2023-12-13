import React, { useState } from "react";
import classes from "./index.module.scss";
import { SVG } from "../../../constants/svg";
import CustomSVG from "../custom-svg";

export default function InputWithIcon({
  IconCmp,
  svg = SVG.search,
  placeholdersomething = "Search",
  onFocusSomething = () => {},
  onBlurSomething = () => {}
}) {
  //setSearchIconHidden la 1 ham set lai gia tri cho searchIconHidden
  const [searchIconHidden, setSearchIconHidden] = useState(true); //state cho icon search
  return (
    <div className={classes.input}>
      <input
        className={searchIconHidden ? "" : classes.focus}
        onFocus={() => {
          setSearchIconHidden(false); //goi lai ham setSearchIcon
          //TODO: vi sao can truyen lai searchIconHidden vao onFocusSomething ?
          onFocusSomething(searchIconHidden);
        }}
        onBlur={() => {
          setSearchIconHidden(true); //goi lai ham setSearchIcon
          onBlurSomething(searchIconHidden);
        }}
        placeholder={placeholdersomething}
      />
      <span className={searchIconHidden ? "" : classes.hidden}>
        {IconCmp ? IconCmp : <CustomSVG svgCode={svg || SVG.home} />}
      </span>
    </div>
  );
}
