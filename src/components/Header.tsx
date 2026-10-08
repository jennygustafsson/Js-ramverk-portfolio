import { useState } from 'react'
import styles from './Header.module.css'

const links = [
  { href: '#hem', label: 'Hem' },
  { href: '#om', label: 'Om mig' },
  { href: '#projekt', label: 'Projekt' },
  { href: '#kontakt', label: 'Kontakt' },
]

type HeaderProps = {
  name: string
}

export function Header({ name }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#hem" onClick={closeMenu}>
          {name}
        </a>
        <button
          type="button"
          className={menuOpen ? styles.menuButtonOpen : styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
        <div className={menuOpen ? styles.panelOpen : styles.panel}>
          <nav id="site-nav" className={styles.nav} aria-label="Sektioner">
            {links.map((link) => (
              <a
                key={link.href}
                className={styles.link}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
