'use client';

import Nav from '../components/nav';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.pageContainer}>
      <Nav />
      <div className={styles.content}>
      </div>
    </main>
  );
}
