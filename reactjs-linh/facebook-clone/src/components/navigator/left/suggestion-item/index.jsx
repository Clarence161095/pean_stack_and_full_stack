import React, { useState } from "react";
import classes from "./index.module.scss";

export default function SuggestItem({
  imageUrl = "assets/avatar2.jpeg"
}) {
  const [background, setBackground] = useState("#18191A");
  const handleMouseOver = () => {
    setBackground("#6b6c6d");
  };
  const handleMouseOut = () => {
    setBackground("#18191A"); // Thay đổi màu nền khi di chuột ra
  };

  return (
    <div
      className={classes.search}
      style={{ backgroundColor: background }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={classes.avatar}>
        <img src={imageUrl} alt="Facebook Avatar" />
      </div>
      <div className={classes.info}>
        <span className={classes.name}>Pham Tuan Linh</span>
        <div className={classes.amountInfo}>
          <div className={classes.circleNotification}></div>
          <span className={classes.nameNotification}>có 1 thông báo</span>
        </div>
      </div>
      <div className={classes.iconDelete}>
        <img src="assets/icon2.svg" alt="Delete Button" />
      </div>
    </div>
  );
}
