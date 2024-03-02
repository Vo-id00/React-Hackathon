import React from 'react';
import python from './images/cat_python.png';
import web from './images/web_dev_5.jpg';
import ps from './images/aws_1.jpg';
import design from './images/design_2.jpg';
import cat from './images/cat_data_science.png';


const Header = () => {
  return (
    <header style={{ backgroundColor: 'black', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
      <h1>udemy</h1>
    </header>
  );
};

const Banner = () => {
  return (
    <section className="banner" style={{ backgroundColor: '#007791', color: '#fff', padding: '50px 0', textAlign: 'center' }}>
      <h2>Learn New Skills Online</h2>
      <p>Choose from over 130,000 online video courses with new additions published every month</p>
      <button style={{ padding: '10px 20px', fontSize: '1.2rem', backgroundColor: '#fff', color: '#007791', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Explore Courses</button>
    </section>
  );
};

const FeaturedCourses = () => {
  return (
    <section className="featured-courses" style={{ backgroundColor: '#f8f9fa', padding: '50px 0', textAlign: 'center' }}>
      <h2>Featured Courses</h2>
      <div className="course-list">
        {/* Course cards go here */}
        <div className="course-card" style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '20px', margin: '20px', display: 'inline-block',cursor:'Pointer' }}>
          <img src={python} alt="Canvas Logo" style={{ width: '150px', height: '100px', marginBottom: '10px' }} />
          <h3>Phython</h3>
          <p>Description of the course</p>
        </div>

        <div className="course-card" style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '20px', margin: '20px', display: 'inline-block' ,cursor:'Pointer'}}>
          <img src={web} alt="Canvas Logo" style={{ width: '150px', height: '100px', marginBottom: '10px' }} />
          <h3>Web Deveopment</h3>
          <p>Description of the course</p>
        </div>


        <div className="course-card" style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '20px', margin: '20px', display: 'inline-block', cursor:'Pointer'}}>
          <img src={ps} alt="Canvas Logo" style={{ width: '150px', height: '100px', marginBottom: '10px' }} />
          <h3>AWS</h3>
          <p>Description of the course</p>
        </div>

        <div className="course-card" style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '20px', margin: '20px', display: 'inline-block', cursor:'Pointer'}}>
          <img src={design} alt="Canvas Logo" style={{ width: '150px', height: '100px', marginBottom: '10px' }} />
          <h3>Photo Shop</h3>
          <p>Description of the course</p>
        </div>

        <div className="course-card" style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '20px', margin: '20px', display: 'inline-block',cursor:'Pointer' }}>
          <img src={cat} alt="Canvas Logo" style={{ width: '150px', height: '100px', marginBottom: '10px' }} />
          <h3>Data Science</h3>
          <p>Description of the course</p>
        </div>
        
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials" style={{ backgroundColor: '#007791', color: '#fff', padding: '50px 0', textAlign: 'center' }}>
      <h2>Student Testimonials</h2>
      <div className="testimonial-list">
        {/* Testimonial cards go here */}
        <div className="testimonial-card" style={{ border: '1px solid #fff', borderRadius: '5px', padding: '20px', margin: '20px', display: 'inline-block' }}>
          <p>This is the best online platform that i have seen in my life,which helped me in gaining knowledge</p>
          <p>- John Doe</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#283e4a', color: '#fff', padding: '20px 0', textAlign: 'center' }}>
      <p>&copy; 2024 Udemy Inc. All rights reserved.</p>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Banner />
      <FeaturedCourses />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
