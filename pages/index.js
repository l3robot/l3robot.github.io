import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>l3robot</title>
        <meta name="description" content="stats,finance,design,hockey" />
      </Head>

      <main className={styles.main}>

        <Image className={styles.profile} src="/images/me.jpg" alt="me" width={200} height={200} />
        <h1 className={styles.title}>Émile Robitaille</h1>

        <p>Applied Scientist in Data Science @ <a href="https://www.coveo.com/en" className={styles.coveo}>COVEO</a></p>

        {/* <div className={styles.grid}>
          <Link href="/posts/stats/stats"><a className={styles.card}>stats</a></Link>
          <Link href="/posts/finance/finance"><a className={styles.card}>finance</a></Link>
          <Link href="/posts/hockey/design"><a className={styles.card}>design</a></Link>
          <Link href="/posts/hockey/hockey"><a className={styles.card}>hockey</a></Link>
        </div> */}

        <a href="https://www.linkedin.com/in/louis-émile-robitaille-7b702689/" className={styles.resume}>Resume</a>

      </main>

    </div>
  )
}
