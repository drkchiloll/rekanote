import React from 'react';
import Note from './Note';

export default class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.renderNote = this.renderNote.bind(this);
  }
  renderNote(note) {
    return (
      <li className='note' key={note.id}>
        <Note
          onEdit={this.props.onEdit.bind(null, note.id)}
          onDelete={this.props.onDelete.bind(null, note.id)}
          task={note.task}/>
      </li>
    );
  }
  render() {
    const notes = this.props.items;
    return (
      <ul className='notes'>{notes.map(this.renderNote)}</ul>
    );
  }
}
