import { BellIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

function Header(): JSX.Element
{
    const [ isScrolled, setIsScrolled ] = useState(false)
    const { logout } = useAuth()
    useEffect(() =>
    {
        const handelScroll = () =>
        {
            if (window.scrollY > 0)
            {
                setIsScrolled(true)
            } else
            {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handelScroll)

        return () =>
        {
            window.removeEventListener("scroll", handelScroll)
        }
    }, [])

    return (
        <header className={ `${ isScrolled && 'bg-[#141414]' }` }>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://rb.gy/ulxxee"
                    width={ 100 }
                    height={ 100 }
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink font-semibold text-white text-base">Home</li>
                    <li className="headerLink font-normal text-base">TV Shows</li>
                    <li className="headerLink font-normal text-base">Movies</li>
                    <li className="headerLink font-normal text-base">New & Popular</li>
                    <li className="headerLink font-normal text-base">My List</li>
                </ul>
            </div>
            <div className='flex px-3 space-x-4 items-center font-normal text-xl text-shadow-lg'>
                <SearchIcon className='hidden sm:inline h-6 w-6 cursor-pointer text-shadow-lg' />
                <p className="hidden lg:inline text-shadow-lg">Kids</p>
                <BellIcon className='inline h-6 w-6 cursor-pointer text-shadow-lg' />
                {/* <Link href="/account"> */}
                    <img
                        src="https://rb.gy/g1pwyx"
                        //onClick={logout}
                        alt=""
                        className="cursor-pointer rounded"
                    />
                {/* </Link> */}
            </div>
        </header>
    )
}

export default Header
