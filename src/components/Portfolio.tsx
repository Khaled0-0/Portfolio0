"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import project0 from '../assets/project0.png'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'



const projects = [
    {
        title: "E-commerce Digital Product",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.",
        divstack: "Mongodb, Express, React, Nodejs",
        link: "#",
        git: "#",
        src: project1,
    },
    {
        title: "Portfolio Website with framer motion",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.",
        divstack: "Nextjs",
        link: "#",
        git: "#",
        src: project0,
    },
    {
        title: "Food Ordering Website",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quisquam.",
        divstack: "React, Tailwindcss",
        link: "#",
        git: "#",
        src: project2,
    },
]


const Portfolio = () => {
    return (
        <div className="text-white mt-52 bg-gradient-to-b from-black to-[#381a5f] py-16" id="portfolio">

            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold my-12 '>Selected <span className='text-orange-400'>Projects</span>
            </h1>

            <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className={`flex mt-12 flex-col ${index % 2 === 1 ? " md:flex-row-reverse gap-12" : " md:flex-row"}`}
                    >
                        <div className="space-y-2 max-w-[550px] ">
                            <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
                            <h2 className="text-4xl font-bold">{project.title}</h2>
                            <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
                            <p className="text-xl text-orange-400 font-semibold">{project.divstack}</p>
                            <div className="w-64 h-[1px] bg-gray-400 my-4">
                                <a href={project.link} className="mr-6">
                                    Link
                                </a>
                                <a href={project.git}>
                                    Git
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src={project.src} alt={project.title}
                                className="h-[350px] w-[500px] object-cover border rounded border-gray-700"
                            />
                        </div>
                    </motion.div>
                ))}

            </div>

        </div>
    )
}

export default Portfolio
