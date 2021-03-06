import React from 'react';

function Person({ showEdit, items, onRemove, editItem }) {
  return (
    <div className="person">
      {items.map((item, id) => (
        <div className="person__inner" key={item.id}>
          <i className="fas fa-user-circle"></i>
          <span className="person__name">{item.firstName}</span>
          <span className="person__surname">{item.lastName}</span>
          <button
            onClick={() => {
              showEdit();
              editItem(item);
            }}
            className="person__rename">
            <i className="fas fa-pen-square"></i>
          </button>
          <button className="person__delete" onClick={() => onRemove(item, id)}>
            <i className="fas fa-window-close"></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Person;
