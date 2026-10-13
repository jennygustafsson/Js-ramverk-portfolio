import { About } from './components/About.tsx'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { Projects } from './components/Projects.tsx'

const name = 'Jenny Gustafsson'

function App() {
  return (
    <>
      <Header name={name} />
      <main>
        <Hero
          name={name}
          intro="Jag studerar webbutveckling och bygger gränssnitt med React och TypeScript."
        />
        <About
          paragraphs={[
            'Jag studerar webbutveckling på medieinstituet och lär mig komponenter, props och state.',
          ]}
        />
        <Projects />
      </main>
      <Footer
        email="Gustafssson.Jenny@gmail.com"
        githubUrl="https://github.com/jennygustafsson"
        linkedinUrl="https://www.linkedin.com/in/jenny-gustafsson-780612405/"

      />
    </>
  )
}

export default App
