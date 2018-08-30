import axios from 'axios';

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCHED = 'FETCHED';
export const ADD_NOTE = 'ADD_NOTE';
export const ADDED = 'ADDED'
export const EDIT_NOTES = 'EDIT_NOTES'
export const EDITED = 'EDITED'
export const ERROR = 'ERROR';

export const fetchingNotes = () => {
    return dispatch => {
        dispatch({
            type: FETCH_NOTES
        })
        axios
            .get('https://killer-notes.herokuapp.com/note/get/all')
            .then(response => {
                console.log(response)
                dispatch({
                    type: FETCHED,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: 'error'
                })
            })
    }
};

export const createNote = (note) => {
    return dispatch => {
        dispatch({
            type: ADD_NOTE
        })
        axios
            .post('https://killer-notes.herokuapp.com/note/create', note)
            .then(response => {
                dispatch({
                    type: ADDED,
                    payload: response.data.results
                });
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: 'error'
                })
            })
    }
};

export const editNote = (note) => {
    return dispatch => {
        dispatch({
            type: EDIT_NOTES
        })
        axios
            .put('https://killer-notes.herokuapp.com/note/edit/id', note)
            .then(response => {
                console.log(response)
                dispatch({
                    type: EDIT_NOTES,
                    payload: response.data
                });
            })
            .then(response => {
                console.log(response)
                dispatch({
                    type: EDITED,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: 'error'
                })
            })
    }
};