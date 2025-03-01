import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Image className={styles.profile} src="/images/me.jpg" alt="me" width={200} height={200} />
      <h1 className={styles.title}>Émile Robitaille</h1>
      <p>Applied Scientist in Data Science @ <a href="https://www.coveo.com/en" className={styles.coveo}>COVEO</a></p>
      <a href="https://www.linkedin.com/in/louis-émile-robitaille-7b702689/" className={styles.resume}>Resume</a>
    </Layout>
  );
}