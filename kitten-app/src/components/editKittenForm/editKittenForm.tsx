import React, { FC, ChangeEvent, FormEvent, useState } from 'react';
import Kitten from '../models/Kitten';
import './styles.css';


interface editKittenFormProps {
    data: Kitten;
    updateKitten: (newKitten: Kitten) => void;
    handleToggleEdit: () => void;
}


const editKittenForm: FC<editKittenFormProps> = 
({ data, updateKitten, handleToggleEdit }) => {
    const [editKitten, seteditKitten] = 
        useState<Kitten>(data);

const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    seteditKitten({
        ...editKitten,
        [name]: value
    });
}

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { title, price, img } = editKitten;

    if (title && price && img) {
        updateKitten(editKitten);
        handleToggleEdit();
    }
  }

  console.log('edit Kitten>>>>', editKitten)

  return (
    <form 
      className="edit-form"
      onSubmit={handleSubmit}>
      <input 
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={editKitten.title}
      />
      <input 
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={editKitten.price}
      />
      <input 
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={editKitten.img}
      />
      <button type="submit">
        Подтвердить
      </button>
    </form>
  )
}


export default editKittenForm;