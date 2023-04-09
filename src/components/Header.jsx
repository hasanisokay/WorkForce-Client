import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    return (
        <>
            <div className='lg:flex justify-between hidden'>
                <Link to={'/'} className='text-2xl font-bold'>WorkForce</Link>
                <div className='ash-p-tag flex gap-8'>
                    <NavLink to={'statistics'}> Statistics</NavLink>
                    <NavLink to={'applied-jobs'}> Applied Jobs</NavLink>
                    <NavLink to={'blog'}> Blog</NavLink>
                </div>
                <button className="btn btn-success">Start Applying</button>
            </div>
            <div className='lg:hidden'>
                {
                    !isMenuOpen && (
                        <button onClick={() => setisMenuOpen(true)}>
                            <Bars3BottomLeftIcon className='w-10 h-10'></Bars3BottomLeftIcon>
                        </button>
                    )
                }
                {isMenuOpen && (
                    <div onClick={() => setisMenuOpen(false)} className='flex bg-cyan-800 rounded text-black absolute top-0 left-0 right-0 flex-col items-center'>
                        <button> <XMarkIcon className='w-10 h-10'></XMarkIcon> </button>
                        <div className='flex flex-col gap-4'>
                            <Link to={'/'} className='text-2xl font-bold text-yellow-600'>WorkForce</Link>
                            <div className='space-y-4 flex flex-col'>
                                <NavLink to={'statistics'}> Statistics</NavLink>
                                <NavLink to={'applied-jobs'}> Applied Jobs</NavLink>
                                <NavLink to={'blog'}> Blog</NavLink>
                            </div>
                            <button className="btn btn-success text-xs">Start Applying</button>
                        </div>



                    </div>
                )}
            </div>
        </>
    );
};

export default Header;