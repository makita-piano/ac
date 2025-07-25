import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        ご質問、ご相談は下記フォームよりお問い合わせください。
        <br />
        内容確認後、担当者より通常3営業日以内にご連絡いたします。
      </p>
      <div className={styles.newsLink}>
        <span className={styles.form}>
          <ButtonLink href="https://docs.google.com/forms/d/e/1FAIpQLSdguQTMD3E6Ha687WM-8v3Du5aQCZ3IrY2-TrqIZScM44RIHA/viewform?usp=dialog"　isExternal>フォーム</ButtonLink>
        </span>
      </div>
    </div>
  );
}
