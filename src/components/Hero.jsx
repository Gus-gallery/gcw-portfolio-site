import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <div className="container flex flex-col p-4 mt-46 mb-38 md:mb-48">
          <img src="hero_bg.png" alt="Hero bg" className="absolute top-0 left-0 object-bottom h-132 w-full object-cover opacity-25 shadow-lg"/>

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <h1 className="text-lg md:text-2xl font-bold text-primary">
              <span className="text-blue-200">Gustav C. Werdelin</span>'s development portfolio.
            </h1>
            <p className="text-md md:text-lg lg:w-1/2 font-regular text-primary">
              I'm a former gallerist with a bachelor's degree in art history, 
              who loves functionalist design and minimalism in art. I do a bit of programming and web-development 
              and I'm based in Copenhagen, Denmark.
            </p>
          </div>  
        </div>
      </div>
    </section>
  )
}

export default Hero