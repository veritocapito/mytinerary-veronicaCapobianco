import image from '../assets/cities.png'

const HeroCities = () => {
    return (
        <>
            <div className='w-full h-[80%] relative '>
            <img src={image} className='h-full w-full object-cover  -z-10 ' alt='cities' />
                <div className="absolute top-0 w-full h-full flex flex-col bg-gray-900/70 text-center justify-center text-white p-4">
                    <h1 className="card-title mx-auto text-5xl font-bold">Cities</h1>
                    <p className="text-2xl py-6 mx-auto w-full max-w-screen-md px-4 sm:px-6 lg:px-8">Collection of the most beautiful places and experiences.</p>
                </div>
            </div>
        </>

    )
}

export default HeroCities