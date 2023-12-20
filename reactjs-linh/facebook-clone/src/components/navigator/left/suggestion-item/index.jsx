import React, { useEffect,useState } from "react";
import classes from "./index.module.scss";
import {_fetch} from "../../../../mock/fetch.services";

export default function SuggestItem({
  name = "Group Name",
  src = "assets/avatar2.jpeg",
  type = "user",
  alt = "Suggest Avatar",
  notification = "",
}) {
  const [data, setData] = useState([]);

  useEffect(() => {
     const resolve = (data) => {    //EXP: dua cho 1 ham resolve, khi nao can thi goi toi
      setData(data);
    }
    _fetch('list-suggest').then(resolve)
  },[]);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className={classes.suggestItem}>
          <div>
            <img
              src={item.img}
              alt={alt}
              className={item.type === "user" ? "" : classes.groupType}
            />
          </div>
          <div>
            <p className={item.name.length > 10 ? classes.checkLengthName : ""}>
              {item.name}
            </p>
            {item.notification && (
              <div>
                <div className={classes.dot}></div>
                {item.notification}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
