import React from 'react';

function FieldError({msg}) {
    return <span className={"text-success mt-2 position-absolute"}>{msg}</span>
}

export default FieldError;