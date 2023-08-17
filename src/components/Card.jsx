
const Card = ({city, country, image}) => {
    return (
        <div className="card w-64 h-64 rounded-3xl overflow-hidden z-10 my-4">
            <figure><img
                alt="ciudad"
                src={image}
                className="absolute inset-0 h-full w-full object-cover"
            /></figure>
            <div className="card-body bg-gray-700/50 z-20 hover:bg-transparent p-4 sm:p-6">
                <h3 className="card-title mt-0.5 text-lg text-white font-bold">
                    {city}
                </h3>
                <p className="card-subtitle text-left mt-2 line-clamp-3 text-sm/relaxed text-white font-bold">
                    {country}
                </p>
            </div>
        </div>
    )
}

export default Card