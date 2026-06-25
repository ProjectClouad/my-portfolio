import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import AboutMe from '../components/AboutMe'
import SkillsSection from '../components/SkillsSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
function Home() {
  return (
    <div className="min-h-screen bg-backround text-foreground overflow-x-hidden">
      <ThemeToggle/>
      <StarBackground />
      <Navbar />

      <main>
        <Herosection />
        <AboutMe />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default Home
