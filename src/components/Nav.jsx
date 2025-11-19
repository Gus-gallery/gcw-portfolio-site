import React from 'react'
import Socials from './Socials'

const Nav = () => {

  const sections = ["Projects", "Experience", "Education", "Work"]

  return (
    <header className="fixed top-0 left-0 h-screen z-50">
      <nav className="container flex flex-col min-h-screen w-28 md:w-fit bg-backgroundsecondary p-4 text-md text-secondary font-regular shadow-lg">
        <h1 className="text-center flex justify-center items-center">gcw.portfolio</h1>

        <ul className="flex flex-col flex-1 justify-center items-center gap-4 lg:gap-8 font-regular">
          {sections.map((section) => (
            <li 
              key={section}
              className="text-primary opacity-60 cursor-pointer hover:opacity-100 duration-200 p-2 ease-in-out"
            >
              {section}
            </li>
          ))}
        </ul>
        <Socials />
      </nav>
    </header>
  )
}

export default Nav