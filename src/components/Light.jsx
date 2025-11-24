import { useEffect, useRef, useState } from "react";
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Light = () => {
  const blobRef = useRef(null);
  const defaultClass = "bg-linear-to-r/srgb from-blue-200 backgroundthird opacity-25";

  useEffect(() => {
    const blob = blobRef.current;

    const handleMove = (event) => {
      const { clientX, clientY } = event;

      gsap.to(blob, {
        x: clientX - 200,
        y: clientY - 200,
        rotation: "+=10",
        scale: 1.1,
        duration: 1.5,
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
    });
  }, []);

  return (
    <div
      ref={blobRef}
      style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        filter: "blur(100px)",
        zIndex: -1,
        pointerEvents: "auto",
        top: 0,
        left: 0,
      }}
      className={defaultClass}
    />
  );
};

export default Light