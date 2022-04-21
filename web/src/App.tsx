import styles from './App.module.scss';
import {WeatherLista} from './pages/WeatherList';
import { Header } from './pages/Header';
import { Feed } from './pages/Feed';


export function App() {
  return (
    
    <main className={styles.mainContainer}>
      <Header />
      
      <Feed />
    </main>
  )
}
