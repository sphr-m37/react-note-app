import React, { useEffect, useState } from 'react'
import { Note } from './Note'
import { ColorBox } from './ColorBox'

export const NoteApp = () => {


    const colors = [
        "#fff",
        "#FFD37F",
        "#FFFA81",
        "#D5FA80",
        "#78F87F",
        "#79FBD6",
        "#79FDFE",
        "#7AD6FD",
        "orange",
        "#D687FC",
        "#FF89FD",
    ]

    const [notes, setNotes] = useState([])
    const [noteTitle, setNoteTitle] = useState('')
    const [inputColor, setInputColor] = useState('#fff')

    useEffect(() => {
        setNotes(JSON.parse(localStorage.getItem('notes')) || [])
    }, [])

    const clickHandler = () => {

        if (noteTitle.trim() !== '') {
            const newNote = { id: notes.length + 1, noteTitle, color: inputColor }

            if (localStorage.getItem('notes')) {
                const newNotes = JSON.parse(localStorage.getItem('notes'))
                newNotes.unshift(newNote)
                localStorage.setItem('notes', JSON.stringify(newNotes))
            } else {
                localStorage.setItem('notes', JSON.stringify([newNote]))
            }
            setNotes([...notes, newNote])
            setNoteTitle('')
            setInputColor('#fff')
        }
    }
    const clearAll = () => {
        localStorage.setItem('notes', JSON.stringify([]))
        setNotes([])
    }


    return (
        <>
            <div>
                <section id="home">
                    <div className="container">
                        <div className="header upper">React Note App</div>
                        <br /><br />
                        <div className="flex row-gt-sm">
                            <div className="flex flex-50-gt-sm">
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                    <input id="input-field" className="form-control"
                                        type="text"
                                        style={{ backgroundColor: inputColor }} placeholder="Something here..."
                                        autoComplete='off'
                                        onChange={(e) => setNoteTitle(e.target.value)}
                                        value={noteTitle}
                                    />
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                    <div id='color-select'>
                                        {colors.map((color, index) => <ColorBox key={index} color={color} setInputColor={setInputColor} />)}
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                    <button
                                        onClick={clickHandler}
                                        id="btn-save" type="button" className="btn btn-outline-info"><span className="fa fa-plus"
                                        ></span></button>
                                    <button
                                        id="btn-delete"
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={clearAll}
                                    >
                                        <span id="btn-icon"
                                            className="fa fa-eraser">
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex row-gt-sm">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="container">
                                    <div className="row">
                                        <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">
                                            {
                                                notes.map(note => <Note key={note.id} note={note} setNotes={setNotes} notes={notes} />)
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
