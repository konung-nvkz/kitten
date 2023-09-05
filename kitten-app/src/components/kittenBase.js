import {v4} from 'uuid'

export const kittensBase = [
    {
        id: v4(),
        title: 'Мурзик',
        age: 2,
        gender: 'male',
        img: 'kitten1.jpg',
        isAdopted: false,
        coordinatorPhone: '+7 (123) 456-7890'
    },
    {
        id: v4(),
        title: 'Барсик',
        age: 1,
        gender: 'male',
        img: 'kitten2.jpg',
        isAdopted: true,
        coordinatorPhone: '+7 (123) 456-7890'
    },
    {
        id: v4(),
        title: 'Флорида',
        age: 3,
        gender: 'female',
        img: 'kitten3.jpg',
        isAdopted: true,
        coordinatorPhone: '+7 (123) 456-7890'
    },
];