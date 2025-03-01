import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Design() {
    return (
      <div className={styles.container}>
        <Head>
          <title>l3robot</title>
          <meta name="description" content="Design related posts" />
        </Head>

        <main className={styles.main}>

          <h1 className={styles.title}>Design</h1>

        </main>

      </div>
    )
  }