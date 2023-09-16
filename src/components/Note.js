import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

function Note({ id, text, date, handleDeleteNote }) {
  function onDeleteClick() {
    handleDeleteNote(id);
  }

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small> {date}</small>
        <MdDeleteForever
          onClick={onDeleteClick}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
}

export default Note;
