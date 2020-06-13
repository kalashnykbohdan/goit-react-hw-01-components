import React, { Fragment } from "react";
import PropTypes from "prop-types";

import './Statistics.module.css';
import stayle from'./Statistics.module.css';
import classnames from 'classnames';

export default function Statistics ({ title, stats }) {

    return(
        <Fragment>
            <section className={stayle.statistics}>
                <h2 className={stayle.title}>{title}</h2>

                <ul className={stayle.stat_list}>

                    {stats.map(function(stat, index) {

                        // const color = [blue, violet, red, turquoise];
                        let liStayleColor = func(stat.id)

                        function func(id){
                            switch (id){
                                case ("id-1"):
                                    return classnames(stayle.item, stayle.color1);
                                    // break;
                                case ("id-2"):
                                    return classnames(stayle.item, stayle.color2);
                                    // break;
                                case ("id-3"):
                                    return classnames(stayle.item, stayle.color3);
                                    // break;
                                case ("id-4"):
                                    return classnames(stayle.item, stayle.color4);
                                    // break;
                                    default:
                                        
                                        return stayle.item;  
                            }
                        }

                        if(index < 4){
                            return(
                                <li key={stat.id} className={liStayleColor}>
                                    <span className={stayle.label}>{stat.label}</span>
                                    <span className={stayle.label}>{stat.percentage}%</span>
                                </li>)
                        }else{

                        }

                    })}
                </ul>
            </section>
        </Fragment>
    );
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
}

