import React from 'react'
import './About.css';


const About = () => {
  return (
    <div className="about-us-page">
      {/* Golden Box Section */}
      <section className="about-us-box">
        <h2>About Us</h2>
        <p>
          At Golden Blitz, we believe in crafting timeless elegance. Our jewelry reflects tradition, passion, and the art of fine craftsmanship. From exquisite gold pieces to delicate gemstones, we create beauty that lasts generations.
        </p>
      </section>

    <section className="our-story-section">
    <div className="story-banner-large">
    <div className="banner-overlay">
      <h2>Our Story</h2>
      <p>
        Founded in the heart of Sri Lanka, our journey began with a single goldsmith's dream. Over the decades, we have grown into a trusted name, combining heritage with modern luxury to bring you unforgettable treasures.
      </p>
    </div>
  </div>
</section>

      {/* Our Heritage */}
      <section className="heritage-section">
        <h2>Our Heritage</h2>
        <p>
          Passed down through generations, our legacy is built on trust, artistry, and excellence. Golden Blitz is not just a brand; it's a promise of quality, authenticity, and elegance.
        </p>
      </section>
    </div>
  )
}

export default About
