import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from 'uuid';
import {phone} from 'phone';
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
    coordinatorPhone: phone('+7(999) 123-4567').phoneNumber??' '
}

export function AddKittenForm({ addKitten }: AddKittenFormProps) {
    const [newKitten, setNewKitten] = useState<Kitten>(initState);
    const [isValidPhone, setIsValidPhone] = useState(true);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewKitten({
            ...newKitten, 
            [name]: value
        });
    }

    const checkIfPhoneIsValid = () => {
        const phoneResult = phone(newKitten.coordinatorPhone);
        
        const { isValid } = phoneResult;
        setIsValidPhone(isValid);
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
                onBlur={checkIfPhoneIsValid}
                value={newKitten.coordinatorPhone}
                className={isValidPhone ? '' : 'input-error'}
                maxLength={18}
            /> 
            {!isValidPhone && <span>Invalid Phone !!!!</span>}

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