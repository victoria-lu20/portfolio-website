'use client';

import './footer.css';
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <a
          className="icon"
          href="https://www.linkedin.com/in/victoria-lu20/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Victoria's LinkedIn profile"
        >
          <AiFillLinkedin/>
        </a>
        <a
          className="icon"
          href="mailto:victoria.lu88@gmail.com?subject=Hello from your portfolio!"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email Victoria"
        >
          <AiFillMail />
        </a>
      </div>
      <p>©️ 2025 designed and built by victoria ✨</p>
    </div>
  );
}
