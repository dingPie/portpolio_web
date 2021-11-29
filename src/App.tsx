import React, { useState } from 'react';
import Inventory from './component/Inventory/Inventory';
import Profile from './component/Profile/Profile';
import Skill from './component/Skill/Skill';
import Title from './component/Title/TItle';
import NavBar from './NavBar';

function App() {
  const [page, setPage] = useState('profile')

  return (
    <div className="App">
      <NavBar page= {page} setPage={setPage} />

      { page === 'profile' ? <Profile /> : null }
      { page === 'skill' ? <Skill /> : null}
      { page === 'inventory' ? <Inventory /> : null }
      { page === 'title' ? <Title /> : null }

      
    </div>
  );
}

export default App;
