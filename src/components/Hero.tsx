import styles from './Hero.module.css'

type HeroProps = {
  name: string
  intro: string
}

export function Hero({ name, intro }: HeroProps) {
  return (
    <section id="hem" className={styles.hero}>
      <p className={styles.eyebrow}>Portfolio</p>
      <h1>{name}</h1>
      <p className={styles.intro}>{intro}</p>
      <a className={styles.button} href="#projekt">
        Se projekt
      </a>
    </section>
  )
}
