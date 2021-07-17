import Head from 'next/head'
import styles from '../styles/Transitions.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSS Animations & More</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Not so pretty CSS notebook</h1>
      <h2>Transitions and Animations</h2>
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


      {/* transition:transform boxes start */}
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
          transition: transform and duration => transform: translate(value)

          <div className={`${styles.box} ${styles.translate}`}>Transform</div>
          <div className={`${styles.box} ${styles.scale}`}>Scale</div>
          <div className={`${styles.box} ${styles.rotate}`}>Rotate</div>
          <div className={`${styles.box} ${styles.skew}`}>Skew</div>

          <h2> Transform Origin play</h2>
          <div className={`${styles.box} ${styles.origin}`}>transform origin</div>

          <h2> Transform infinite play</h2>
          <div className={`${styles.box} ${styles.endless}`}>transform origin</div>

        </p>
      </div>
      {/* transform boxes end */}

      {/* transform with z, - rotate etc */}
      <div className={styles.zidx}>

        <p>translateZ - move item on Z axis (bring it closer to your eyes, almost same effect as scale) </p>
        <img src='vercel.svg' className={`${styles.img} ${styles.translateZ}`} />
        
        <p>rotate Z - rotate item on Z axis (this turns out is just a regular rotate property 🤯)</p>
        <img src='vercel.svg' className={`${styles.img} ${styles.rotateZ}`} />
        
        <p>rotate X - rotate item on X axis (horizontal axis)</p>
        <img src='vercel.svg' className={`${styles.img} ${styles.rotateX}`} />

        <p>rotate Y - rotate item on Y axis (vertical axis)</p>
        <img src='vercel.svg' className={`${styles.img} ${styles.rotateY}`} />
      </div>



    </div>
  )
}
