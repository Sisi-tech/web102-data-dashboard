import { useState, useEffect } from 'react'
import axios from 'axios'

function List() {
  const [breweries, setBreweries] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const URL = `https://api.openbrewerydb.org/v1/breweries/search?query=${search}&per_page=16`;
        const response = await axios.get(URL);
        setBreweries(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    };
    fetchData();
  }, [search]);

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='flex flex-col items-center justify-center h-auto pb-10'>
        <div className='flex gap-4'>
            <input type='text' value={search} onChange={handleInput} className='pl-2 p-1 text-xl rounded-md' />
            <button type="button" className='text-white'>Search</button>
        </div>
        <div className='flex flex-col justify-center items-center pt-8 gap-6 w-1/2'>
            <div className=' text-gray-100 grid grid-cols-6 text-center'>
                <p>Name</p>
                <p>Type</p>
                <p>City</p>
                <p>State</p>
                <p>Country</p>
                <p>Street</p>
            </div>
            {breweries && (
                <div>
                {breweries.map(brewery => (
                    <div key={brewery.id} className="grid grid-cols-6 text-center text-white">
                    <p style={{ display: 'inline-block', margin: '0 10px' }}>{brewery.name}</p>
                    <p style={{ display: 'inline-block', margin: '0 10px' }}>{brewery.brewery_type}</p>
                    <p style={{ display: 'inline-block', margin: '0 10px' }}>{brewery.city}</p>
                    <p style={{ display: 'inline-block', margin: '0 10px' }}>{brewery.state_province}</p>
                    <p style={{ display: 'inline-block', margin: '0 10px' }}>{brewery.country}</p>
                    <p style={{ display: 'inline-block', margin: '0 10px' }}>{brewery.street}</p>
                    </div>
                ))}
                </div>
            )}
            </div>
    </div>
  )
}

export default List
