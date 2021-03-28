import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillSkype } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";

const Sidebar = () => {

    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div>
            <img
                width="128px"
                height="128px"
                src="https://avatars.githubusercontent.com/u/27203631?s=400&u=bc8dba57035403dce86c1bc658723fa4e4deac60&v=4"
                alt="user avatar"
                className="w-32 h-32 mx-auto border rounded-full"
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-green">Tamoki </span>
				Loi
			</h3>
            <p className="px-2 py-1 my-3 rounded-full bg-gray-toggle-black-200">Web Developer</p>
            <a
                className="flex items-center justify-center px-2 py-1 my-3 rounded-full bg-gray-toggle-black-200"
                href=""
                download="name"
            >
                <GiTie className="w-6 h-6" /> Download Resume
			</a>

            {/* social icon */}
            <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
                <a href="https://github.com/TamokiLoi" target="_blank">
                    <AiFillGithub className="w-8 h-8" />
                </a>
                <a
                    href="https://www.linkedin.com/in/nguyen-lam-thanh-loi-858416141/"
                    target="_blank"
                >
                    <AiFillLinkedin className="w-8 h-8" />
                </a>
                <a href="https://join.skype.com/invite/hhqrK60NYQB1" target="_blank">
                    <AiFillSkype className="w-8 h-8" />
                </a>
            </div>

            {/* Contacts */}
            <div
                className="py-4 my-5 bg-gray-toggle-black-200"
                style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className="flex items-center justify-center space-x-2">
                    <GoLocation />
                    <span>Ho Chi Minh City, Viet Nam</span>
                </div>
                <p className="my-2">loinguyenlamthanh@gmail.com</p>
                <p className="mt-2">0938.947.221/0395.774.791</p>
            </div>
            {/* Email Button */}
            <button className="btn-email-sidebar" onClick={() => window.open('mailto:loinguyenlamthanh@gmail.com')}>Email me</button>
            <button className="btn-email-sidebar" onClick={changeTheme}>Toggle Theme</button>
        </div>
    );
};

export default Sidebar;
