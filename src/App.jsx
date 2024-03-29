import { useState, useEffect } from 'react'
import Card from './components/Card';
import Header from './components/Header'
import List from './components/List'
import NavBar from './components/NavBar';

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="min-h-screen min-w-full bg-[url('./assets/sky.jpg')] bg-cover grid grid-cols-5 sm:grid-cols-5 pt-0" >
      <div className='bg-purple-200/20 h-full col-span-2 sm:col-span-1 pt-20'>
        <Header searchValue={searchValue}/>
        <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='flex flex-col items-center col-span-3 sm:col-span-4 pt-20 pl-20 gap-6'>
        <div className='flex gap-4'>
          <Card info="123" label="Top One"/>
          <Card info="123" label="Top One"/>
          <Card info="123" label="Top One"/>
        </div>
        <List searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </div>
  )
}

export default App
