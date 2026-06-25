import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function Herosection() {
    return (
        <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>

            <div className='container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 w-full'>
                
                
                <div className='space-y-6 text-left order-2 md:order-1'>

                  <h1 className='text-4xl md:text-6xl font-bold tracking-tight min-h-[120px] md:min-h-[160px]'>
                        <span className="block text-foreground">Hi, I'm</span>
                        <span className="text-primary block mt-2">
                            
                            <Typewriter
                                words={['Bansi Joshi', 'a Full Stack Developer']}
                                loop={true}            
                                cursor                 
                                cursorStyle='|'
                                typeSpeed={70}         
                                deleteSpeed={50}      
                                delaySpeed={1500}     
                            />
                        </span>
                    </h1>
                    
                    <p className='text-lg md:text-xl text-muted-foreground max-2-2xl opacity-0 animate-fade-in-delay-3'>
                        "I am a Full Stack Developer who loves transforming creative ideas into powerful, production-ready web applications. 
                        By combining clean frontend interfaces with secure, optimized backends, 
                        I build digital products that deliver real value and amazing user experience."
                    </p>
                    
                    <div className='pt-4 opacity-0 animate-fade-in-delay-4'>
                        <a href='#projects' className='cosmic-button inline-block'>
                            View My Work
                        </a>
                    </div>
                </div>

               
                <div className='flex justify-center items-center order-1 md:order-2 opacity-0 animate-fade-in-delay-2'>
                    
                    <div className='relative w-72 h-72 md:w-85 md:h-85 aspect-square rounded-full border-2 border-primary/20 p-2 shadow-[0_0_50px_rgba(59,130,246,0.25)] dark:shadow-[0_0_50px_rgba(147,51,234,0.3)]'>
                        
                       
                        <div className='absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse'></div>
                        
                       
                        <img 
                            src="/Project/Myphoto.jpeg" 
                            alt="Bansi Joshi" 
                            className='w-full h-full object-cover rounded-full relative z-10'
                           
                        />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Herosection