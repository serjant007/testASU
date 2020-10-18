import React from 'react';

function Person({ onEdit }) {
    return (
        <div className="person">
            <div className="person__inner">
                <i className="fas fa-user-circle"></i>
                <span className="person__name">John</span>
                <span className="person__surname">Smith</span>
                <button onClick={onEdit} className="person__rename">
                    <i className="fas fa-pen-square"></i>
                </button>
                <button className="person__delete">
                    <i className="fas fa-window-close"></i>
                </button>
            </div>
        </div>
    );
}

export default Person;
