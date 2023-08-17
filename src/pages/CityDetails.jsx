import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";


const CityDetails = () => {
    const { id } = useParams(); // ID de mi evento
    const [ city, setCity] = useState({});
    // Tener una variable de estado para almacenar la info de mi evento

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cities/`+ id)
        .then( response => setCity(response.data.cities))
        .catch( error => console.log(error))
        // Peticion axios para traerme la info de UN SOLO EVENTO
        // Utilizar el ID del use params para hacer esa peticion
    },[])

    // Utilizar esa variable de estado para renderizar la info
    return (
        <div className="bg-gray-900 h-full w-full flex flex-col justify-end items-center">
            <section className='overflow-hidden w-[90vw] bg-gray-50 dark:bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center' >
                <div className="p-8 md:p-12 lg:px-12 lg:py-24">
                    <div className="mx-auto max-w-xl text-center sm:text-left">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">{city.city}</h2>
                        <h4 className='text-xl font-bold text-gray-900 dark:text-white'>{city.country}</h4>
                        <p className="hidden max-w-lg text-gray-900 text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                            {city.description}
                        </p>
                        <div className="mt-4 sm:mt-8">
                            <Link className='inline-block rounded-lg bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400'  to={`/cities/`}>View Itineraries ↓</Link>
                        </div>
                    </div>
                </div>
            <img
                alt="city"
                src={city.image}
                className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-center sm:rounded-xl md:h-[calc(100%_-_4rem)]"
            />
            </section>
        </div>
    )
}

export default CityDetails