import styles from './index.less';
import { Link } from 'umi';
export default function AboutUs() {
  return (
    <div>
      <h1 className={styles.title}>AboutUs</h1>
      <p style={{ fontSize: '24px' }}>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}
