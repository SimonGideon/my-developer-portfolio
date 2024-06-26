import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { simon, bwmap, worldmap, network } from '../assets';

const Hero = () => {
  const [space, setSpace] = useState('\u00A0');

  useEffect(() => {
    const updateSpace = () => window.innerWidth <= 768? setSpace(' ') : setSpace('\u00A0');
    updateSpace();
    window.addEventListener('resize', updateSpace);
    return () => {
      window.removeEventListener('resize', updateSpace);
    };
  }, []);
  return (
    <>
      <div className="hidden md:block lg:hidden">
        {`let space = " "`};
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-100 h-[100vh] w-screen">
        <img
          src={network}
          alt="neural network"
          className="w-full h-full block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="sm:text-battleGray  sm:text-[1em] 
                text-eerieBlack text-[1em] font-mova
                font-extrabold uppercase">
                Simon{`${space}`}Gideon
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              A Full-stack Web developer <br className="sm:block hidden" />
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-1 z-10 w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 ml-[29vw] 
            lg:ml-[65vw] md:ml-[29vw] xmd:ml-[40vw] 2xl:ml-[50vw]
            sm:h-[90vh] md:h-[65vh] xl:h-[80vh] z-0"
            src={simon}
            alt="simon"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
