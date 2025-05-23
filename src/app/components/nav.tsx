'use client';

import styles from './nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.navContainer}>
        <ul>
            <li>
              <a
                href="/engineering-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Victoria's resume"
              >
                RESUME
              </a>
            </li>
            <li><a href="/work" aria-label="View Victoria's work">WORK</a></li>
            <li>
              <a
                href="mailto:victoria.lu88@gmail.com?subject=Hello from your portfolio!"
                target="_blank"
                aria-label="Send an email to Victoria"
              >
                CONTACT
              </a>
            </li>
        </ul>
    </nav>
  );
}
