
function NavBar({ searchValue, setSearchValue }) {

    const handleInputChange = (e) => {
        let text = e.target.value;
        text = text.charAt(0).toUpperCase() + text.slice(1);
        setSearchValue(text);
      }

    return (
        <div className="flex flex-col gap-6 pt-10 pl-6">
            <div className="flex gap-3 text-xl font-mono">
                <span>&#127969;</span>
                <p className="text-gray-400">Dashboard</p>
            </div>
            <div className="flex gap-3 text-xl font-mono">
                <span>&#128269;</span>
                <input 
                    type="text" 
                    placeholder="Search" 
                    value={searchValue}
                    onChange={handleInputChange}
                    className="bg-transparent appearance-none w-[160px] text-gray-200"
                />
            </div>
            <div className="flex gap-3 text-xl font-mono">
                <span>&#128302;</span>
                <p className="text-gray-400">About</p>
            </div>
        </div>
    )
}

export default NavBar;