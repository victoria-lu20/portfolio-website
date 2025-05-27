'use client';

import './page.css';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Work() {

  return (
    <div className="workContainer">
      <Nav />
      <div className="workContentContainer">
        <div className="workTitle">
          <h1>work</h1>
          <p>the things I've designed + built</p>
        </div>
        <div className="workProjects">
          <ul className="projectsList">
            <li>
              <a
                href="https://playpixlet.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Pixlet game"
              >
                <img src="/portfolio/pixlet.svg" alt="Pixlet: A daily holiday guessing game" />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@vxl2/2-in-1-a-more-personable-instagram-41cd2a496b01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View 2 in 1: A more personable Instagram case study on Medium"
              >
                <img src="/portfolio/instagram.svg" alt="2 in 1: A more personable Instagram case study" />
              </a>
            </li>
            <li>
              <a href="/showcase" aria-label="View Victoria's portfolio of LinkedIn features built">
                <img src="/portfolio/linkedin.svg" alt="A portfolio of LinkedIn features built" />
              </a>
            </li>
            <li>
               <a
                href="/homebuddy"
                aria-label="View Homebuddy: Making the off-campus search better product management case study"
              >
                <img src="/portfolio/homebuddy.svg" alt="Homebuddy: Making the off-campus search better" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
