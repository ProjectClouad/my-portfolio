import React, { useEffect, useState } from 'react'
import { href } from 'react-router-dom'
import { cn } from '../lib/utils'
import ThemeToggle from './ThemeToggle'
import { X, Menu } from 'lucide-react' 


const navItems = [
    {name: "Home", href:"#hero"},
    {name: "About", href:"#about"},
    {name: "Skills", href:"#skills"},
    {name: "Projects", href:"#projects"},
    {name: "Contact", href:"#contact"}
]

function Navbar() {
    const [isScrolled , setIsScrolled] = useState(false);
    const [isMenuOpen , setIsMenuOpen] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return ()  =>  window.removeEventListener("scroll", handleScroll)
    }, [])

  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300", 
        isScrolled ?  "py-3 bg-background/80 backdrop-blur-md shadow-xs" :"py-5"
    ) }>
      
    <div className='max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 w-full'> 
        <a className='text-xl font-bold text-primary flex items-center' href='#hero' >
            <span className='relative z-10'>
                <span className='text-glow'>Portfolio</span>
            </span>
        </a>

       <div className='flex items-center space-x-8'>
                    <div className='hidden md:flex space-x-8'>
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className='text-foreground/80 hover:text-primary transition-colors duration-300 font-medium'
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className='relative z-50'>
                        <ThemeToggle />
                    </div>
                </div>

                         <button onClick={() => setIsMenuOpen((prev) => !prev )} className="md:hidden p-2 text-foreground relative z-50" aria-label={isMenuOpen  ? "Close Menu" : "Open Menu"}  >
                    {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                </button>

                               <div className={cn('fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center',
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none translate-x-full"
                 )}
                 >
                                        <div className='flex flex-col items-center justify-center space-y-6 text-2xl'>
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                onClick={() => setIsMenuOpen(false)} 
                                className='text-foreground/80 hover:text-primary transition-colors duration-300 font-medium block py-2'
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                 </div>
      
            </div>
        </nav>
  )
}

export default Navbar