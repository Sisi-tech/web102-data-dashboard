import { useState, useEffect } from 'react'
import Header from './components/Header'
import List from './components/List'

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="min-h-screen min-w-full bg-[url('./assets/sky.jpg')] bg-cover pt-20" >
      <Header searchValue={searchValue}/>
      <List searchValue={searchValue} setSearchValue={setSearchValue} />
    </div>
  )
}

export default App
