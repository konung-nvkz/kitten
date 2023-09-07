import React, { FC, useState }  from 'react';
import './App.css';
import { Kitten } from '../../models/Kitten';
import  { AddKittenForm }  from '../addKitten/addKittenForm';
import { DisplayKitten } from '../displayKitten/displayKitten';

const App: FC = () => {
  const [kittenList, setKittenList] = useState<Kitten[]>([]);
  const addKitten = (newKitten: Kitten) => {
    setKittenList([...kittenList, newKitten]);
  }

  const updateKitten = (newKitten: Kitten) => {
    setKittenList(kittenList.map((kitten) => 
      (kitten.id===newKitten.id ? newKitten : kitten)))
  }

  const deleteKitten = (id:number | string) => {
    const newKittenList = kittenList.filter(kitten => kitten.id !== id);
    setKittenList(newKittenList);
  }

  console.log('kittenList >>', [kittenList])

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrap">
          <span className='heading'>Below there will be a CATalogue of cats that need adoption</span>
          <AddKittenForm
            addKitten={addKitten}
          />
          <DisplayKitten
            kittenList={kittenList}
            updateKitten={updateKitten}
            deleteKitten={deleteKitten}
            /> 
        </div>
      </header>
    </div>
  );
}

export default App;
