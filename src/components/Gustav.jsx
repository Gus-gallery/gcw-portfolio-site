import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FONT_WEIGHTS = {
    title: {min: 400, max: 600, default: 400},
}

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, index) => (
        <span 
            key={index} 
            className={className} 
            style={{ fontWeight: baseWeight }}
        >
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));
};

const setupTextHover = (container, type) => {
    if(!container) return;

    const letters = container.querySelectorAll('span');
    const {min, max, default: base} = FONT_WEIGHTS[type];

    const animateLetter = (letter, weight, duration = 0.3) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontWeight: weight,
            
        });
    };

    const handleMouseMove = (event) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = event.clientX - left;

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 6000);

            animateLetter(letter, min + (max - min) * intensity);
        });
    };
    const handleMouseLeave = () => 
        letters.forEach((letter) => (animateLetter(letter, base, 0.3)));

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
    }
};

const Gustav = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current, "title");

        return () => {
            titleCleanup();
        }
    }, []);

    useGSAP(() => {
        const letters = titleRef.current.querySelectorAll("span");
        const subtitle = subtitleRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top 80%",
                once: true,
            }
        })

        tl.from(subtitle, {
            opacity: 0,
            y: 10,
            duration: 1.5,
            ease: "power3.out",
        }, "+=0.5");
      }, []);

  return (
    <section id="gustav">
        <div className="p-4 flex flex-col items-center justify-center text-center h-svh">
            <h1 ref={titleRef}>
                {renderText(
                "Gustav C. Werdelin's development portfolio", 
                "text-xl md:text-3xl text-primary",
                400)}
            </h1>
            <p ref={subtitleRef} className="text-sm md:text-lg lg:w-1/2 font-light text-secondary">
              I'm a former gallerist with a bachelor's degree in art history, 
              who loves functionalist design and minimalism in art. I do a bit of programming and web-development 
              and I'm based in Copenhagen, Denmark.
            </p>
        </div>
    </section>
  )
}

export default Gustav