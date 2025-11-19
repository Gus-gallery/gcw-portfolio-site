import React from 'react'
import { useRef } from 'react';

const videos = [
  {
    id: 1,
    title: "gw.læder",
    videoSrc: "/projects/gwlæder.mp4",
    link: "https://gus-gallery.github.io/gwl-der_site/",
    description: "Website made for my personal bespoke leather goods business, made with React, Vite and Tailwind CSS."
  },
  {
    id: 2,
    title: "Nordfor Byggerådgivning",
    videoSrc: "/projects/nordfor.mp4",
    link: "https://gus-gallery.github.io/nordfor_byg/",
    description: "Website created for a private construction consultant using React, Vite and Tailwind CSS."
  },
  {
    id: 3,
    title: "Movie App",
    videoSrc: "/projects/movie.mp4",
    description: "Movie app made with a search function that calls a movie database. Made with React and Tailwind CSS."
  },
  {
    id: 4,
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
        rounded-md"
    >
      <div 
        className="w-88 h-fit lg:w-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          className="object-contain"
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
  return (
    <section id="projects">
      <div className="mt-12 p-4">
        <h1 className="text-xl mb-2 text-primary font-medium">Recent Projects</h1>

        <div
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