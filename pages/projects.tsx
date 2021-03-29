import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { projects as projectsData } from '../data';
import { Category } from '../types';

const Projects = () => {

    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState('all');

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
        <div className="px-5 py-2 overflow-y-scroll" style={{ height: '60vh' }}>
            <ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active}/>

            <div className="relative grid grid-cols-12 gap-4 my-3">
                {
                    projects &&
                    projects.map(project =>
                        <div key={project.name} className="col-span-12 p-2 rounded-lg sm:col-span-6 lg:col-span-4 bg-gray-toggle-black-200">
                            <ProjectCard project={project} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Projects
