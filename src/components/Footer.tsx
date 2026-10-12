import styles from './Footer.module.css'

type FooterProps = {
  email: string
  githubUrl: string
  linkedinUrl: string
}

export function Footer({ email, githubUrl, linkedinUrl }: FooterProps) {
  const contacts = [
    { label: 'E-post', href: `mailto:${email}`, text: email },
    { label: 'GitHub', href: githubUrl, text: githubUrl },
    { label: 'LinkedIn', href: linkedinUrl, text: linkedinUrl },
  ]

  return (
    <footer id="kontakt" className={styles.footer}>
      <h2>Kontakt</h2>
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <li key={contact.label}>
            <a href={contact.href}>
              <span>{contact.label}</span>
              {contact.text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
