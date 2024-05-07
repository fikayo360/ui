import './services.css'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from 'react';
import { useInView } from "react-intersection-observer";

export const Services = () => {

    gsap.registerPlugin(useGSAP);
    const container = useRef();
    const { ref, inView } = useInView({threshold:0.2});

        useGSAP(()=>{
            gsap.from('.service',{
                duration: 1,
                y: '-50%',
                stagger: 0.2, 
                ease: 'power3.inOut',
             })
        },[inView])

    return (
        <section id='services' ref={container}>
            <div id='sWrap' ref={ref}>
            <h1 id='sHead'>My skills </h1>
            <div id='offers' >
                <div className='service' >
                    <img className='sFi' src='./design.png'/>
                    <h1 className='sMH'>Design</h1>
                    <div className='sLi'><img src='./ui.png'/> <h1>ui/ux</h1></div>
                    <div className='sLi'><img src='./web.png' /> <h1>web design </h1></div>
                    <div className='sLi'><img src='./mobile.png'/> <h1>mobile app design</h1></div>
                </div>

                <div className='service'>
                    <img  className='sFi' src='./product.png'/>
                    <h1 className='sMH'>product</h1>
                    <div className='sLi'><img src='./prod.png'/> <h1>product design</h1></div>
                    <div className='sLi'><img src='./brand.png'/> <h1>branding</h1></div>
                    <div className='sLi'><img src='./manage.png'/> <h1>product management</h1></div>
                </div>

                <div className='service' >
                    <img  className='sFi' src='./others.png'/>
                    <h1 className='sMH'>others</h1>
                    <div className='sLi'><img src='./ps.png' /> <h1>photoshop</h1></div>
                    <div className='sLi'><img src='./vedit.png' /> <h1>video editing</h1></div>
                    <div className='sLi'><img src='./anim.png'/> <h1>animations</h1></div>
                </div>
                </div>
            </div>
        </section>
    )
}