import { Link } from 'react-router-dom'
import Card from '../components/Card'
import HeroCities from '../components/HeroCities'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Cities = () =>{
    const [cities , setCities] =useState()
    const url ="http://localhost:8000/api/cities";

    useEffect(() => {
        axios.get(url)
        .then( response => setCities(response.data.cities))
        .catch( error => console.log(error))
    }, []);

    const handleInputChange = async (city) => {
        console.log(city.target.value);
        try {
            const response = await axios.get(`http://localhost:8000/api/cities?city=${city.target.value}`)
            setCities(response.data.cities)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
        <HeroCities />
            <div className='flex flex-col items-center text-center'>

                <div className="relative">
                    <div className="absolute top-11 left-3 pointer-events-auto ">
                        <svg className="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                    </div>
                    
                    <input onChange={handleInputChange} className='focus:outline-none rounded-2xl border-2 border-slate-400 my-8 flex py-2 px-8 gap-8 w-[42.5rem]' type="text" placeholder='Buscar' />
                </div>
                <div className="grid grid-cols-3 my-8 gap-10 items-center">
                    {
                        cities?.map((city) =>{
                            return(
                                <Link className='' key={city._id} to={`/cities/${city._id}`}>
                                    <Card city={city.city} country={city.country} image={city.image}   />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
    //city, country, image
}

export default Cities