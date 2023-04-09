import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between'>
            <Link to={'/'} className='text-2xl font-bold'>WorkForce</Link>
            <div className='ash-p-tag flex gap-8'>
                <NavLink to={'statistics'}> Statistics</NavLink>
                <NavLink to={'applied-jobs'}> Applied Jobs</NavLink>
                <NavLink to={'blog'}> Blog</NavLink>
            </div>
            <button className="btn btn-success">Start Applying</button>
        </div>
    );
};

export default Header;