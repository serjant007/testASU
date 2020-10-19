import React from 'react';

function ButtonSave({ text, onClick }) {
    return (
        <button onClick={onClick} className="button-add">
            {text}
        </button>
    );
}

export default ButtonSave;
