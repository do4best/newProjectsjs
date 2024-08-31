import React from 'react';

function ButtonPrimary({children,onClick}) {
    return (
        <>
        <button onClick={onClick} className="btn btn-lg btn-primary text-white rounded-3 float-end">{children}</button>
        </>
    );
}

export default ButtonPrimary;