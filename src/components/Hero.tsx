import styles from './Hero.module.css'

type HeroProps = {
  name: string
  intro: string
}

export function Hero({ name, intro }: HeroProps) {
  return (
    <section id="hem" className={styles.hero}>
      <h1>{name}</h1>
      <p className={styles.intro}>{intro}</p>
    </section>
  )
}
