// import React, { FC, ChangeEvent, FormEvent, useState } from "react";
// import {v4} from 'uuid';

// import '../../components/style.css';
// import { Kitten } from "../../models/Kitten";


// interface AddKittenFormProps {
//     addKitten: (newKitten: Kitten) => void;
// }

// const initState = {
//     id: "",
//     title: "",
//     age: "",
//     gender: "",
//     img: "",
//     isAdopted: "",
//     coordinatorPhone: 123456789
// }

// const AddKittenForm: FC<AddKittenFormProps> = ({addKitten})  => {
//     const [newKitten, setNewKitten] = useState<Kitten>(initState)

//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
//         const { name, value } = e.target;
//         setNewKitten({
//             ...newKitten, 
//             [name] : value
//         });
//     }
//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const {title, age, gender, img, isAdopted, coordinatorPhone } = newKitten;
//         if (title && age && gender && img && isAdopted && coordinatorPhone) {
//             addKitten({
//                 id: v4(), 
//                 title,
//                 age, 
//                 gender, 
//                 img, 
//                 isAdopted,
//                 coordinatorPhone
//                 });
//             setNewKitten(initState);
//         }
//     }
//     console.log('new kitten >>>', newKitten)
    
//     return (
//     <form onSubmit={handleSubmit} >
//         <input
//             name="title"
//             type="text"
//             placeholder="Кличка"
//             onChange={handleChange}
//             value={newKitten.title}        
//         />
//         <input
//             name="age"
//             type="number"
//             placeholder="Возраст"
//             onChange={handleChange}
//             value={newKitten.age}         
//         />
//         <input
//             name="gender"
//             type="text"
//             placeholder="Пол"
//             onChange={handleChange}
//             value={newKitten.gender}         
//         />
//         <input
//             name="img"
//             type="text"
//             placeholder="Фотография"
//             onChange={handleChange}
//             value={newKitten.img}       
//         />
//         <input
//             name="isAdopted"
//             type="boolean"
//             placeholder="Пристроен"
//             onChange={handleChange}
//             value={newKitten.isAdopted}        
//         />
//         <input
//             name="coordinatorPhone"
//             type="number"
//             placeholder="Телефон координатора"
//             onChange={handleChange}
//             value={newKitten.coordinatorPhone}        
//         />
//         <button type="submit"> 
//             + Добавить в базу
//         </button>
//     </form>
//     )    
// }
// export default AddKittenForm;
import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from 'uuid';

import '../../components/style.css';
import { Kitten } from "../../models/Kitten";

type AddKittenFormProps = {
    addKitten: (newKitten: Kitten) => void;
}

const initState: Kitten = {
    id: "",
    title: "",
    age: "",
    gender: "",
    img: "",
    isAdopted: "",
    coordinatorPhone: 123456789
}

export function AddKittenForm({ addKitten }: AddKittenFormProps) {
    const [newKitten, setNewKitten] = useState<Kitten>(initState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewKitten({
            ...newKitten, 
            [name]: value
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { title, age, gender, img, isAdopted, coordinatorPhone } = newKitten;
        if (title && age && gender && img && isAdopted && coordinatorPhone) {
            addKitten({
                id: uuid(), 
                title,
                age, 
                gender, 
                img, 
                isAdopted,
                coordinatorPhone
            });
            setNewKitten(initState);
        }
    }

    console.log('new kitten >>>', newKitten);
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                type="text"
                placeholder="Кличка"
                onChange={handleChange}
                value={newKitten.title}        
            />
            <input
                name="age"
                type="number"
                placeholder="Возраст"
                onChange={handleChange}
                value={newKitten.age}         
            />
            <input
                name="gender"
                type="text"
                placeholder="Пол"
                onChange={handleChange}
                value={newKitten.gender}         
            />
            <input
                name="img"
                type="text"
                placeholder="Фотография"
                onChange={handleChange}
                value={newKitten.img}       
            />
            <input
                name="isAdopted"
                type="text"
                placeholder="Пристроен"
                onChange={handleChange}
                value={newKitten.isAdopted}        
            />
            <input
                name="coordinatorPhone"
                type="number"
                placeholder="Телефон координатора"
                onChange={handleChange}
                value={newKitten.coordinatorPhone}        
            />
            <button type="submit"> 
                + Добавить в базу
            </button>
        </form>
    );    
}