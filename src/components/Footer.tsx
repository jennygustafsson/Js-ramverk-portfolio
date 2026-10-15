import styles from './Footer.module.css'

type FooterProps = {
  email: string
  githubUrl: string
  linkedinUrl: string
}

export function Footer({ email, githubUrl, linkedinUrl }: FooterProps) {
  const contacts = [
    { label: 'Mail', href: `mailto:${email}` },
    { label: 'GitHub', href: githubUrl },
    { label: 'LinkedIn', href: linkedinUrl },
  ]

  return (
    <footer id="kontakt" className={styles.footer}>
      <div className={styles.inner}>
        <h2>Kontakt</h2>
        <ul className={styles.list}>
          {contacts.map((contact) => (
            <li key={contact.href}>
              <a href={contact.href}>{contact.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
