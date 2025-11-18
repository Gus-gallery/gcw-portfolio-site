import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <div className="container flex flex-col p-4 mt-20 text-left">
          <h1 className="text-2xl font-bold text-primary">
            Hi, I'm <span className='text-gradient'>Gustav Werdelin</span>
          </h1>

          <p className="text-lg font-regular lg:max-w-1/2 text-secondary">
            I'm a former gallerist with a bachelor's degree in art history, 
            who loves functionalist design and minimalism in art. I do a bit of programming and web-development 
            and I'm based in Copenhagen, Denmark.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero