import { motion } from "framer-motion";
import Head from 'next/head';
import { useState } from 'react';
import { fadeInUp, routeFade, stagger } from '../animations';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { projects as projectsData } from '../data';
import { Category } from '../types';

const Projects = () => {

    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState('all');

    const [showDetail, setShowDetail] = useState<number | null>(null);

    const handleFilterCategory = (category: Category | 'all') => {
        setActive(category);

        if (category === 'all') {
            setProjects(projectsData);
            return;
        }

        const newArray = projectsData.filter(project => project.category.includes(category));
        setProjects(newArray);
    }

    return (
        <>
            <Head>
                <title>Projects Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <motion.div
                className="px-5 py-2 overflow-y-scroll"
                style={{ height: '60vh' }}
                variants={routeFade}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active} />

                <motion.div
                    className="relative grid grid-cols-12 gap-4 my-3"
                    variants={stagger}
                    animate="animate"
                    initial="initial"
                >
                    {/* children's initial and animate property should be same as the parent during a stagger effect */}
                    {
                        projects &&
                        projects.map(project =>
                            <motion.div
                                className="col-span-12 p-2 rounded-lg sm:col-span-6 lg:col-span-4 bg-gray-toggle-black-200"
                                key={project.name}
                                variants={fadeInUp}
                            >
                                <ProjectCard
                                    project={project}
                                    showDetail={showDetail}
                                    setShowDetail={setShowDetail} />
                            </motion.div>
                        )
                    }
                </motion.div>
            </motion.div>
        </>
    )
}

export default Projects
