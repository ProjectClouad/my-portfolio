import React from 'react'

function ProjectSection() {

    const projects = [
        {
            id: 1,
            title: "E-commerce / Fashion Website",
            Description: "A pixel-perfect, modern fashion e-commerce storefront featuring a clean layout and full responsiveness.",
            image: "/Project/project1.png",
            tags: ["React", "tailwindCSS"]
        },
        {
            id: 2,
            title: "CinemaStream - OTT Landing Page",
            Description: "A pixel-perfect Netflix landing page built with React.js and Tailwind CSS, featuring a dynamic dark-themed movie grid, structured state components, and full responsiveness.",
            image: "/Project/project2.png",
            tags: ["React", "tailwindCSS", "HTML"]
        },
    ]

    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'>Projects</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  
                    {projects.map((project, key) => (
                        <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-sm card-hover border border-border/40'>

                            <div className='h-48 overflow-hidden bg-secondary/30'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                                />
                            </div>

                            <div className='p-6'>

                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag, tagKey) => (
                                        <span key={tagKey} className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className='text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors'>
                                    {project.title}
                                </h3>


                                <p className='text-muted-foreground text-sm leading-relaxed mb-4'>
                                    {project.Description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;