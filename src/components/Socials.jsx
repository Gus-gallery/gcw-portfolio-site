import React, { useState } from 'react';

const Socials = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-10 flex items-center justify-end opacity-70">

      <div className="container hidden md:flex flex-row items-center justify-end gap-2 -mt-6 -mb-16">
          <div className="h-8 w-8 md:w-10 md:h-10 justify-around items-center
          hover:scale-110 transition-all ease-in-out cursor-pointer">
            <a href="https://github.com/Gus-gallery" target="_blank" rel="noopener noreferrer">
              <img src="/socials/git.png" alt="Github"/>
            </a>
          </div>
          <div className="h-8 w-8 md:w-10 md:h-10 justify-around items-center
          hover:scale-110 transition-all ease-in-out cursor-pointer">
            <a href="https://github.com/Gus-gallery" target="_blank" rel="noopener noreferrer">
              <img src="/socials/mail.png" alt="E-mail"/>
            </a>
          </div>    
          <div className="h-8 w-8 md:w-10 md:h-10 justify-around items-center
          hover:scale-110 transition-all ease-in-out cursor-pointer">
            <a href="https://www.linkedin.com/in/gustav-werdelin-677785394/" target="_blank" rel="noopener noreferrer">
              <img src="/socials/link.png" alt="LinkedIn"/>
            </a>
          </div>
          <div className="h-8 w-8 md:w-10 md:h-10 justify-around items-center
          hover:scale-110 transition-all ease-in-out cursor-pointer">
            <a href="https://www.instagram.com/gustavwerdelin/" target="_blank" rel="noopener noreferrer">
              <img src="/socials/insta.png" alt="Instagram"/>
            </a>
          </div>
      </div>

      <button className="md:hidden flex items-center justify-end p-2"
      onClick={() => setOpen(!open)}>
        <img src="/socials/menu.svg" alt="menu" className={`h-8 w-8 transition-transform duration-300 ${open ? "rotate-90 opacity-50" : ""}`}>
        </img>
      </button>

      {open && (
        <div className="flex flex-row items-center justify-end gap-2 md:hidden">
          <div className="h-8 w-8 md:w-10 md:h-10 justify-around items-center
          hover:scale-110 transition-all ease-in-out cursor-pointer">
            <a href="https://github.com/Gus-gallery" target="_blank" rel="noopener noreferrer">
              <img src="/socials/git.png" alt="Github"/>
            </a>
          </div>
          <div className="h-8 w-8 md:w-10 md:h-10 justify-around items-center
          hover:scale-110 transition-all ease-in-out cursor-pointer">
            <a href="https://github.com/Gus-gallery" target="_blank" rel="noopener noreferrer">
              <img src="/socials/mail.png" alt="E-mail"/>
            </a>
          </div>    
          <div className="h-8 w-8 md:w-10 md:h-10 justify-around items-center
          hover:scale-110 transition-all ease-in-out cursor-pointer">
            <a href="https://www.linkedin.com/in/gustav-werdelin-677785394/" target="_blank" rel="noopener noreferrer">
              <img src="/socials/link.png" alt="LinkedIn"/>
            </a>
          </div>
          <div className="h-8 w-8 md:w-10 md:h-10 justify-around items-center
          hover:scale-110 transition-all ease-in-out cursor-pointer">
            <a href="https://www.instagram.com/gustavwerdelin/" target="_blank" rel="noopener noreferrer">
              <img src="/socials/insta.png" alt="Instagram"/>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default Socials