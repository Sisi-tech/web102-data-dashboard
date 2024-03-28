import  {useState } from 'react';

function Header({ searchValue }) {
    return (
        <div className='flex flex-row items-center gap-4 pl-6'>
            <span className='text-5xl'>🍺</span>
            <p className='text-white text-2xl'>{searchValue}</p>
        </div>
    )
};

export default Header;