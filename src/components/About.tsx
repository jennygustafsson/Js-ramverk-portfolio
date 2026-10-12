import styles from './About.module.css'

type AboutProps = {
  paragraphs: string[]
}

export function About({ paragraphs }: AboutProps) {
  return (
    <section id="om" className={styles.about}>
      <h2>Om mig</h2>
      <div>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
