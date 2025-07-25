import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        現在募集しておりません。
      </p>
    </div>
  );
}
