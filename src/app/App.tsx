import { LayoutComponent } from './layout/layout';
import 'antd/dist/antd.css'
import styles from './App.css'

function App() {
  return (
    <div className={styles.app}>
      <LayoutComponent />
    </div>
  );
}

export default App;
