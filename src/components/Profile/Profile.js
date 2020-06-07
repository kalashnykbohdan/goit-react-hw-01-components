import React, { Fragment } from "react";
import PropTypes from "prop-types";
import './Profile.css';

export default function Profile ({ name, tag, location, avatar, stats }) {
   
    return(
        <Fragment>
        <div className="wrapper">
            
            <div className="profile">
                <div className="main_info">
                    <img
                    src={avatar}
                    alt="user avatar"
                    className="avatar"
                    />
                    <p className="name">{name}</p>
                    <p className="tag">@{tag}</p>
                    <p className="location">{location}</p>
                </div>

                <ul className="stats">
                    <li className="stats_value">
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                    </li>
                    <li className="stats_value">
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                    </li>
                    <li className="stats_value">
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
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

