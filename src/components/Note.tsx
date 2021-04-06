import React from "react";

interface NoteProps {
    id: number
    title: string;
    content: string;
    onDelete(id: number): void
}
const Note = ({ id, title, content, onDelete }: NoteProps) => {
    const handleClick = () => {
        onDelete(id)
    }
    return (
        <div className="note">
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>

    );
}

export default Note;