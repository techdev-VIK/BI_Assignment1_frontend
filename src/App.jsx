import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Meetups from "./components/Meetups";

import { useState } from 'react';

function App() {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div>
          <Header setSearchQuery= {setSearchQuery}/>
          <Meetups searchQuery={searchQuery}/>
      </div>
    </>
  )
}

export default App
