import { useEffect, useRef} from "react";
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Light = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;

    const handleMove = (event) => {
      const { clientX, clientY } = event;

      gsap.to(blob, {
        x: clientX - 250,
        y: clientY - 250,
        rotation: "+=10",
        scale: 1.25,
        duration: 2.5,
        ease: "easeInOut",
      });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  useGSAP(() => {
    gsap.from(blobRef.current, {
      opacity: 0,
      ease: "easeInOut",
      duration: 3,
    }, "+=1");;
  }, []);

  return (
    <div className="overflow-x-hidden pointer-events-none">
      <div
        ref={blobRef}
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          filter: "blur(300px)",
          zIndex: -1,
          pointerEvents: "auto",
          top: 0,
          left: 0,
        }}
        className="fixed inset-0 bg-linear-to-r/srgb from-blue-300 to-orange-200 opacity-10"
      />
    </div>
  );
};

export default Light