import React, { useContext } from 'react';

import footerImage from "../assets/Icons/Group 9969.png"

const Footer = () => {

   return (
      <div className='bg-slate-950   overflow-hidden lg:py-8 lg:gap-2 lg:px-12 '>
         <div className='mx-2 my-2 grid lg:grid-cols-5 text-center'>
            <div>
               <h1 className='text-white text-xl font-semibold mb-4'>Work Force</h1>
               <p className='ash-p-tag mb-4'> Our Objective is to eradicate Job hunting hassles for every job seeker and to ease the recruitment process for companies</p>
               <span className='flex justify-center'><img src={footerImage} alt="" className='' /></span>
            </div>
            <div>
               <h1 className='text-white mb-4'>Company</h1>
               <ul className='ash-p-tag'>
                  <li>About Us</li>
                  <li>Work</li>
                  <li>Latest News</li>
                  <li>Careers</li>
               </ul>
            </div>
            <div>
               <h1 className='text-white mb-4'>Product</h1>
               <ul className='ash-p-tag'>
                  <li>Prototype</li>
                  <li>Plans & Pricing</li>
                  <li>Customers</li>
                  <li>Integrations</li>
               </ul>
            </div>
            <div>
               <h1 className='text-white mb-4'>Support</h1>
               <ul className='ash-p-tag'>
                  <li>Help Desk</li>
                  <li>Sales</li>
                  <li>Become a Partner</li>
                  <li>Developers</li>
               </ul>
            </div>
            <div>
               <h1 className='text-white mb-4'>Contact</h1>
               <ul className='ash-p-tag'>
                  <li>Mirpur-10, Dhaka</li>
                  <li>+8801700000000</li>
               </ul>
            </div>
         </div>

      </div>
   );
};

export default Footer;