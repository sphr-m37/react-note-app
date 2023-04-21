import React from 'react'

export const Note = ({ note, notes, setNotes }) => {

    const removeHandle = (id) => {
        const oldNotes = JSON.parse(localStorage.getItem('notes'))
        const newNotes = oldNotes.filter(note => note.id !== id)
        localStorage.setItem('notes', JSON.stringify(newNotes))
        setNotes((notes.filter(note => note.id !== id)))
    }
    return (
        <div className="card shadow-sm rounded d-flex flex-md-row flex-sm-column align-items-center p-2 justify-content-between " style={{ backgroundColor: note.color }} >
            <p className="card-text p-3">{note.noteTitle}
            </p>
            <button
                className='btn btn-danger'
                onClick={() => removeHandle(note.id)}>
                X
            </button>
        </div>
    )

}
