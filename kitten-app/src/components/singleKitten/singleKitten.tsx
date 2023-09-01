import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Kitten } from "../../models/Kitten";
import EditKittenForm from "../editKittenForm/editKittenForm";


type SingleKittenPropsType = {
    kitten: Kitten;
}

export function SingleKitten({kitten}: SingleKittenPropsType) {
    const [edit, setEdit] = useState<boolean>(false)

    return (
        <div className="kitten">
            <img src={'../../images/${kitten.img}'} alt={kitten.title}/>
            <h2>{kitten.title}</h2>
            <span> {kitten.age}</span>
            <div className="kitten-controls">
                <AiFillEdit />
                <AiFillDelete />
            </div>
            {edit
                ?<EditKittenForm />
                : null}
        </div>
    )
}
