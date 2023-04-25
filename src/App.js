import { Helmet } from 'react-helmet';
import React from 'react';

import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Helmet>
      <meta name="description" content="Transform your business with cutting-edge technology solutions from our full-stack development company. We specialize in creating custom web and mobile apps, as well as providing blockchain development services and SaaS solutions. Our team of experts uses the latest tools and technologies to build scalable and secure solutions tailored to your unique needs. Get started today and take your business to the next level with us" />
    </Helmet>
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
);

export default App;
