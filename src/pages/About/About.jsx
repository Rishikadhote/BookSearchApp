import React from 'react';
import "./About.css";
import aboutImg from "../../images/about.png";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>At Bookhouse, every book is a gateway to a world of discovery and inspiration. We know that literature has the power to change and enrich lives, inspire creativity and imagination, and provide a sanctuary for inquiring minds. From timeless classics to modern bestsellers and buried treasures, our selection caters to spark your imagination and expand your love affair with reading. More than a book collection, Bookhouse is your own library—a space where you can maintain a review journal, monitor your literary journey, and hold dear each unforgettable experience. Here, each page turned becomes an invitation to discover new ideas and ponder the stories that transform you. Welcome to Bookhouse, where your own reading experience opens up into infinite possibilities.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About