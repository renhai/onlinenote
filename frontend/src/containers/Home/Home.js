import React from 'react';
import {injectIntl } from 'react-intl';
import TextareaAutosize from 'react-autosize-textarea';
import _ from 'lodash';
import { connect } from 'react-redux';
import {loadNotes, saveNotes, changeNotes} from '../../actions/home';
import Sidebar from './Sidebar';
import styles from './Home.css';


// import className from 'classnames/bind';

// const cx = className.bind(require('./Home.css'));

const stateToProps = state => ({
  note: state.home.note
});

const actionToProps = dispatch => ({
  onSaveNotes: (notesId, notes) => {
    dispatch(saveNotes(notesId, notes));
  },
  onLoadNotes: (notesId) => {
    dispatch(loadNotes(notesId));
  },
  onChangeNotes: (notes) => {
    dispatch(changeNotes(notes));
  },
});

@injectIntl
@connect(stateToProps, actionToProps)
export default class Home extends React.Component {

  props: {
    params: {
      notesId: string
    },
    onLoadNotes: Function,
    onSaveNotes: Function,
    onChangeNotes: Function,
    note: Object,
  }

  constructor(props) {
    super(props);
    this.handleOnSaveNotes = _.debounce(this.props.onSaveNotes, 1000);
    this.handleOnChangeNotes = this.handleOnChangeNotes.bind(this);
  }

  componentDidMount() {
    this.props.onLoadNotes(this.props.params.notesId);
  }

  handleOnChangeNotes(evt) {
    const notesId = this.props.params.notesId;
    const notes = evt.target.value;
    this.props.onChangeNotes(notes);
    this.handleOnSaveNotes(notesId, notes);
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <TextareaAutosize
            // innerRef={el => { this.textarea = el; }}
            className={styles.textarea}
            placeholder="Please write notes here."
            onChange={this.handleOnChangeNotes}
            value={this.props.note.notes}
            rows={25}
          />
        </div>
        <Sidebar noteId={this.props.params.notesId} />
      </div>
    );
  }
}
