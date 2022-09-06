import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { parseMarkdown } from '../lib/markdown';

export default function Home({ interests_data, skills_data }) {
  const [activeResume, setActiveResume] = useState(false);

  console.log(activeResume)

  function onClickResume() {
    setActiveResume(!activeResume)
    console.log(activeResume)
  }

  // let onClickResume = () => setActiveResume(!activeResume);

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

        <div className={styles.grid}>
          <Link href="/posts/stats/stats"><a className={styles.card}>stats</a></Link>
          <Link href="/posts/finance/finance"><a className={styles.card}>finance</a></Link>
          <Link href="/posts/hockey/design"><a className={styles.card}>design</a></Link>
          <Link href="/posts/hockey/hockey"><a className={styles.card}>hockey</a></Link>
        </div>

        {/* <button className={styles.resume} onClick={onClickResume}>Resume</button> */}
        <a href="https://www.linkedin.com/in/louis-émile-robitaille-7b702689/" className={styles.resume}>Resume</a>
        
        {activeResume && <div>
          <div className={styles.interests} dangerouslySetInnerHTML={{ __html: interests_data.contentHtml }}/>
          <div className={styles.skills} dangerouslySetInnerHTML={{ __html: skills_data.contentHtml }}/>
        </div>}

      </main>

    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  const interests_data = await parseMarkdown("interests")
  const skills_data = await parseMarkdown("skills")
  return {
    props: {
      interests_data,
      skills_data,
    },
  }
}
