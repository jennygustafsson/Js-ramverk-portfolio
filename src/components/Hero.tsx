import styles from './Hero.module.css'

type HeroProps = {
  name: string
}

export function Hero({ name }: HeroProps) {
  return (
    <section id="hem" className={styles.hero}>
      <h1>{name}</h1>
    </section>
  )
}
