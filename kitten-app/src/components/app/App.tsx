import React, { FC, useState }  from 'react';
import './App.css';
import { Kitten } from '../../models/Kitten';
import AddKittenForm from '../addKitten/addKittenForm';

const App: FC = () => {

  const [kittenList, setKittenList] = useState<Kitten[]>([]);

  const addKitten = (newKitten: Kitten) => {
    setKittenList([...kittenList, newKitten]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrap">
          <span className='heading'>Below there will be a CATalogue of cats that need adoption</span>
          <AddKittenForm
            addKitten={addKitten}
          />          
        </div>
      </header>
    </div>
  );
}

export default App;
