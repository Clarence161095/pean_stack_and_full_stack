import React, { useState } from "react";
import classes from "./index.module.scss";
import { list } from "./list";

export default function SuggestItem({
  name = "Group Name",
  src = "assets/avatar2.jpeg",
  type = "user",
  alt = "Suggest Avatar",
  notification = "",
}) {
  const [data, setData] = useState(list);
  // const nameText = (text) => {
  //   if (text.length > 10) {
  //     return text.substring(0, 10) + '...';
  //   }
  //   return text;
  // }

  return (
    <div>
      {data.map((data) => (
        <div className={classes.suggestItem}>
          <div>
            <img
              src={data.img}
              alt={alt}
              className={data.type === "user" ? "" : classes.groupType}
            />
          </div>
          <div>
            <p className={data.name.length > 10 ? classes.checkLengthName : ""}>
              {data.name}
            </p>
            {data.notification && (
              <div>
                <div className={classes.dot}></div>
                {data.notification}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
