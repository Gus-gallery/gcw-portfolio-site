import React from 'react'

const Socials = () => {
  return (
    <div className="container flex flex-col items-center">
        <div className="w-10 h-10 flex flex-col mt-2 justify-around items-center
        hover:scale-110 transition-all ease-in-out cursor-pointer">
          <img src="/socials/git.png" alt="Github" href="https://github.com/Gus-gallery"/>
        </div>
        <div className="w-10 h-10 flex flex-col mt-2 justify-around items-center
        hover:scale-110 transition-all ease-in-out cursor-pointer">
          <img src="/socials/mail.png" alt="Mail"/>
        </div>    
        <div className="w-10 h-10 flex flex-col mt-2 justify-around items-center
        hover:scale-110 transition-all ease-in-out cursor-pointer">
          <img src="/socials/link.png" alt="LinkedIn"/>
        </div>
        <div className="w-10 h-10 flex flex-col mt-2 justify-around items-center
        hover:scale-110 transition-all ease-in-out cursor-pointer">
          <img src="/socials/insta.png" alt="Instagram"/>
        </div>
    </div>
  )
}

export default Socials