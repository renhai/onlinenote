
const axios = require('axios');

export function loadNotes(noteId: string) {
  return {
    type: 'LOAD_NOTES',
    payload: axios.get(`/api/notes/${noteId}`)
  };
}

export function saveNotes(noteId: string, notes: string) {
  return {
    type: 'SAVE_NOTES',
    payload: axios.post(`/api/notes/${noteId}`, { notes })
  };
}

export function changeNotes(notes: string) {
  return {
    type: 'CHANGE_NOTES',
    payload: notes
  };
}
