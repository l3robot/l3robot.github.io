import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Image className={styles.profile} src="/images/me.jpg" alt="me" width={200} height={200} />
          <h1 className={styles.title}>Émile Robitaille</h1>
          <p>Applied Scientist @ <a href="https://www.coveo.com/en" className={styles.coveo}>COVEO</a></p>
          <a href="https://www.linkedin.com/in/louis-émile-robitaille-7b702689/" className={styles.resume}>LinkedIn</a>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p>I’m currently an Applied Scientist at Coveo, working in the Research and Development team.</p>
            <p>My passion lies in machine learning, especially its applications in decision support. I believe design is a key element in effectively conveying information.</p>
            <p>Also, a big fan of hockey and running!</p>
          </div>
          <div className={styles.skills}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <ul>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>LLM applications</li>
              <li>Software Development</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}