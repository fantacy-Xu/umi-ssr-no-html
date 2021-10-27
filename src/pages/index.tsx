import styles from './index.less';
import { Link } from 'umi';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <p style={{ fontSize: '24px' }}>
        <a href="/test/8888">Test id</a>
      </p>
      <p style={{ fontSize: '24px' }}>
        <a href="/test/test-a-test.html">Test id.html a 标签</a>
      </p>
      <p style={{ fontSize: '24px' }}>
        <Link to="/test/test-link-test.html">Test id.html link</Link>
      </p>
      <p style={{ fontSize: '24px' }}>
        <Link to="/about-us">About us</Link>
      </p>
    </div>
  );
}
