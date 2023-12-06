import React from "react";
import classes from './index.module.scss'

export default function Navigator() {
    return (
        <div className={classes.nav}>
            <div className={classes.right}>
             <img src= "assets/fb.png" alt= "Facebook Logo"/>
                <div>search</div>
            </div>
            <nav>
                <ul className={classes.middle}>
                    <li>
                    <img src= "assets/home.png" alt= "My Home"/>
                    </li>
                    <li>
                    <img src= "assets/Friend.png" alt= "My F"/>
                    </li>
                    <li>
                    <img src= "assets/video.png" alt= "My V"/>
                    </li>
                    <li>
                    <img src= "assets/market.png" alt= "My V"/>
                    </li>
                    <li>
                    <img src= "assets/group.png" alt= "My G"/>
                    </li>
                </ul>
            </nav>
            <div className={classes.left}>
                <img src= "assets/Menu.png" alt= "My Menu"/>
                <img src= "assets/messenger.png" alt= "My Messenger"/>
                <img src= "assets/Noti.png" alt= "My Noti"/>
                <img src= "assets/batman.png" alt= "My Avatar"/>
            </div>
        </div>
    )
}