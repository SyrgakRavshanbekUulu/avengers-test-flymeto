import 'antd/dist/antd.css'
// TODO
// import "./common/styles/global.scss"
import styles from './App.css'
import { LayoutComponent } from './components';

function App() {
  return (
    <div className={styles.app}>
      <LayoutComponent />
    </div>
  );
}

export default App;
