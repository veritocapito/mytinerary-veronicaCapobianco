import videoBg from '../assets/sunset.mp4'

const HeroHome = () => {
    return (
        <>
            <div className='w-full h-full relative bg-gray-900/30'>
                <video src={videoBg} muted autoPlay loop className='h-full w-full object-cover -z-10' />
                <div className="absolute top-0 w-full h-full flex flex-col text-center justify-center text-white p-4">
                    <h1 className="text-5xl font-bold">Find the perfect destination</h1>
                    <p className="py-6 mx-auto w-full max-w-screen-md px-4 sm:px-6 lg:px-8">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                    <a className="btn btn-primary btn-wide self-center" href="#">View More</a>
                </div>
            </div>
        </>

    )
}

export default HeroHome