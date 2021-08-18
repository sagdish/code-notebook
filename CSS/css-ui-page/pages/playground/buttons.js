import Link from 'next/link';
import styles from '../../styles/Buttons.module.css';

export default function buttons() {
  return (
    <div className={styles.container}>
      <Link href='/'>
        <p className={styles.back}>← Go Back</p>
      </Link>
      <h2>Cool Buttons</h2>
      <div className={`${styles.rotate} ${styles.btn}`}>Hover Me</div>
      <div className={`${styles.rotateTwo} ${styles.btn}`}>Hover Me</div>
      
      {/* swipe button: */}
      <div className={`${styles.rotateThree} ${styles.btn}`}>Hover Me</div>
      {/* opening slide button */}
      <div className={`${styles.opening} ${styles.btn}`}>Hover Me</div>
      {/* stretching effect button */}
      <div className={`${styles.stretch} ${styles.btn}`}>Stretch</div>
      {/* sliding effect button with diff text */}
      <div className={`${styles.slide} ${styles.btn}`}>Button</div>
      <div className={`${styles.slideglow} ${styles.btn}`}>Slide Grow</div>
    </div>
  )
}
