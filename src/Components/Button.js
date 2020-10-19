import React from 'react';

function Button({ text, onCreate }) {
    return (
        <button onClick={onCreate} className="button-add">
            {text}
        </button>
    );
}

export default Button;
