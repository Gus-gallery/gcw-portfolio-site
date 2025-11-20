import React from 'react'

const Work = () => {
  return (
    <section id="work" className="container mx-auto p-4">
            <h1 className="text-primary text-xl font-medium mt-12 -mb-2">Former Work</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/*VENSTRE SIDE*/}
                <div className="flex flex-col justify-between">
                    <div className="bg-backgroundsecondary rounded-md p-4 mt-4 gradient-border">
                        <h1 className="font-regular text-md text-primary">Co-founder of Minor Gallery</h1>
                        <p className="font-light text-secondary text-md">
                            Co-founder and owner of Minor Gallery, an art gallery in Nørrebro, Copenhagen. 2023-2025.
                        </p>
                    </div>
                    <div className="bg-backgroundsecondary rounded-md p-4 mt-4 gradient-border">
                        <h1 className="font-regular text-md text-primary">Designer's assistant at Hermés</h1>
                        <p className="font-light text-secondary text-md">
                            Assistant working for the designer at Hermés in Amsterdam 2020 and Barcelona 2022.
                        </p>
                    </div>
                    <div className="bg-backgroundsecondary rounded-md p-4 mt-4 gradient-border">
                        <h1 className="font-regular text-md text-primary">gw.læder</h1>
                        <p className="font-light text-secondary text-md">
                            Created my own leather goods brand, which makes bespoke & made to order goods. Created in 2020.
                        </p>
                    </div>
                    <div className="bg-backgroundsecondary rounded-md p-4 mt-4 gradient-border">
                        <h1 className="font-regular text-md text-primary">Museum assistant</h1>
                        <p className="font-light text-secondary text-md">
                            Museum assistant at 21st Century Museum of Contemporary Art in Kanazawa for the exhibition; Everyday Life - Signs of Awareness, 2017.
                            Also worked as an assistant at Munkeruphus, a museum in the northern part of Zealand during 2022.
                        </p>
                    </div>
                </div>
                {/*HØJRE SIDE*/}
                <div className="flex flex-col justify-between mt-4 ml-4 gap-4">
                    <div className="bg-backgroundthird rounded-md p-4 gradient-border flex flex-row justify-between">
                        <div className="flex flex-col">
                            <h1 className="font-regular text-md text-primary">Other interests:</h1>
                            <p className="font-light text-secondary text-md">
                                I enjoy fishing, climbing and being in nature with my friends. I enjoy learning new things, whether that be hobbies or things work related. <br />
                                <br />
                                Therefore I hope to be able to work in an interesting envoironment, where things aren't entirely static. I think that's where I would really thrive!
                            </p>
                        </div>
                        <video src="bg_hero_mov.MOV" alt="moviething" playsInline muted loop autoPlay
                        className="w-auto h-100 rounded-sm">
                        </video>
                    </div>

                    <a className="font-medium text-primary text-center p-2 gradient-border hover:bg-backgroundthird transition-all duration-200 ease-in cursor-pointer rounded-sm text-md"
                    href="https://www.linkedin.com/in/gustav-werdelin-677785394/" target="_blank" rel="noopener noreferrer">
                        Get in touch with me!
                    </a>
                </div>
            </div>
    </section>
  )
}

export default Work