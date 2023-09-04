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

    // function yearNaming(number: number, titles: string[]): string {
    //     const cases = [2, 0, 1, 1, 1, 2];
    //     return titles[(number % 100 > 4 && number % 100 < 20) ?
    //         2 : cases[(number % 10 < 5) ?
    //             number % 10 : 5]
    //     ];
    // }    
    // const declension: string[] = ['год', 'года', 'лет'];


    return (
        <div className="kitten">
            <img src={`/images/${kitten.img}`} alt={kitten.title}/>
            <h2>{kitten.title}</h2>
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


