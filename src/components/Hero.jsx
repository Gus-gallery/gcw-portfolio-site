import React from 'react'
import { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Box = () => (
  <div className="w-20 h-20 bg-backgroundthird rounded-sm scale-10">
  </div>
)

const Hero = () => {
  const numberOfBoxes = 80; 
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.from(boxRef.current.children, {
      scale: 50,
      stagger: {
        each: 0.1,
        from: "center",
        grid: "auto",
      },
      ease: "easeInOut",
      duration: 3,
    });
  }, []);

  return (
    <section id="hero">
      <div>
        <div className="absolute container flex flex-col">
           <div className="grid grid-cols-5 lg:grid-cols-10 gap-4" ref={boxRef}>
            {Array.from({ length: numberOfBoxes }).map((_, i) => (
              <Box key={i} />
            ))}
           </div>
        </div>
      </div>
    </section>
  )
}

export default Hero