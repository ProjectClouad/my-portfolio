import React, { useRef, useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

function ContactSection() {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);


        const serviceID = 'service_aw23nuj';
        const templateID = 'template_pg77i4n';
        const publicKey = 'T6gcqtJrGRyU9JvhH';

        try {

            await emailjs.sendForm(serviceID, templateID, formRef.current, publicKey);

            alert("The message has been sent successfully!👍");
            formRef.current.reset();
        } catch (error) {
            console.log("Error sending email:", error);
            alert("Something went wrong while sending the message. Please try again.");
        } finally {
            setIsSending(false);
        }
    }

    return (
        <section id="contact" className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>

                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'> Touch</span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                        <div className='space-y-6'>
                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a href='mailto:joshibanshi07@gmail.com' className='text-muted-foreground hover:text-primary transition-colors'>
                                        hello@example.com
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href='tel:+918154864108' className='text-muted-foreground hover:text-primary transition-colors'>
                                        +123 456 7890
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-start space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <span className='text-muted-foreground'>
                                        Rajkot, Gujarat
                                    </span>
                                </div>
                            </div>

                            <div className='pt-8'>
                                <h4 className='font-medium mb-4'>Connect With Me</h4>
                                <div className='flex space-x-4 justify-start'>
                                    <a
                                        href="https://www.linkedin.com/in/banshi-joshi-964b5b321?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer inline-flex items-center justify-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </a>

                                    <a
                                        href="https://www.instagram.com/its__bansi__12?utm_source=qr&igsh=MTMxejlxZHlsaWhtMQ=="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer inline-flex items-center justify-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </a>

                                    <a
                                        href="https://github.com/bansijoshi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer inline-flex items-center justify-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='bg-card p-8 rounded-xl border border-border/50 shadow-md backdrop-blur-md'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>


                        <form ref={formRef} onSubmit={handleSubmit} className='space-y-5'>
                            <div>
                                <label htmlFor='name' className='block text-sm font-medium mb-2 text-muted-foreground'>Your Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='from_name'
                                    placeholder='Enter your name'
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary transition-all text-sm'
                                />
                            </div>

                            <div>
                                <label htmlFor='email' className='block text-sm font-medium mb-2 text-muted-foreground'>Your Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='from_email'
                                    placeholder='Enter your email'
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary transition-all text-sm'
                                />
                            </div>

                            <div>
                                <label htmlFor='subject' className='block text-sm font-medium mb-2 text-muted-foreground'>Subject</label>
                                <input
                                    type='text'
                                    id='subject'
                                    name='subject'
                                    placeholder='Enter subject'
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary transition-all text-sm'
                                />
                            </div>

                            <div>
                                <label htmlFor='message' className='block text-sm font-medium mb-2 text-muted-foreground'>Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows='4'
                                    placeholder='Enter your message'
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background/50 focus:outline-hidden focus:ring-2 focus:ring-primary transition-all text-sm resize-none'
                                ></textarea>
                            </div>

                            <button
                                type='submit'
                                disabled={isSending}
                                className='w-full cosmic-button py-3 text-sm font-medium rounded-md shadow-md cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50 text-center flex items-center justify-center'
                            >
                                {isSending ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactSection;