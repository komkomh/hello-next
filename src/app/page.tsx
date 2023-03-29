
import styles from './page.module.css'
import {Game} from "@/app/components/sanmoku/Game";

export default function Home() {
  return (
    <main className={styles.main}>
      <Game/>
    </main>
  )
}

