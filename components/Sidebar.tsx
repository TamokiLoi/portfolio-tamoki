import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillSkype } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

const Sidebar = () => {
	return (
		<div>
			<img
				src="https://avatars.githubusercontent.com/u/27203631?s=400&u=bc8dba57035403dce86c1bc658723fa4e4deac60&v=4"
				alt="user avatar"
				className="w-32 h-32 mx-auto rounded-full"
			/>
			<h3 className="my-4 text-3xl font-medium tracking-wider">
				<span>Tamoki </span>
				Loi
			</h3>
			<p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
			<a
				className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
				href=""
				download="name"
			>
				<GiTie className="w-6 h-6" /> Download Resume
			</a>

			{/* social icon */}
			<div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
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

			{/* address */}
			<div>
				<div>
					<GoLocation />
					<span>Ho Chi Minh City, Viet Nam</span>
				</div>
				<p>loinguyenlamthanh@gmail.com</p>
				<p>0938.947.221/0395.774.791</p>
			</div>
			{/* Email Button */}
			<button>Email me</button>
			<button>Toggle Theme</button>
		</div>
	);
};

export default Sidebar;
