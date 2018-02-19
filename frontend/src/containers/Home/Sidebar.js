import React from 'react';
import styles from './Sidebar.css';

type propTypes = {
  noteId: string
}

export default function Sidebar(props: propTypes) {
  return (
    <div className={styles.sidebar}>
      <a className="button" href="/" target="_blank" rel="noopener noreferrer" ><i className="fa fa-plus" /></a>
      <a className="button" href={`/${props.noteId}/download`} target="_blank" rel="noopener noreferrer" ><i className="fa fa-download" /></a>
    </div>
  );
}
