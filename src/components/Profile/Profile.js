import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from'./Profile.module.css';

export default function Profile ({ name, tag, location, avatar, stats }) {
   
    return(
        <Fragment>
        <div className={style.wrapper}>
            
            <div className={style.profile}>
                <div className={style.main_info}>
                    <img
                    src={avatar}
                    alt="user avatar"
                    className={style.avatar}
                    />
                    <p className={style.name}>{name}</p>
                    <p className={style.tag}>@{tag}</p>
                    <p className={style.location}>{location}</p>
                </div>

                <ul className={style.stats}>
                    <li className={style.stats_value}>
                    <span className={style.label}>Followers</span>
                    <span className={style.quantity}>{stats.followers}</span>
                    </li>
                    <li className={style.stats_value}>
                    <span className={style.label}>Views</span>
                    <span className={style.quantity}>{stats.views}</span>
                    </li>
                    <li className={style.stats_value}>
                    <span className={style.label}>Likes</span>
                    <span className={style.quantity}>{stats.likes}</span>
                    </li>
                </ul>
            </div>
        </div>
        </Fragment>
    );

}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),

}

