import React from "react";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Kitten } from "../../models/Kitten";

type SingleKittenPropsType = {
    kitten: Kitten;
}

export function SingleKitten({kitten}: SingleKittenPropsType) {
    return (
        <div className="kitten">
            <img src={'../../images/${kitten.img}'} alt={kitten.title}/>
            <h2>{kitten.title}</h2>
            <span> {kitten.age}</span>
            <div className="kitten-controls">
                <AiFillEdit />
                <AiFillDelete />
            </div>
        </div>
    )
}
