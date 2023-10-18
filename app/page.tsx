import styles from './page.module.css'
import UrlShortenerForm from '@/components/UrlShortenerForm';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
      <h1>Allow us to shorten that URL for you! ✂️</h1>
      <Image
        src="/images/scissors.png"
        alt="scissors"
        width={500}
        height={656}
      />
      <UrlShortenerForm />
    </div>
    </div>
  )
}

export default Home;