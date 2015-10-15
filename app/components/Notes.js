import React from 'react';
import Note from './Note';

export default class Notes extends React.Component {
  renderNote(note) {
    return (
      <li key={note.id}>
        <Note task={note.task} />
      </li>
    );
  }
  render() {
    return (
      <ul>{this.props.items.map(this.renderNote)}</ul>
    );
  }
}
