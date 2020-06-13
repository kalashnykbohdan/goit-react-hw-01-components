import React, { Fragment } from "react";
import PropTypes from "prop-types";

import style from'./TransactionHistory.module.css';

export default function TransactionHistory ({ items }) {
   
    return(
        <Fragment>
            <table className={style.transaction_history}>
                <thead>
                    <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                {items.map(item => (
                        <tr key={item.id} className={style.item}>
                            <td className={style.label_type}>{item.type}</td>
                            <td className={style.label}>{item.amount}</td>
                            <td className={style.percentage}>{item.currency}</td>
                        </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired, 
        currency: PropTypes.string.isRequired, 
    }),).isRequired,
}

