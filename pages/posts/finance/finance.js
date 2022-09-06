import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

export default function Finance() {
    return (
      <div className={styles.container}>
        <Head>
          <title>l3robot</title>
          <meta name="description" content="Finance related posts" />
        </Head>
  
        <main className={styles.main}>
  
          <h1 className={styles.title}>Finance</h1>
  
        </main>
  
      </div>
    )
  }