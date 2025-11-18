import React from 'react'

const Hero = () => {
  return (
    <section id="hero">
      <div>
        <div className="container flex flex-col p-4 mt-20 text-left">
          <h1 className="text-2xl font-bold text-primary">
            Gustav Campbell Werdelin
          </h1>

          <p className="text-md font-regular text-secondary">
            Former gallerist with a bachelor's degree in art history. <br />
            Loves functionalist design and minimalism in art. <br />
            Beginner-programmer and web-developer based in Copenhagen, Denmark.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero