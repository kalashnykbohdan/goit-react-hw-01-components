import React from 'react';
import PropTypes from 'prop-types';

function Section({title, children}){
    return (
        <section>
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
}

Section.defaultProps = {
    title: '',
}

// Section.PropTypes = {
//     title:PropTypes.string,
//     children:PropTypes.node.isRequired,
// }

export default Section;
