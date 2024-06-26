import { useState, useEffect } from 'react'
import Card from './components/Card';
import Header from './components/Header'
import List from './components/List'
import NavBar from './components/NavBar';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [topBrewery, setTopBrewery] = useState(null);

  return (
    <div className="min-h-screen min-w-full bg-[url('./assets/sky.jpg')] bg-cover grid grid-cols-5 sm:grid-cols-5 pt-0 pl-4 pr-4" >
      <div className='bg-purple-200/20 h-full col-span-2 sm:col-span-1 pt-20'>
        <Header searchValue={searchValue}/>
        <NavBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='flex flex-col items-center col-span-3 sm:col-span-4 pt-10 pl-10 gap-6'>
        {topBrewery && (
          <div className='flex gap-4'>
            <Card info={topBrewery.name} label="Top One"/>
            <Card info={topBrewery.city} label="City"/>
            <Card info="&#128509;" label={topBrewery.country}/>
        </div>
        )}
        <List searchValue={searchValue} setSearchValue={setSearchValue} setTopBrewery={setTopBrewery} />
      </div>
    </div>
  )
}

export default App
