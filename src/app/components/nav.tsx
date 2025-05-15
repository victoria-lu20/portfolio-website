'use client';

import styles from './nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.navContainer}>
        <ul>
            <li><a href="/resume">RESUME</a></li>
            <li>PORTFOLIO</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  );
}
