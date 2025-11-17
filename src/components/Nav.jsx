import React from 'react'

const Nav = () => {

  const sections = ["Experience", "Projects", "Education", "Work"]

  return (
    <header>
      <nav className="container flex flex-col h-screen w-fit bg-backgroundsecondary p-4 text-sm text-secondary font-light shadow-lg">
        <h1 className="text-center">gcw.portfolio</h1>

        <ul className="flex flex-col flex-1 justify-center items-center gap-8 lg:gap-12">
          {sections.map((section) => (
            <li 
              key={section}
              className="text-primary opacity-60 cursor-pointer hover:opacity-100 duration-200 ease-in-out"
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav