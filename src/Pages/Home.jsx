import React from 'react';
import Banner from '../components/Home/Banner'
import About from '../components/Home/About';
import Feature from '../components/Home/Feature';
import FadeInSection from '../components/FadeInSection';
const Home = () => {

  return (
    <>
      <FadeInSection>
        <Banner />
      </FadeInSection>

      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection>
        <Feature />
      </FadeInSection>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  );
};

export default Home;
