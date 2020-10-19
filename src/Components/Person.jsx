import React from 'react';

function Person({ onEdit, items, onRemove }) {
    return (
        <div className="person">
            {items.map((item) => (
                <div className="person__inner" key={item.id}>
                    <i className="fas fa-user-circle"></i>
                    <span className="person__name">{item.firstName}</span>
                    <span className="person__surname">{item.lastName}</span>
                    <button onClick={onEdit} className="person__rename">
                        <i className="fas fa-pen-square"></i>
                    </button>
                    <button className="person__delete">
                        <i onClick={() => onRemove(item)} className="fas fa-window-close"></i>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Person;
