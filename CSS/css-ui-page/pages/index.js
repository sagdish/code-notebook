import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSS Animations & More</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Transitions and Animations</h1>
      <br/>
      <h2>Button Transition</h2>
      
      <div className={styles.buttonsDiv}>
        <button className={styles.button}>Change Width & Color on Hover</button>
        <button className={styles.buttonTwo}>Scale Up</button>
      </div>
  
      <br/>
  
      <div className={styles.containerTwo}>
        <h2>Effects:</h2>
        <p>Hover on boxes to see them moving</p>
        <div id="ease" className={styles.move}>ease</div> 
        <div id="linear" className={styles.move}>linear</div> 
        <div id="ease-in" className={styles.move}>ease in</div>
        <div id="ease-in-out"className={styles.move}>ease in out</div>
        <div id="ease-out" className={styles.move}>ease out</div>
      </div>

      <div>
        <h2>Transform</h2>
        <p>Transform has Four functions:
          <br/>
          scale(number) resize elements
          <br/>
          translate(horizontal num, vertical num) move element, change position
          <br/>
          rotate(degree num) rotate element 
          <br/>
          skew(x axis, y axis) skew element
          <br/>
          usage: 
          <br/>
          transform: translate(value)

          <div className={`${styles.box} ${styles.translate}`}>Transform</div>
          <div className={`${styles.box} ${styles.scale}`}>Scale</div>
          <div className={`${styles.box} ${styles.rotate}`}>Rotate</div>
          <div className={`${styles.box} ${styles.skew}`}>Skew</div>

        </p>
      </div>
    </div>
  )
}
