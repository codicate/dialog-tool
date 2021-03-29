import React from 'react';

export default function CardControl({ editCallback, deleteCallback }) {
  return (
    <div className="cardControl">
      <button id="edit"
        onClick={editCallback}
      >
        <span className="material-icons">
          edit
        </span>
      </button>
      <button id="delete"
        onClick={deleteCallback}
      >
        <span className="material-icons">
          delete
        </span>
      </button>
    </div>
  );
}
