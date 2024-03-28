import { useState, useEffect } from 'react'
import Header from './components/Header'
import List from './components/List'
import NavBar from './components/NavBar';

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="min-h-screen min-w-full bg-[url('./assets/sky.jpg')] bg-cover pt-20" >
      <Header searchValue={searchValue}/>
      <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <List searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  )
}

export default App
