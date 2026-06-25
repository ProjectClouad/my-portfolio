import React, { useState } from 'react'
import { cn } from '../lib/utils'

function SkillsSection() {
    const [activeCategory , setActiveCategory] = useState("all");

    const skills = [
        { name: "HTML/CSS", level: 95, category: "Frontend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "JavaScript", level: 90, category: "Frontend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React.js", level: 90, category: "Frontend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Tailwind CSS", level: 90, category: "Frontend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Bootstrap", level: 85, category: "Frontend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        
        { name: "Node.js", level: 80, category: "Backend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express", level: 75, category: "Backend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "MongoDB", level: 70, category: "Backend", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "JWT", level: 70, category: "Backend", image: "https://jwt.io/img/pic_logo.svg" },

        { name: "Docker", level: 90, category: "tool", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Figma", level: 85, category: "tool", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { name: "VS Code", level: 95, category: "tool", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { name: "Git Hub", level: 95, category: "tool", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ]

  
    const categories = ["all", "frontend", "backend" , "tool"]

    
    const filtereSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category.toLowerCase() === activeCategory.toLowerCase()
    );

  return (
    <nav> 
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
          <h2 className='text-3xl  md:text-4xl font-bold mb-12 text-center'>
            My <span className='text-primary'>Skills</span>
          </h2>

          
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {categories.map((category, key) => ( 
                  
                    <button 
                        key={key}
                        onClick={() => setActiveCategory(category)}
                     
                        className={cn('px-5 py-2 rounded-full transition-colors duration-300 capitalize font-medium text-sm border border-border/40 cursor-pointer',
                            activeCategory === category ? "bg-primary text-primary-foreground shadow-md"
                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                    >
                        {category === "tool" ? "Tools" : category}
                    </button>
                ))}
            </div>

        
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {filtereSkills.map((skill, key) => (
                <div key={key} className='bg-card p-6 rounded-lg shadow-sm card-hover flex items-center space-x-4 border border-border/40' >
                    
                    <div className='w-12 h-12 flex items-center justify-center bg-secondary/50 rounded-md p-2 shrink-0'>
                        <img 
                            src={skill.image} 
                            alt={skill.name} 
                            className='w-full h-full object-contain'
                            onError={(e) => { e.currentTarget.style.display = 'none' }} 
                        />
                    </div>

                    <div>
                        <h3 className='text-lg font-semibold text-foreground'>{skill.name}</h3>
                        <p className='text-xs text-muted-foreground capitalize'>{skill.category}</p>
                    </div>
                </div>
              ))}
          </div>
        </div>
    </section>
    </nav>
  )
}

export default SkillsSection;