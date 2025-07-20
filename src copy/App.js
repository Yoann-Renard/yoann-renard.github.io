import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import WorkExperience from './components/WorkExperience/WorkExperience'
import Certifications from './components/Certifications/Certifications'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Skills />
        <Projects />
        <WorkExperience />
        <Certifications />
        <Education />
        <Contact />
      </main>

      <ScrollToTop />
    </div>
  )
}

export default App
