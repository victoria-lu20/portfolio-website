'use client';

import Nav from './components/nav';
import styles from './page.module.css';
// import { AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';
import ReactLenis from 'lenis/react';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div key={i}>
          <div className={styles.cardLeft}>
            <img src={`img-${2 * i - 1}.jpg`} alt="" />
          </div>
          <div className={styles.cardRight}>
          <img src={`img-${2 * i}.jpg`} alt="" />
          </div>
        </div>
      )
    }

    return rows;
  }
  return (
    <ReactLenis root>
    <section> 
      <div className={styles.pageContainer}>
        <Nav />
        <div className={styles.content}>
          <div className={styles.introductionContainer}>
            <div className={styles.introduction}>
              <h1>Hi, I’m Victoria! 👋 </h1>
              <div className={styles.typewriter}>
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
            <div className={styles.introductionImage}>
              <img src="/introduction-image.svg" alt="Victoria's profile picture paired with accessibility motifs and cross-hatching patterns." />
            </div>
          </div>
          <h2 className={styles.experienceHeading}>TL;DR</h2>
          <ul className={styles.experienceContent}>
            <li className={styles.experienceItem}>
              <div>UI Engineer @ LinkedIn, building features in 
                <a href="https://www.linkedin.com/sales/index" target="_blank"> Sales Navigator</a>
              </div>
              <span className={styles.dottedLine}></span>
              <div>💻 </div>
            </li>
            <li className={styles.experienceItem}>
              <div>Co-creator of <a href="https://playpixlet.com/" target="_blank">Pixlet</a>, an online daily trivia game</div>
              <span className={styles.dottedLine}></span>
              <div>🕹️</div>
            </li>
            <li className={styles.experienceItem}>
              <div>Currently based in San Francisco</div>
              <span className={styles.dottedLine}></span>
              <div>🌁</div>
            </li>
            <li className={styles.experienceItem}>
              <div>Bachelors & MPS in Information Science @ Cornell University</div>
              <span className={styles.dottedLine}></span>
              <div>🎓</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.introductionImageContainer}>
        <img src="/introduction-image.svg" alt="Victoria's profile picture paired with accessibility motifs and cross-hatching patterns." />
      </div>
    </section>
    <section>
      <ul className={styles.workContent}>
        <li className={styles.workItem}>
          <h3>Pixlet: A Daily Game-teasing Game</h3>
          <ArrowUpRight />
        </li>
      </ul>
      {/* {generateRows()} */}
    </section>
    <section>

    </section>
    </ReactLenis>
  );
}


{/* <h2 className={styles.description}>
view my work below or say hi via <a href="mailto:victoria.lu88@gmail.com" target="_blank">email</a>, or <a href="https://www.linkedin.com/in/victoria-lu20/" target="_blank">linkedin</a>
</h2>
<div>
<img src="/homebuddy.jpg" />
</div> */}