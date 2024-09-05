import React from 'react';
import PropTypes from "prop-types";

function ButtonPrimary({children,onClick,isDisabled }) {
    return (
        <button className={"btn btn-primary text-white text-center"} onClick={onClick} type={"button"} disabled={isDisabled}>{children}</button>
    );
}

export default ButtonPrimary;
ButtonPrimary.propTypes={
    children:PropTypes.any,
    onClick:PropTypes.any,
    isDisabled:PropTypes.any
}