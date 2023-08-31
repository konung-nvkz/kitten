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
            kittenList={kittenList}/> 
        </div>
      </header>
    </div>
  );
}

export default App;
