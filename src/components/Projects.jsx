import React from 'react'
import { useRef } from 'react';

const videos = [
  {
    id: 1,
    title: "gw.læder",
    videoSrc: "/projects/gwlæder.mp4",
    link: "https://gus-gallery.github.io/gwl-der_site/"
  },
  {
    id: 2,
    title: "Nordfor Byggerådgivning",
    videoSrc: "/projects/nordfor.mp4",
    link: "https://gus-gallery.github.io/nordfor_byg/"
  },
  {
    id: 3,
    title: "Minor Gallery",
    videoSrc: "/projects/minor.mp4",
    link: "https://minorgallery.dk"
  },
  {
    id: 4,
    title: "Movie App",
    videoSrc: "/projects/movie.mp4",
  },
  {
    id: 5,
    title: "Macbook Landing Page",
    videoSrc: "/projects/macbook.mp4",
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
        rounded-md saturate-0 hover:saturate-100"
    >
      <div 
        className="w-40 lg:w-80 relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Videoen */}
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          playsInline
          className="flex justify-center items-center object-cover"
        />

        {/* Titel nederst */}
        <div className="bg-backgroundsthird font-regular text-primary text-md p-4">
          {title}
        </div>
      </div>
    </a>
  );
};


const Projects = () => {
  return (
    <section id="projects">
      <div className="mt-12 p-4">
        <h1 className="text-lg mb-4 text-primary font-regular">Projects</h1>

        <div
          className="
            flex gap-4
            overflow-x-auto flex-nowrap 
            snap-x snap-mandatory scroll-smooth"
        >
          {videos.map((v) => (
            <div key={v.id} className="snap-start bg-backgroundthird rounded-md">
              <VideoCard 
                videoSrc={v.videoSrc}
                link={v.link}
                title={v.title}
              />
            </div>
          ))}
      </div>
    </div>
    </section>
  )
}

export default Projects