import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import '../../components/style.css';
import { Kitten } from "../../models/Kitten";

interface AddKittenFormProps {
    addKitten: (newKitten: Kitten) => void;
}

const initState = {
    id: "", 
    title: "",
    age: "",
    gender: "",
    img: "",
    isAdopted: "",
    coordinatorPhone: 123456789
}

const AddKittenForm: FC<AddKittenFormProps> = ({addKitten})  => {
    const [newKitten, setNewKitten] = useState<Kitten>(initState)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        const { name, value } = e.target;
        setNewKitten({
            ...newKitten, 
            [name] : value
        });
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('handle change>>', e.target);
    }
    console.log('new kitten >>>', newKitten)
    
    return (
    <form onSubmit={handleSubmit} >
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
            type="boolean"
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
    )    
}
export default AddKittenForm;