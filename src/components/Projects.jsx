import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const videos = [
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
    title: "Nordfor Byggerådgivning",
    videoSrc: "/projects/nordfor.mp4",
    link: "https://gus-gallery.github.io/nordfor_byg/",
    description: "Website created for a private construction consultant using React, Vite and Tailwind CSS."
  },
  {
    id: 4,
    title: "Movie App",
    videoSrc: "/projects/movie.mp4",
    description: "Movie app made with a search function that calls a movie database. Made with React and Tailwind CSS."
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
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          className="opacity-0 -mb-32 md:mb-0 md:opacity-100 md:object-contain"
        />
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
    gsap.from(videoRef.current, {
      x: screen.width * 0.3,
      opacity: 0,
      ease: "easeInOut",
      duration: 1.5,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 80%",
        once: true,
      }
    });
  }, []);

  useGSAP(() => {
    gsap.from(projectRef.current, {
      y: 50,
      opacity: 0,
      ease: "easeInOut",
      duration: 1.5,
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 80%",
        once: true,
      }
    });
  }, []);

  return (
    <section id="projects">
      <div className="mt-12 p-4">
        <h1 className="text-xl mb-2 text-left text-primary font-medium">Current project</h1>

        <div ref={projectRef} className="grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="bg-backgroundthird h-full rounded-md p-4 gradient-border">
              <h2 className='font-medium text-primary'>
                Anglerfish
              </h2>
              <p className="font-light text-secondary text-md">
                A project I'm currently working on, which is a social media platform for anglers to share their catches, tips, and experiences. Built with Next.js and Supabase as an easy database solution.
              </p>
            </div>
            <img src='/projects/anglerfish_3.png' alt='Anglerfish project screenshot' className='border border-secondary gradient-border rounded-md'>
            </img>
          </div>
          <div className="flex flex-col gap-4">
            <img src='/projects/anglerfish.png' alt='Anglerfish project screenshot' className='border border-secondary gradient-border rounded-md'>
            </img>
            <div className='bg-backgroundthird hover:bg-backgroundthird/50 transition-colors duration-300 h-full rounded-md p-4 gradient-border'>
              <p className="font-semibold text-md text-primary text-center lg:mt-5">See the project live at
              <a href="https://anglerfish-kappa.vercel.app" target="_blank" rel="noopener noreferrer" className='text-gray-100 hover:underline underline-offset-1 hover:text-primary font-bold'> anglerfish-kappa.vercel.app</a>
              .</p>
            </div>
          </div>
        </div>

        <h1 className="text-xl mb-2 mt-24  text-primary font-medium">Recent Projects</h1>
        <div
          ref={videoRef}
          className="
            flex gap-4
            overflow-x-auto flex-nowrap 
            snap-x snap-mandatory scroll-smooth"
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