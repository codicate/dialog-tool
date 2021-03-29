import React from 'react';

export default function Nav() {
  return (
    <nav id="bottomNav">
      <button id="new">
        <span className="material-icons">
          add_box
        </span>
        <span>New</span>
      </button>

      <button id="clear">
        <span className="material-icons">
          clear_all
        </span>
        <span>Clear Local Storage</span>
      </button>
    </nav>
  );
}
