import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { EditKittenForm}  from "../editKittenForm/editKittenForm";
import { Kitten } from "../../models/Kitten";
import { addDeclension } from "../addDeclension/addDeclension";

type SingleKittenPropsType = {
    kitten: Kitten;
    updateKitten:(newKitten: Kitten) => void;
    deleteKitten: (id:string) => void;
}

export function SingleKitten({kitten, updateKitten, deleteKitten}: SingleKittenPropsType) {
    const [edit, setEdit] = useState<boolean>(false)

    const handleToggleEdit = () => {
        setEdit(!edit);
    }
    const handleDelete = () => {
        deleteKitten(kitten.id);
    }

    return (
        <div className="kitten">
            <img src={`/images/${kitten.img}`} alt={kitten.title}/>
            <h2>Возраст: {kitten.age} {addDeclension(+kitten.age)}</h2>
            <h3>Пол: {kitten.gender}</h3>            
            <h3 className="extra">Хозяин найден: {kitten.isAdopted}</h3>
            <span> Кличка: {kitten.title}</span>
            <div className="phone">Телефон координатора: {kitten.coordinatorPhone}</div>
            <div> {kitten.isAdopted}</div>
            <div className="kitten-controls">
                <AiFillEdit onClick={handleToggleEdit}/>
                <AiFillDelete onClick={handleDelete}/>
            </div>
            {edit
                ?<EditKittenForm 
                    data={kitten} 
                    updateKitten={updateKitten}
                    handleToggleEdit={handleToggleEdit}
                />                
                : null}
        </div>
    )
}