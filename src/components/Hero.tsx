"use client"

import Image from "next/image"
import cursor from '../assets/icon1.png'
import lightning from '../assets/lightning.png'
import { motion } from "framer-motion"
import profile from '../assets/profile.png'



const Hero = () => {
    return (
        <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">

            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>

            <div className="relative">
                <div className="text-5xl md:text-8xl font-bold text-center">
                    <h1 className="text-[#98B4CE]">Hello, I am</h1>
                    <h1 className="text-[#E48A57]">Khaled Nasser</h1>
                </div>

                <motion.div
                    className="absolute left-[200px] top-[60px] hidden md:hidden lg:block lg:left-[-90px] lg:top-[10px] xl:left-[150px] xl:top-[60px]"
                    drag
                    dragConstraints={{
                        top: -150,
                        bottom: 200,
                        left: -200,
                        right: 1200,
                    }}
                >
                    <Image
                        src={cursor}
                        alt="cursor"
                        width={190}
                        height={190}
                        className=""
                        draggable={false}
                    />
                </motion.div>
                <motion.div
                    className="absolute right-[200px] top-[20px] hidden md:hidden lg:block lg:right-[-80px] lg:top-[10px] xl:right-[150px] xl:top-[60px]"
                    drag
                    dragConstraints={{
                        top: -150,
                        bottom: 200,
                        left: -1200,
                        right: 100,
                    }}
                >
                    <Image
                        src={lightning}
                        alt="lightning"
                        width={190}
                        height={190}
                        className=""
                        draggable={false}
                    />
                </motion.div>
                <p className="text-center text-base md:text-2xl font-bold max-w-[500px] mx-auto mt-8 text-white/80">
                    I am a Front-End Developer Focused on Creating Interactive and Dynamic Web Applications.
                </p>
                <Image
                    src={profile}
                    alt="profile picture"
                    width={200}
                    height={200}
                    className="h-auto w-auto mx-auto mt-4 "
                />
            </div>
        </div >
    )
}

export default Hero


