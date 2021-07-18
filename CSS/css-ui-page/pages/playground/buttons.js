import Link from 'next/link';
import styles from '../../styles/Buttons.module.css';

export default function buttons() {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <p className={styles.back}>← Go Back</p>
      </Link>
      <h2>Cool Buttons</h2>
      <div className={styles.rotate}>Hover Me</div>
      <div className={styles.rotateTwo}>Hover Me</div>
      
      {/* swipe button: */}
      <div className={styles.rotateThree}>Hover Me</div>
    </div>
  )
}
