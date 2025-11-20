import React from 'react'
import Socials from './Socials'

const Nav = () => {

  const label = [
    {name:"Projects", id:"projects"}, 
    {name:"Experience", id:"experience"}, 
    {name:"Education", id:"education"}, 
    {name:"Work", id:"work"},
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
  }

  return (
    <header className="fixed top-0 left-0 h-screen z-50">
      <nav className="container flex flex-col min-h-screen w-22 md:w-fit bg-backgroundsecondary p-4 text-xs md:text-sm text-secondary font-regular shadow-lg">
        <h1 className="text-center flex justify-center items-center cursor-pointer"
        onClick={() => {document.getElementById("top").scrollIntoView({ behavior: "smooth" })}}
        >gcw.portfolio</h1>

        <ul className="flex flex-col flex-1 justify-center items-center gap-8 font-regular">
          {label.map((label) => (
            <li 
              key={label.id}
              className="text-primary opacity-60 cursor-pointer hover:opacity-100 duration-200 p-2 ease-in-out"
            >
              <p onClick={() => handleScroll(label.id)}>
                {label.name}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav