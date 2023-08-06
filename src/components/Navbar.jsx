import React, {useState} from 'react';
import Link from './Link';

const Navbar = () => {

    const [nav, setNav] =useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    const links = [
        {title: 'Home', to: '/home'},
        {title: 'Cities', to: '/cities'},
    ]

    return (
        <>
            <div className="w-full  items-center px-4 sm:px-6 lg:px-8 xl:px12 absolute navbar-center z-10 text-white">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                            <h2 className="md:text-2xl font-bold">My Tinerary</h2>
                    </div>
                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center md:gap-6 text-sm">
                                {
                                    links?.map((link, key) => (<Link key={key} title={link.title} to={link.to}/>))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <a className="rounded-md flex btn-primary ml-8 px-5 py-2.5 text-sm font-medium text-white transition" href="/"><img src="../img/user.svg" alt="user"/>Login</a>
                        </div>
                    </div>


                    {/* Hamburger menu */}
                    <div onClick={handleNav} className="md:hidden mx-2 z-10">
                    {nav 
                        ? 
                        <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                        </button>
                        :
                        <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                        </button>
                    }
                    </div>


                    {/* Mobile Menu Dropdown */}
                    <nav aria-label="Global" onClick={handleNav} className={ nav ? 'absolute px-4 py-7 left-0 top-0 w-full bg-gray-500/90' : 'absolute left-[-100%]'}>
                        <ul className="flex flex-col items-center gap-6 text-sm">
                            <h2 className="text-xl self-start font-bold">My Tinerary</h2>
                            {
                                links?.map((link, key) => (<Link key={key} title={link.title} to={link.to}/>))
                            }
                            <div className="sm:flex sm:gap-4">
                                <a className="rounded-md flex btn-primary px-5 py-2.5 text-sm font-medium text-white transition" href="/"><img src="../img/user.svg" alt="user"/>Login</a>
                            </div>
                        </ul>
                    </nav>

                </div>
            </div>
        </>
    )
}

export default Navbar;