import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Hockey() {
    return (
      <div className={styles.container}>
        <Head>
          <title>l3robot</title>
          <meta name="description" content="Hockey related posts" />
        </Head>

        <main className={styles.main}>

          <h1 className={styles.title}>Hockey</h1>

        </main>

      </div>
    )
  }