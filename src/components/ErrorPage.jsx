import { FaceFrownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status} = useRouteError()
    return (
        <div className='text-center mt-16'>
            <FaceFrownIcon className='m-auto w-40 h-50 text-slate-700'></FaceFrownIcon>
            <h1 className='text-red-900 text-6xl font-bold'> OOOOOPSSSSS....</h1>
            <h1 className='text-red-600 text-8xl font-bold'> {status}</h1>
            <h1 className='text-red-900 text-2xl font-bold mb-4'> {error ?.message}</h1>
            <Link to="/" className='btn text-xl font-semibold bg-yellow-400 p-2 rounded'>Back to Home</Link>
        </div>
    );
};

export default ErrorPage;