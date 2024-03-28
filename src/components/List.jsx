import { useState, useEffect } from 'react'
import axios from 'axios'

function List({ searchValue, setSearchValue }) {
  const [breweries, setBreweries] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
            const URL = `https://api.openbrewerydb.org/v1/breweries/search?query=${searchValue}&per_page=16`;
            const response = await axios.get(URL);
            setBreweries(response.data);
            console.log(response);
        } catch (error) {
            console.error("Error fetching data: ", error)
        } finally {
            setLoading(false);
        }
    };
    if (searchValue) {
        fetchData();
    }
  }, [searchValue]);

  const handleInputChange = (e) => {
    let text = e.target.value;
    text = text.charAt(0).toUpperCase() + text.slice(1);
    setSearchValue(text);
  }

  const handleSearch = () => {
    setSearchValue(searchValue);
  }

  return (
    <div className='flex flex-col items-center justify-center h-auto pb-10'>
        <div className='flex gap-4'>
            <input type='text' value={searchValue} onChange={handleInputChange} className='pl-2 p-1 text-xl rounded-md' />
            <button type="button" onClick={handleSearch} className='text-white bg-purple-700 hover:bg-purple-900 font-bold py-2 px-4 rounded-full border-2 border-purple-100/50' >Search</button>
        </div>
        <div className='flex flex-col justify-center pt-8 gap-6 w-1/2'>
            <div className=' text-gray-100 grid grid-cols-6 text-center text-xl'>
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
