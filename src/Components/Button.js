import React from 'react';

function Button({ text, pos, onCreate }) {
    return (
        <button onClick={onCreate} className="button-add">
            {text}
        </button>
    );
}

export default Button;
