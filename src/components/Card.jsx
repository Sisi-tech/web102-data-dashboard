
function Card({ info, label }) {

    return (
        <div className="text-gray-200 bg-purple-200/20 w-[100px] sm:w-[260px] flex flex-col justify-center items-center text-center h-[120px] rounded-xl gap-4 text-xl">
            <p>{info}</p>
            <p>{label}</p>
        </div>
    )
}

export default Card; 