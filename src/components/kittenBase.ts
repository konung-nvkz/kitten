import {v4} from 'uuid';

interface Kitten {
    id: string;
    title: string;
    age: number;
    gender: string;
    img: string;
    isAdopted: string | boolean;
    coordinatorPhone: string;
}

export const kittensBase: Kitten[] = [
    {
        id: v4().toString(),
        title: 'Мурзик',
        age: 2,
        gender: 'male',
        img: 'kitten1.jpg',
        isAdopted: false,
        coordinatorPhone: '+7 (123) 456-78-90'
    },
    {
        id: v4().toString(),
        title: 'Барсик',
        age: 1,
        gender: 'male',
        img: 'kitten2.jpg',
        isAdopted: true,
        coordinatorPhone: '+7 (123) 456-78-90'
    },
    {
        id: v4().toString(),
        title: 'Флорида',
        age: 3,
        gender: 'female',
        img: 'kitten3.jpg',
        isAdopted: true,
        coordinatorPhone: '+7 (123) 456-78-90'
    },
];