import React, { useState } from 'react';

type Gender = 'мужской' | 'женский';

export const GenderToggler: React.FC = () => {
    const [selectedGender, setSelectedGender] = useState<Gender>('мужской');

    const handleToggle = () => {
        setSelectedGender(prevGender => (prevGender === 'мужской' ? 'женский' : 'мужской'));
    };

    return (
        <div>
        <p>Пол: {selectedGender}</p>
        <button onClick={handleToggle}>Выбрать пол</button>
        </div>
    );
};

