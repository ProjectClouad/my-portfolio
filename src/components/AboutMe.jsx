import React from 'react'
import { Briefcase, Code, User } from 'lucide-react'

function AboutMe() {


    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    About <span className='text-primary'>Me</span>
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                    <div className='space-y-6'>
                        <h3 className='text-2xl font-seminbold'>Web Developer </h3>

                        <p className='text-muted-foreground'>
                            With over 2 month of experience in web development , I specialize
                            in creating responsive , accessible,and performant web
                            application using modern technologies.
                        </p>

                        <p className='text-muted-foreground'>
                            I'm passionate about creating elegant solutions to complex
                            problems, and I' m constantly learning new technologies and
                            techniques to stay at the forefront of the ever-evolving web
                            landscape.
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>

                            <a href='#contact' className='cosmic-button' >
                                Get In  Touch
                            </a>


                            <a href='/Project/bansi_joshi_resume.pdf' download='bansi_joshi_resume.pdf' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10  transition-colors duration-300' >
                                Download CV
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
            </div>
        </section>
    )
}

export default AboutMe
