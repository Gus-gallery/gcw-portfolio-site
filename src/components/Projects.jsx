import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    id: 0,
    title: "Anglerfish",
    videoSrc: "/projects/anglerfish.png",
    link: "https://anglerfish-kappa.vercel.app",
    description: "A social media platform for anglers to share their catches, tips, and experiences."
  },
  {
    id: 1,
    title: "Oskar Peitersen Photo",
    videoSrc: "/projects/ozzy.mp4",
    link: "https://gus-gallery.github.io/ozzy_home/",
    description: "Photography portfolio website made for a good friend of mine. The site is made with React, Vite and Tailwind CSS."
  },
  {
    id: 2,
    title: "gw.læder",
    videoSrc: "/projects/gwlæder.mp4",
    link: "https://gus-gallery.github.io/gwl-der_site/",
    description: "Website made for my personal bespoke leather goods business, made with React, Vite and Tailwind CSS."
  },
  {
    id: 3,
    title: "Stock of The Day",
    videoSrc: "/projects/sotd.png",
    link: "https://gus-gallery.github.io/StockOfTheDay/",
    description: "A stock market webapp that fetches data describing the best performing big-tech stock of the day. Built with React, Vite and Tailwind CSS."
  },
  {
    id: 4,
    title: "Nordfor Byggerådgivning",
    videoSrc: "/projects/nordfor.mp4",
    link: "https://gus-gallery.github.io/nordfor_byg/",
    description: "Website created for a private construction consultant using React, Vite and Tailwind CSS."
  },
  {
    id: 5,
    title: "Macbook Landing Page",
    videoSrc: "/projects/macbook.mp4",
    description: "An Apple-like landing page for their Macbook, made with React, Tailwind, Three.js and GSAP."
  },
];

const VideoCard = ({ videoSrc, link, title }) => {

  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <a 
      href={link || '#'} 
      target="_blank" 
      rel="noopener noreferrer"
      className="
        bg-backgroundthird
        flex-none overflow-hidden 
        cursor-pointer flex flex-col justify-between
        rounded-md gradient-border"
    >
      <div 
        className="w-fit h-48 md:*:w-84 md:h-48 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {videoSrc.endsWith('.png') ? (
          <img src={videoSrc} alt={title} className="object-contain opcaity-60 hover:opacity-100 transition-all ease-in-out duration-300 -mb-20 md:mb-0 md:object-contain" />
        ) : (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          className="-mb-24 md:mb-0 opcaity-60 hover:opacity-100 transition-all ease-in-out duration-300 md:object-contain"
        />
        )}
        <div className="font-medium text-primary text-md p-4">
          {title}
        </div>
      </div>
    </a>
  );
};


const Projects = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.from(videoRef.current.children, {
      y: 10,
      opacity: 0,
      stagger: 0.3,
      ease: "easeInOut",
      duration: 1,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 80%",
        once: true,
      }
    });
  }, []);

  return (
    <section id="projects">
      <div className="p-4">
        <h1 className="text-xl mb-2 mt-24  text-primary font-medium">Recent Projects</h1>
        <div
          className="
            flex flex-wrap gap-4"
            ref={videoRef}
        >
          {videos.map((v) => (
            <div key={v.id} className="snap-start rounded-md">
              <VideoCard 
                videoSrc={v.videoSrc}
                link={v.link}
                title={v.title}
                description={v.description}
              />
            </div>
          ))}
      </div>
    </div>
    </section>
  )
}

export default Projects