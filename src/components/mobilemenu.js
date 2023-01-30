import React from 'react';
import { NavLink } from 'react-router-dom';

export const MobileMenu = () => {

    
    
    return(

                <div className='overflow-hidden'>
                    <div className="bg-green-200 absolute pl-8 pr-4 pt-3 right-0 h-full translate-x-64">
                        {/* sign up/in */}
                        <ul className='flex gap-5 mt-3 tracking-wide text-lg font-semibold'>
                            <NavLink to='/masuk' className='text-sky-400' >Masuk</NavLink> /
                            <NavLink to='/daftar' className='text-orange-900' >daftar</NavLink>
                        </ul>
                        {/* sign in/up end */}
                        {/* menus */}
                        <ul className='flex flex-col text-center text-lg mt-12 font-medium gap-4'>
                            <NavLink to='/download' className='ml-8' >Download</NavLink>
                            <NavLink to='/koleksi' className='ml-8' >Koleksi</NavLink>
                            <NavLink to='/tentang' className='ml-8' >Tentang</NavLink>
                        </ul>
                        {/* menus end */}
                    </div>
                </div> 
    );
}

export default MobileMenu