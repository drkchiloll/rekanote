import AltContainer from 'alt/AltContainer';
import React from 'react';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import LaneActions from '../actions/LaneActions';
import Editable from './Editable';

export default class Lane extends React.Component {
  constructor(props) {
    super(props);

    const id = props.lane.id;
    this.addNote = this.addNote.bind(this, id);
    this.deleteNote = this.deleteNote.bind(this, id);
    this.editName = this.editName.bind(this, id);
  }
  addNote(laneId) {
    NoteActions.create({task: 'New Task'});
    LaneActions.attachToLane({laneId});
  }
  editName(id, name) {
    console.log('edited lane name', id, name);
  }
  deleteNote(laneId, noteId) {
    LaneActions.detachFromLane({laneId, noteId});
    NoteActions.delete(id);
  }
  render() {
    const {lane, ...props} = this.props;

    return (
      <div {...props}>
        <div className='lane-header'>
          <Editable
            className='lane-name'
            onEdit={this.editName}
            value={lane.name}/>
          <div className='lane-add-note'>
            <button onClick={this.addNote}>+</button>
          </div>
        </div>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            items: () => NoteStore.get(lane.notes || [])
          }}>
            <Notes onEdit={this.editName} onDelete={this.deleteNote}/>
        </AltContainer>
      </div>
    );
  }
}
