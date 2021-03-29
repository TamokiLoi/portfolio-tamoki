import Image from 'next/image';
import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
    project: {
        name,
        image_path,
        category,
        deployed_url,
        description,
        github_url,
        key_techs,
        id
    }
}) => {

    const [showDetail, setShowDetail] = useState(false);

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
                onClick={() => setShowDetail(true)} />
            <p className="my-2 text-center">{name}</p>

            {
                showDetail &&
                <div className="absolute top-0 left-0 z-10 grid w-full h-auto text-black bg-gray-100 dark:text-white dark:bg-black-100 md:grid-cols-2 gap-x-12">
                    <div>
                        <Image
                            width={300}
                            height={150}
                            src={image_path}
                            alt={name}
                            className="overflow-hidden"
                            layout="responsive" />

                        <div className="flex justify-center my-4 space-x-3">
                            <a href={github_url} className="project-icon-link bg-gray-toggle-black-200" target="_blank">
                                <AiFillGithub /> <span>Github</span>
                            </a>
                            <a href={deployed_url} className="project-icon-link bg-gray-toggle-black-200" target="_blank">
                                <AiFillProject /> <span>Project</span>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2>
                        <h3 className="mb-3 font-medium">{description}</h3>
                        <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                            {
                                key_techs &&
                                key_techs.map(tech =>
                                    <span key={tech} className="px-2 py-1 my-1 bg-gray-toggle-black-200">
                                        {tech}
                                    </span>
                                )
                            }
                        </div>
                    </div>

                    <button
                        onClick={() => setShowDetail(false)}
                        className="absolute p-1 rounded-full bg-gray-toggle-black-200 top-3 right-3 focus:outline-none"
                    >
                        <MdClose />
                    </button>
                </div>
            }
        </div>
    )
}

export default ProjectCard
