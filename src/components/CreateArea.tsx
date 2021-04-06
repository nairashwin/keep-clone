import React, { useState } from "react";

export interface noteProps {
    noteHead: string;
    noteBody: string;
}
export interface CreateAreaProps {
    // onAdd(note: string[]): void;
    onAdd(note: noteProps): void;
}
const CreateArea = ({ onAdd }: CreateAreaProps) => {
    const [note, setNote] = useState({
        noteHead: "",
        noteBody: ""
    })
    const handleChange = (event: { target: HTMLInputElement | HTMLTextAreaElement }) => {
        const { name, value } = event.target;
        setNote(prevValue => ({
            ...prevValue,
            [name]: value
        }));
        // console.log(name);
        // console.log(value);
        // console.log(note);
    }
    const submitNote = (event: React.MouseEvent<HTMLButtonElement>) => {
        onAdd(note)
        setNote({
            noteHead: "",
            noteBody: ""
        });
        event.preventDefault();

    }
    return (
        <div>
            <form>
                <input
                    onChange={handleChange}
                    name="noteHead"
                    placeholder="Title"
                    value={note.noteHead}
                />
                <textarea
                    onChange={handleChange}
                    name="noteBody"
                    placeholder="Take a note..."
                    rows={3}
                    value={note.noteBody}
                />
                <button onClick={submitNote}>Add</button>
                {/* <button>Add</button> */}
            </form>
        </div>
    );

}

export default CreateArea;