import Image from 'next/image';
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from '../animations';

const ProjectCard: FunctionComponent<{
    project: IProject,
    showDetail: null | number,
    setShowDetail: (id: null | number) => void;
}> = ({
    project: {
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,
        id
    },
    showDetail,
    setShowDetail,
}) => {
        return (
            <div>
                <Image
                    width={300}
                    height={150}
                    src={image_path}
                    alt={name}
                    layout="responsive"
                    quality={10}
                    className="cursor-pointer"
                    onClick={() => setShowDetail(id)} />
                <p className="my-2 text-center">{name}</p>

                {
                    showDetail === id &&
                    <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 dark:text-white dark:bg-black-100 md:grid-cols-2 gap-x-12">
                        <motion.div variants={stagger} initial="initial" animate="animate">
                            <motion.div variants={fadeInUp} className="border-4 border-black-100 dark:border-gray-100">
                                <Image
                                    width={300}
                                    height={150}
                                    src={image_path}
                                    alt={name}
                                    className="overflow-hidden"
                                    layout="responsive" />
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex justify-center my-4 space-x-3">
                                {
                                    github_url &&
                                    <a href={github_url} className="project-icon-link bg-gray-toggle-black-200" target="_blank">
                                        <AiFillGithub /> <span>Github</span>
                                    </a>
                                }
                                <a href={deployed_url} className="project-icon-link bg-gray-toggle-black-200" target="_blank">
                                    <AiFillProject /> <span>Project</span>
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={stagger} initial="initial" animate="animate">
                            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
                            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>
                            <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                                {
                                    key_techs &&
                                    key_techs.map(tech =>
                                        <span key={tech} className="px-2 py-1 my-1 bg-gray-toggle-black-200">
                                            {tech}
                                        </span>
                                    )
                                }
                            </motion.div>
                        </motion.div>

                        <button
                            onClick={() => setShowDetail(null)}
                            className="absolute p-1 rounded-full bg-gray-toggle-black-200 top-3 right-3 focus:outline-none">
                            <MdClose />
                        </button>
                    </div>
                }
            </div>
        )
    }

export default ProjectCard
