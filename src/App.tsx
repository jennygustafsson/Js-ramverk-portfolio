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
          name="Om mig"
        />
        <About
          image="/jenny.jpg"
          paragraphs={[
            'Jag studerar webbutveckling på Medieinstitutet. Där lär jag mig att bygga gränssnitt, och just nu arbetar jag med React, komponenter, props och state.',
            'På den här sidan samlar jag projekt från utbildningen. De är byggda med HTML, CSS, JavaScript och TypeScript, både egna uppgifter och grupparbeten.',
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
