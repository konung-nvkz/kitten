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
    coordinatorPhone: ""
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
    // possible function to handle change on phone. 
    // ?? to be removed later
    // const handlePhoneChange = (value?: string) => {
    //     setNewKitten({
    //         ...newKitten, 
    //         coordinatorPhone: value ?? '',
    //     });
    // }

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

    //console.log('new kitten >>>', newKitten); // put kitten to base on later edition
    
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
                type="tel"
                placeholder="Телефон координатора"
                onChange={handleChange}
                value={newKitten.coordinatorPhone}
                maxLength={18}
            /> 
            {/* Below is a working variant without type check
                to be removed after working library is found and imported. 
                Please do not remove yet.
                NB react-phone-number-input doesn't work due to hooks issue. 
                no working solution has been found.*/}
            {/* <input
                name="coordinatorPhone"
                type="tel"
                placeholder="Телефон координатора"
                onChange={handleChange}
                value={newKitten.coordinatorPhone}
                maxLength={18}
            />    */}
            <button type="submit"> 
                + Добавить в базу
            </button>
        </form>
    );    
}