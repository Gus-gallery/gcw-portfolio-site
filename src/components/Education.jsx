import React from 'react'

const Education = () => {
  return (
    <section id="education">
        <div className="p-4">
            <h1 className="text-primary text-xl font-medium mt-12 -mb-2">Education</h1>
            <div className="bg-backgroundsecondary rounded-md p-4 mt-4 gradient-border">
                <h1 className="font-regular text-md text-primary">Bachelors degree</h1>
                <p className="font-light text-secondary text-md">
                    Bachelors degree in art history from University of Copenhagen, 2022-2025.
                </p>
                <h1 className="font-regular text-md text-primary mt-4">Digital Design</h1>
                <p className="font-light text-secondary text-md">
                    Course in Digital Design at University of Copenhagen during my bachelor's degree, 2025.
                </p>
                <h1 className="font-regular text-md text-primary mt-4 ">Foundation year in business school</h1>
                <p className="font-light text-secondary text-md">
                    Full year at Copenhagen Business School studying Economics and Psychology, 2021-2022.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Education