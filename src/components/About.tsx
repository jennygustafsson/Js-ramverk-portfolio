import styles from './About.module.css'

type AboutProps = {
  image: string
  paragraphs: string[]
}

export function About({ image, paragraphs }: AboutProps) {
  return (
    <section id="om" className={`${styles.about} wrap`}>
      <img className={styles.photo} src={image} alt="Jenny Gustafsson" />
      <div>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
