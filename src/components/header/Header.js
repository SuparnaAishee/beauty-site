import React from 'react';
import CustomLink from './customLink/CustomLink';


const Header = () => {

    return (
        <nav className='text-2xl my-8 font-medium'>
            <div className='text-center flex justify-center'>
                
                <CustomLink to="/" className='mx-2'>Home</CustomLink>
                <CustomLink to="/reviews" className='mx-2'>Reviews</CustomLink>
                <CustomLink to="/dashboard" className='mx-2'>Dashboard</CustomLink>
                <CustomLink to="/blogs" className='mx-2'>Blogs</CustomLink>
                <CustomLink to="/about" className='mx-2'>About</CustomLink>
            </div>
        </nav>

    );
};

export default Header;