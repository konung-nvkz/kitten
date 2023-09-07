import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Kitten } from '../../models/Kitten';
import '../style.css';

type EditKittenFormProps = {
    data: Kitten;
    updateKitten: (newKitten: Kitten) => void;
    handleToggleEdit: () => void;
}

export function EditKittenForm({ data, updateKitten, handleToggleEdit }: EditKittenFormProps) {
    const [editKitten, setEditKitten] = useState<Kitten>(data);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        setEditKitten({
            ...editKitten,
            [name]: value
        });
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const {title, age, gender, img, isAdopted, coordinatorPhone } = editKitten;

        if (title && age && gender && img && isAdopted && coordinatorPhone) {
            updateKitten(editKitten);
            handleToggleEdit();
        }
    }
    //console.log('edit Kitten>>>>', editKitten);

    return (
        <form className="edit-form" onSubmit={handleSubmit}>
            <input 
                name="title"
                type="text"
                placeholder="Название"
                onChange={handleChange}
                value={editKitten.title}
            />
            <input 
                name="age"
                type="text"
                placeholder="Возраст"
                onChange={handleChange}
                value={editKitten.age}
            />
            <input
                name="gender"
                type="text"
                placeholder="Пол"
                onChange={handleChange}
                value={editKitten.gender}         
            />
            <input 
                name="img"
                type="text"
                placeholder="Изображение"
                onChange={handleChange}
                value={editKitten.img}
            />
            <input
                name="isAdopted"
                type="text"
                placeholder="Пристроен"
                onChange={handleChange}
                value={editKitten.isAdopted}        
            />
            <input
                name="coordinatorPhone"
                type="number"
                placeholder="Телефон координатора"
                onChange={handleChange}
                value={editKitten.coordinatorPhone}        
            />
            <button type="submit">
                Подтвердить
            </button>
        </form>
    );
}