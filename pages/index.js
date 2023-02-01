import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

// Pages
import About from '../components/About'
import Main from '../components/Main'
import NavbarFloating from '../components/NavbarFloating'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/HomePageComponents/Contact'

export default function Home() {
    // Todo
    // add some sort of cta at the end of this file
    // animate floating nav (add scale and translate)
    // add animations
    // create new logo
    // fix mobile nav scrolling with page
    // improve mobile nav menu
    // graph kinda thing to show which skills are linked (like obsidian)
    // Maybe have skills section surrounding the graph
    // create mouse tracking avatar on main page (https://www.youtube.com/watch?v=At6XyItIHsE)
    // convert floating navbar css to tailwind
    // convert timeline css to tailwind
    // convert project tabs css to tailwind
    // Add interactive nuggets widget in my portfolio page? / show stats and achievements of my nuggets widget add screenshots, etc...
    // Make button styles consistent with all buttons
    // Re-add CV download button somewhere in the page
    // Write up all the sections of the site with placeholder content
    // Polish and add email support in the contact page
    // Maybe link skills to projects with their tags?
    // create sliding in animation on the spinner on button component
    // change black button focus outline to white
    // handle form error
    // Reverse or hide timeline in mobile
    // Reverse timeline order in mobile if not hidden
    // Make skills modal more readable   
    // Show business card in mobile
    
    // ? Completed
    // create skills componenet
    // need cv preview and download page
    // add github and mongodb to skills?
    // fix smooth scroll issue
    // make use of clsx
    // change animaiton speeds
    // convert buttons divs to button component
    // hover over project tile should have a custom color done dynamically
    // add floating navigation for home page
    // fix nav links jittering
    // add social links
    // retake lakefront logo image without text and some extra whitespace and extra extra whitespace on top
    // add hover and active animation to nav links and mobile nav links
    // fix broken button component
    // detect router change to determine whether to show or hide floating nav when switching back to home
    // fix mobile nav menu
    // update sidebar to show something else / maybe make slightly bigger (Timeline?)
    // Animate timeline
    // sort floating nav colors (hover color, active inside hover, bg color)
    // get cv download button working
    // pretty up the cv page
    // perhaps seperate company and personal projects?
    // fix languages breaking in banner in ProjectContainer component on mobile devices

















    const mainRef = useRef();
    const aboutRef = useRef();
    const skillsRef = useRef();
    const projectsRef = useRef();
    const contactRef = useRef();
    const [scrolledIntoViewElement, setScrolledIntoViewElement] = useState('');
    // console.log(scrolledIntoViewElement)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            console.log(entry.target.id + ' state:', entry.isIntersecting);
            // console.log(entry);



            if (entry.isIntersecting) {
                const sectionId = entry.target.id
                const scrolledElement = sectionId.substring(0, sectionId.indexOf('-'));
                setScrolledIntoViewElement(scrolledElement);
            }
        });

        // const obs = new window.IntersectionObserver(([entry]) => {
        //     console.log(entry)
        //     console.log(entry.boundingClientRect.bottom)
        //     // console.log(window.scrollY);
        //     if (entry.isIntersecting && entry.boundingClientRect.bottom < window.scrollY) {
        //         console.log('Enter')
        //         // position("VISIBLE") // do things if visible
        //         return
        //     }
        //     console.log('Leave')
        //     if (entry.boundingClientRect.top > 0) {
        //         // position("BELOW") // do things if below
        //         console.log('one?')
        //     } else {
        //         console.log('two?')
        //         // position("ABOVE") // do things if above
        //     }
        //     }, {
        //     root: null,
        //     threshold: 0,
        // })
            
        mainRef !== null && observer.observe(mainRef.current)
        aboutRef !== null && observer.observe(aboutRef.current)
        // aboutRef !== null && obs.observe(aboutRef.current)
        skillsRef !== null && observer.observe(skillsRef.current)
        projectsRef !== null && observer.observe(projectsRef.current)
        contactRef !== null && observer.observe(contactRef.current)
    }, [])

    return (
        <div className='mb-20'>
            <Head>
                <title>AJ | Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavbarFloating view={scrolledIntoViewElement} />

            <section id='home-section' className='mb-[10rem]' ref={mainRef}>
                <Main />
            </section>

            <section id='about-section' className='mb-[10rem]' ref={aboutRef}>
                <About />
            </section>
            
            <section id='skills-section' className='mb-[10rem]' ref={skillsRef}>
                <Skills />
            </section>

            <section id='projects-section' className='mb-[10rem]' ref={projectsRef}>
                <Projects />
            </section>
            
            <section id='contact-section' className='mb-[10rem]' ref={contactRef}>
                <Contact />
            </section>
        </div>
    )
}
