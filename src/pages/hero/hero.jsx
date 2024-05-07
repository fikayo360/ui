import './hero.css'
import { useState,useEffect,useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useInView } from "react-intersection-observer";

export const Hero = () => {
    const [hasScrolled, setHasScrolled] = useState(false);
    const [isNavActive, setIsNavActive] = useState(false)

    gsap.registerPlugin(useGSAP);
    const container = useRef();

    const toggleNav = () => {
        setIsNavActive((prev) => !prev)
    }

    const { ref, inView } = useInView({threshold:0.1});

    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        setHasScrolled(scrollY > 50)
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useGSAP(() => {
        gsap.fromTo('.nav',{ opacity:0, display:'none' }, { opacity:1, display:'flex',duration:2,ease: 'power3.inOut' })
        gsap.from('#heroWrap', {
                duration: 1.5,
                y: '-100vh',
                ease: 'power3.inOut',
        })
        
        }, { scope: container });

    useGSAP(()=>{
        gsap.from('.mbi',{
            duration: 1,
            x: '-120%',
            stagger: 0.1, 
            ease: 'power3.inOut',
        })
    },[inView])


  

    return (
        <section id="hero" ref={container}>
             <div className={`nav ${hasScrolled ? 'scrolled' : ''}`}>
                    <h1 id='nLeft'>
                        J<span className='txtG'>ade</span>n
                    </h1>
                        <ul>
                            <li className='bar-item'><a href='#hero'>home</a></li>
                            <li className='bar-item'><a href='#about'>about</a></li>
                            <li className='bar-item'><a href='#works'>works</a></li>
                            <li className='bar-item'><a href='#services'>services</a></li>
                            <li className='bar-item'><a href='#reviews'>reviews</a></li>
                            <li className='bar-item'><a href='#contact'>contact</a></li>
                        </ul>
                    <img id='burger' src='./burger.png'  onClick={toggleNav}/>
                </div>

                { isNavActive && (
                      <div id='mobileNav'>
                      <div id='mbWrap' ref={ref}>
                          <div id='mbWrapH'>
                              <h1><span className='txtG'>Jad</span>en</h1>
                              <img  src='./close.png' onClick={toggleNav}/>
                           </div>
                           <div id='mbWrapB'>
                              <ul>
                              <li className='mbi'><a href='#hero'>home</a></li>
                            <li className='mbi'><a href='#about'>about</a></li>
                            <li className='mbi'><a href='#works'>works</a></li>
                            <li className='mbi'><a href='#services'>services</a></li>
                            <li className='mbi'><a href='#reviews'>reviews</a></li>
                            <li className='mbi'><a href='#contact'>contact</a></li>
                              </ul>
                           </div>
                      </div>
                  </div>
                )}
              

            <div id='heroWrap'>
                <h1 id='heroWraph1'>As a <span className='txtG'>ui/ux designer</span> i turn your crazy ideas into reality </h1>
                <h1 id='heroWraph2'>elevate your brand with tailor made mobile apps,landing pages, saas designs,and graphic designs </h1>
                <div id='hBtns'>
                    <button><a href='#services'>my skills</a></button>
                    <button><a href='#contact'>contact me</a></button>
                </div>
            </div>
        </section>
    )
}