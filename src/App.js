import Button from './Button';
import styles from './App.module.scss';

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!</h1>
      <Button text={'Continue'} />
    </div>
  );
}

export default App;
