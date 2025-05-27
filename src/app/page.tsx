'use client';

import { useEffect } from 'react';
import Nav from './components/nav';
import './page.css';
import Typewriter from 'typewriter-effect';
import gsap from 'gsap';
import ReactLenis from 'lenis/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import Footer from './components/footer';

// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const scrollTriggerSettings = {
  //     trigger: '.main',
  //     start: 'top 40%',
  //     toggleActions: 'play reverse play reverse',
  //   };
  
  //   const leftXValues = [-300, -400];
  //   const rightXValues = [300, 400];
  //   const leftRotationValues = [-30, -20];
  //   const rightRotationValues = [30, 20];
  //   const yValues = [50, -100];
  
  //   gsap.utils.toArray('.row').forEach((row, index) => {
  //     const element = row as HTMLElement;
  //     const cardLeft = element.querySelector('.cardLeft') as HTMLElement;
  //     const cardRight = element.querySelector('.cardRight') as HTMLElement;
  
  //     ScrollTrigger.create({
  //       trigger: '.main',
  //       start: 'top center',
  //       end: '140% bottom',
  //       scrub: true,
  //       onUpdate: (self) => {
  //         const progress = self.progress;
  //         cardLeft.style.transform = `translateX(${progress * leftXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * leftRotationValues[index]}deg)`;
  //         cardRight.style.transform = `translateX(${progress * rightXValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * rightRotationValues[index]}deg)`;
  //       }
  //     });
  //   });
  
  //   gsap.to('.line', {
  //     y: 0,
  //     stagger: 0.1,
  //     duration: 0.5,
  //     ease: 'power1.out',
  //     scrollTrigger: scrollTriggerSettings,
  //   });
  
  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <ReactLenis root>
    <section>
      <div className="pageContainer">
        <Nav />
        <div className="content">
          <div className="introductionContainer">
            <div className="introduction">
              <h1>Hi, I’m Victoria! 👋 </h1>
              <div className="typewriter">
                <Typewriter
                  options={{
                    strings: ['UI Engineer', 'Accessible Design', 'Product Thinking'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <h2>I like building things and crafting accessible experiences.</h2>
            </div>
            <div className="introductionImage">
              <img src="/introduction-image.svg" alt="Victoria's profile picture paired with accessibility motifs and cross-hatching patterns." />
            </div>
          </div>
          <h2 className="experienceHeading">TL;DR</h2>
          <ul className="experienceContent">
            <li className="experienceItem">
              <div>UI Engineer @ LinkedIn, building features in 
                <a href="https://www.linkedin.com/sales/index" target="_blank"> Sales Navigator</a>
              </div>
              <span className="dottedLine"></span>
              <div>💻 </div>
            </li>
            <li className="experienceItem">
              <div>Co-creator of <a href="https://playpixlet.com/" target="_blank">Pixlet</a>, an online daily trivia game</div>
              <span className="dottedLine"></span>
              <div>🕹️</div>
            </li>
            <li className="experienceItem">
              <div>Currently based in San Francisco</div>
              <span className="dottedLine"></span>
              <div>🌁</div>
            </li>
            <li className="experienceItem">
              <div>Bachelors & MPS in Information Science @ Cornell University</div>
              <span className="dottedLine"></span>
              <div>🎓</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="introductionImageContainer">
        <img src="/introduction-image.svg" alt="Victoria's profile picture paired with accessibility motifs and cross-hatching patterns." />
      </div>
    </section>
    <section className="mainContent">
      <div className="mainContainer">
        <div className="engBlurb">
          <h3>A little about me</h3>
          <span>Hi! I’m a UI engineer at LinkedIn, building accessible, scalable components that help 800M+ sales professionals connect with the right buyers. I've collaborated closely with cross functional teams on features such as Sales Assistant and Relationship Map, ensuring what we build actually helps people and feels intuitive.</span>
          <span>I care a lot about fast + thoughtful user experiences — and love finding that balance between performance and inclusive design. I specialize in modern frontend frameworks like React and Ember, with a strong focus on accessibility, A/B testing, and performance optimization.</span>
          <span>Feel free to click below and take a look at some of the things I’ve built :)</span>
          <Link href="/work" aria-label="View Victoria's portfolio work" className="workButton">
            <span>View my work</span>
            <FaArrowRight/>
          </Link>
        </div>
      </div>
      <div className="kittyPicture">
        <img src="/kitty.png" alt="Image of my cat, Miso - a cinnamon british shorthair" />            
        <p>hello from my kitty miso! :)</p>
      </div>
    </section>
    <div className="footerOnHomepage">
      <Footer />
    </div>
    </ReactLenis>
  );
}
