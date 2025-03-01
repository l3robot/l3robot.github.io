import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({ children, title = 'l3robot' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="stats,finance,design,hockey" />
      </Head>
      <main className={styles.main}>{children}</main>
    </div>
  );
}