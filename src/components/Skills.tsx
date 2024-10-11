
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGit, FaGithub, FaFigma } from "react-icons/fa";

const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: "HTML" },
    { icon: <FaCss3Alt size={140} />, label: "CSS" },
    { icon: <FaReact size={140} />, label: "React" },
    { icon: <FaJsSquare size={140} />, label: "JavaScript" },
    { icon: <FaNodeJs size={140} />, label: "Node.js" },
    { icon: <FaGit size={140} />, label: "Git" },
    { icon: <FaGithub size={140} />, label: "Github" },
    { icon: <FaFigma size={140} />, label: "Figma" },


]


const Skills = () => {
    return (
        <div className="bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32 overflow-x-clip">
            <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
                <h2 className="text-6xl font-bold mb-4 md:w-[78%] lg:w-[100%]">What I <span className="text-orange-400">Do</span></h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:w-[78%] lg:w-[100%]">
                    {skillIcons.map((skill, index) => (
                        <div
                            key={index}
                            className="h-[160px] w-[160px] flex flex-col items-center justify-between bg-white/10 p-4 rounded-xl"
                        >
                            {skill.icon}
                            <p className="mt-2">{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
