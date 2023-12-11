import React, { useState } from "react";
import classes from "./index.module.scss";
import { SVG } from "../../../constants/svg";
import CustomSVG from "../custom-svg";

export default function InputWithIcon({ IconCmp, svg = SVG.search }) {
  const [searchIcon, setSearchIcon] = useState(true);
  return (
    <div className={classes.input}>
      <input
        className= {searchIcon ? '' : classes.focus}
        onFocus={() => setSearchIcon(false)}
        onBlur={() => setSearchIcon(true)}
        placeholder="Tim kiem tren Facebook"
      />
      <span className={searchIcon ? '' : classes.hidden}>
        {IconCmp ? IconCmp : <CustomSVG svgCode={svg} />}
      </span>
    </div>
  );
}
