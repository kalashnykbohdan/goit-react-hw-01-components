import React, { Fragment } from "react";
import PropTypes from "prop-types";

import style from'./FriendList.module.css';

export default function FriendList ({ friends }) {
   
    return(
        <Fragment>
            <ul className={style.friend_list}>
                    {friends.map(friend => (

                        <li className={style.items}>
                            <span className={friend.isOnline ? style.statusOnLine : style.statusOffline}></span>
                            <img className={style.avatar} src={friend.avatar} alt=""/>
                            <p className={style.name}>{friend.name}</p>
                        </li>
                    ))}
            </ul>

        </Fragment>
    );
}

FriendList.propTypes = {
    friends: PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
    }),
}

