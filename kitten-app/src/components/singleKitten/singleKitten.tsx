import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { EditKittenForm}  from "../editKittenForm/editKittenForm";
import { Kitten } from "../../models/Kitten";
import { declension, yearNaming } from "../yearNaming/yearNaming";

type SingleKittenPropsType = {
    kitten: Kitten;
}

export function SingleKitten({kitten}: SingleKittenPropsType) {
    const [edit, setEdit] = useState<boolean>(false)
    
    const handleToggleEdit = () => {
        setEdit(!edit);
    }

    return (
        <div className="kitten">
            <img src={`/images/${kitten.img}`} alt={kitten.title}/>
            <h2>{kitten.title}</h2>
            <h3>{kitten.isAdopted}</h3>
            <span> {kitten.age} {yearNaming(+kitten.age, declension)}</span>
            <div> {kitten.isAdopted}</div>
            <div className="kitten-controls">
                <AiFillEdit onClick={handleToggleEdit}/>
                <AiFillDelete />
            </div>
            {edit
                ?<EditKittenForm 
                    data={kitten} updateKitten={function (newKitten: Kitten): void {
                        throw new Error("Function not implemented.");
                    } } handleToggleEdit={function (): void {
                        throw new Error("Function not implemented.");
                    } }
                />                
                : null}
        </div>
    )
}


