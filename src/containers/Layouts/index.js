import React from 'react';
import DefaultHeader from './DefaultHeader';
import DefaultFooter from './DefaultFooter';

const Layouts = (props) => {
    return (
        <div className="props.class">
        <DefaultHeader/>
            {props.children}
        <DefaultFooter />
        </div>
    )
}

export { Layouts, DefaultHeader, DefaultFooter }
