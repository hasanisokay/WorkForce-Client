import React, { useContext } from 'react';
import { ApiContext } from '../App';


const Footer = () => {
    const data = useContext(ApiContext)
    return (
        <div>
            this is footer {data.length}
        </div>
    );
};

export default Footer;