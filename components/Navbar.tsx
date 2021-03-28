import { useState, useEffect, FunctionComponent } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';

const routers = [
    { name: 'About', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Resume', url: '/resume' }
];

const NavItem: FunctionComponent<{
    activeItem: string,
    name: string,
    route: string,
    setActiveItem: Function
}> = ({ activeItem, name, route, setActiveItem }) => {
    return activeItem !== name &&
        (
            <Link href={route}>
                <a>
                    <span
                        onClick={() => setActiveItem(name)}
                        className="hover:text-green">
                        {name}
                    </span>
                </a>
            </Link>
        )
}

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('');

    const { pathname } = useRouter();

    useEffect(() => {
        routers.map(router => {
            if (pathname === router.url) {
                setActiveItem(router.name)
            }
        });
    }, []);

    return (
        <div className="flex justify-between px-5 py-3 my-3">
            <span className="text-xl font-bold border-b-4 text-green border-green md:text-2xl">
                {activeItem}
            </span>
            <div className="flex space-x-5 text-lg">
                {
                    routers.map(router =>
                        <NavItem
                            key={router.name}
                            activeItem={activeItem}
                            name={router.name}
                            route={router.url}
                            setActiveItem={setActiveItem}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
