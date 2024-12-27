import '../styles/main.css'; 
import { useEffect,useRef } from 'react';
import { initializeVanta } from '../VantaEffect';
export default function Footer (){
  const backgroundRef = useRef(null);
  
    useEffect(() => {
      const cleanup = initializeVanta(backgroundRef.current,'birds');
      return () => {
        cleanup();
      };
    }, []);
  return (
    <footer id='contact_me' ref={backgroundRef}>
      <div className='head_main'>
        <div id='contact_me' className='one'>
          <p>
            &copy;{new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}<h3>About Me</h3>
            <p>I&apos;m a software engineer with a passion for technology and design. <br /> I&apos;ve been working remotely for the past 1 years.</p>.
          </p>
        </div>
        <div className='two'>
          <a href='https://www.linkedin.com/in/naurangi-lal-aa3175228/' target='_blank'>LinkedIn</a>
          <a href='https://github.com/naurangi123' target='_blank'>GitHub</a>
          <a href='mailto:naurangilal9675329115' target='_blank'>Email</a>
        </div>
        <div className='hero-contact-me-btn'>
          <a href='mailto:naurangilal9675329115@gmail.com'>Get to Me</a>
        </div>
      </div>
    </footer>

  );
};
