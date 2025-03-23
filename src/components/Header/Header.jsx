import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>"Enter Bookhouse, where every chapter is a call to discover ageless marvels and write your own review journal of literary travels"</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header