import styles from './page.module.css'
import UrlShortenerForm from '@/components/UrlShortenerForm';

const Home = () => {
  return (
    <div className={styles.main}>
      <h1>Allow us to shorten that URL for you! ✂️</h1>
      <UrlShortenerForm />
    </div>
  )
}

export default Home;