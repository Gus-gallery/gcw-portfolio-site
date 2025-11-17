import React from 'react'

const techs = [
    {
        id: 1,
        name: "React",
        image: "/techs/react.png"
    },
    {
        id: 2,
        name: "Next",
        image: "/techs/next.png"
    },
    {
        id: 3,
        name: "Javascript",
        image: "/techs/js.png"
    },
    {
        id: 5,
        name: "Vite",
        image: "/techs/vite.png"
    },
    {
        id: 6,
        name: "GSAP",
        image: "/techs/gsap.png"
    },
    {
        id: 7,
        name: "Java",
        image: "/techs/java.png"
    },
    {
        id: 8,
        name: "Python",
        image: "/techs/python.png"
    },

]

const Techbox = ({tech}) => (
    <div className="bg-backgroundthird inset-shadow-md 
    rounded-md p-4 mt-4 w-sm h-sm flex flex-col 
    justify-around items-center">
        <img 
            src={tech.image}
            alt={tech.name}
            className="object-cover saturate-0 hover:saturate-100 transition-all ease-in-out duration-200"
        />
    </div>
)


const Experience = () => {
    return (
        <div className="mt-12 p-4">
            <h1 className="text-lg text-primary font-light">
                Experience with:
            </h1>
            <div className="container flex flex-row gap-4">
                {techs.map(tech => (
                    <Techbox key={tech.id} tech={tech} />
                ))}
                <div className="w-auto" aria-hidden="true" />
            </div>
        </div>
    )
}

export default Experience