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
    <div className="bg-backgroundthird inset-shadow-xl 
    rounded-md p-2 lg:p-4 aspect-square w-20 lg:w-24
    flex flex-col justify-around items-center">
        <img 
            src={tech.image}
            alt={tech.name}
            className="object-contain saturate-80 lg:saturate-50 hover:saturate-100 transition-all ease-in-out duration-200"
        />
    </div>
)


const Experience = () => {
    return (
        <section id="experience">
            <div className="mt-12 p-4">
                <h1 className="text-xl text-primary font-medium mb-2">
                    Programming Experience
                </h1>
                <div className="container flex flex-row flex-wrap gap-4">
                    {techs.map(tech => (
                        <Techbox key={tech.id} className="snap-start" tech={tech} />
                    ))}
                    <div className="w-auto" aria-hidden="true" />
                </div>
            </div>
        </section>
    )
}

export default Experience