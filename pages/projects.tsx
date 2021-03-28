import { projects } from '../data';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    return (
        <div className="px-5 py-2 overflow-y-scroll" style={{ height: '60vh' }}>
            <nav>Navbar</nav>

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
