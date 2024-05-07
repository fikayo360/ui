 import './about.css'
 import gsap from "gsap";
 import { useGSAP } from "@gsap/react";
 import { useRef } from 'react';

 export const About = () => {
    gsap.registerPlugin(useGSAP);
    const container = useRef();
    
    useGSAP(() => {
        
        gsap.from('#aboutWrap', {
                duration: 1.5,
                y: '-70vh',
                ease: 'power3.inOut',
        })
      }, { scope: container });

    return (
        <section id='about' ref={container}>
            <div id='aboutWrap'>
            <h1 id='aboutH'>I do world class ui/ux stuff </h1>
            <p className='aboutp'>
            I'm Jaden, a passionate and results-oriented UI/UX designer <span><img src='./art.svg'/></span> with a proven track record of crafting user-centric interfaces 
            that are both visually stunning and functionally intuitive. With 10 years of experience, 
            I possess a deep understanding of the design process, from user research <span><img src='./research.svg'/></span> and information architecture to
             prototyping and visual design. 
            </p>

            <p className='aboutp'>
            My journey in design began with a fascination for how technology could connect with people on an emotional level. 
            This passion fueled my pursuit of design excellence, leading me to study industrial design at the louvre design institute paris.
            Throughout my career, I've had the privilege of collaborating with diverse teams and 
            tackling a wide range of design challenges across various industries
            </p>

            <p className='aboutp'>
            While design is my core skill, I am also a constant learner <span><img src='./school.svg'/></span> and a strong believer in staying abreast of the latest 
            design trends and technologies.
             I actively participate in design communities <span><img src='./community.svg'/></span>, attend conferences, and take online courses to continuously expand my knowledge and skillset.
             When I'm not designing, I dabble in other hobbies like working out <span><img src='./sport.svg'/></span> .
            </p>

            <p className='aboutp'>
            I am always looking for new and exciting design challenges. Whether you're building the next big <span><img src='./company.svg'/></span> thing or an established company seeking
             to elevate your user experience, 
            I'm confident that I can bring a unique perspective and a wealth of design expertise to your project. Let's create something amazing together!</p>
            <a href="#contact" id='aboutL'>lets chat</a>
            </div>
        </section>
    )
 }