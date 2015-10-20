import AltContainer from 'alt/AltContainer';
import React from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import connect from '../decorators/connect';

@connect(NoteStore)
export default class App extends React.Component {
  addNote() {
    NoteActions.create({ task : 'New Task' });
  }
  editNote(id, task) {
    NoteActions.update({id, task});
  }
  deleteNote(id) {
    NoteActions.delete(id);
  }
  render() {
    return (
      <div>
        <button className='add-note' onClick={this.addNote}>+</button>
        <AltContainer
          stores={[NoteStore]}
          inject={ {
            items : () => NoteStore.getState().notes
          }}>
          <Notes
            onEdit={this.editNote}
            onDelete={this.deleteNote}/>
        </AltContainer>
      </div>
    );
  }
}
