import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'

function App() {
  return (
    <>
      <Header name="Namn" />
      <Footer
        email="Gustafssson.Jenny@gmail.com"
        githubUrl="https://github.com/jennygustafsson"
        linkedinUrl="https://www.linkedin.com/in/jenny-gustafsson-780612405/"

      />
    </>
  )
}

export default App
