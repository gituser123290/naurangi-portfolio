import { useEffect,useRef } from 'react';
import Img from '../assets/static/img.jpg';
import { initializeVanta } from '../VantaEffect';
import '../styles/main.css'

export default function HeroSection() {

  const backgroundRef = useRef(null);

  useEffect(() => {
    const cleanup = initializeVanta(backgroundRef.current,'net');
    return () => {
      cleanup();
    };
  }, []);
  

  return (
    <div ref={backgroundRef} className="hero-container">
      <div className="hero-image">
        <img src={Img} alt="Naurangi Lal"/>
      </div>
      <div className="hero-text-container">
        <h1 className="hero-text-header">
          Nice to meet you! <span>I am <span>Naurangi Lal</span>.</span>
        </h1>
        <p>
          I am a Back-end developer, Full Stack Developer, Python Developer, and Web Developer originally from Saray Brahman, Sambhal, UP, now based in Meerut-Ghaziabad road Duhai, Ghaziabad.
          My passion lies in crafting web applications that connect with users.
        </p>
        <a className="hero-contact-me-btn" href="#contact_me">Contact Me</a>
      </div>
    </div>
  );
}
