import Link from 'next/link';
import styles from './index.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/news">お知らせ</Link>
          </li>
          <li className={styles.item}>
            <Link href="/recruit">採用情報</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <p>©Accueil Inc. All Rights Reserved 2025</p>
    </footer>
  );
}
