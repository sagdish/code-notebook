import styles from '../../styles/Buttons.module.css'

export default function buttons() {
  return (
    <div className={styles.container}>
      <h2>Cool Buttons</h2>
        <div className={styles.rotate}>Hover Me</div>
        <div className={styles.rotateTwo}>Hover Me</div>
      
      {/* swipe button: */}
        <div className={styles.rotateThree}>Hover Me</div>
    </div>
  )
}
