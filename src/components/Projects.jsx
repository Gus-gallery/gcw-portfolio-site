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

const VideoCard = ({ videoSrc, link, title, description }) => {

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
        className="w-56 h-fit md:w-lg lg:w-xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {videoSrc.endsWith('.png') ? (
          <img src={videoSrc} alt={title} className="object-contain opacity-100 mb-8" />
        ) : (
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          className="-mb-32 md:mb-0 opacity-100 md:object-contain"
        />
        )}
        <div className="font-medium text-primary text-md p-4">
          {title}
        </div>
        <div className="font-light text-secondary text-md p-4 -mt-8">
          {description}
        </div>
      </div>
    </a>
  );
};


const Projects = () => {
  const videoRef = useRef(null);
  const projectRef = useRef(null);

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
      <div className="mt-12 p-4">
        <h1 className="text-xl mb-2 text-left text-primary font-medium">Current project</h1>

        <h1 className="text-xl mb-2 mt-24  text-primary font-medium">Recent Projects</h1>
        <div
          className="
            flex gap-4
            overflow-x-auto flex-nowrap 
            snap-x snap-mandatory scroll-smooth"
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