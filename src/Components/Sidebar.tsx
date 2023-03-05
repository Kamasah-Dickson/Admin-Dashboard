import { Link } from "react-router-dom";
import { lists, main, service, useful, user } from "../Data/sidebarData";
import { useContext } from "react";
import { themeContextProvider } from "../context/darkModeContext";
import { useLocation } from "react-router-dom";

function Sidebar() {
	const { setDark, dark } = useContext(themeContextProvider);
	const locaton = useLocation();

	return (
		<div className="sidebar sticky top-0 h-screen flex-[1] border-r-1 border-gray-100 bg-white">
			{/* top-div */}
			<div className="flex h-[50px] items-center justify-center">
				<Link
					style={{ textDecoration: "none" }}
					to="/"
					className="logo cursor-pointer text-2xl font-bold text-purple-800"
				>
					KamasDEV
				</Link>
			</div>
			<hr className="hr h-0 border-1 border-gray-100" />
			<div className="center pl-4">
				<ul className="text-xl">
					<p className="mt-4 mb-1 text-xs font-normal text-[#5c5c5c]">MAIN</p>
					{main.map((data) => {
						return (
							<Link
								to={data.path}
								key={data.path}
								className={`link-hover ${
									locaton.pathname === data.path &&
									`${!dark ? "bg-[#ece8ffa8]" : "bg-[#212135]"}`
								} flex cursor-pointer items-center justify-start gap-2 p-[5px] hover:bg-[#ece8ffa8]`}
							>
								<p className="text-lg text-[#7451f8]">{data.icon}</p>
								<p className="link text-[18px] font-normal  text-gray-700">
									{data.name}
								</p>
							</Link>
						);
					})}
					<p className="mt-4 mb-1 text-xs font-normal text-[#5c5c5c] ">LISTS</p>
					{lists.map((data) => {
						return (
							<Link
								to={data.path}
								key={data.path}
								className={`link-hover ${
									locaton.pathname === data.path &&
									`${!dark ? "bg-[#ece8ffa8]" : "bg-[#212135]"}`
								} flex cursor-pointer items-center justify-start gap-2 p-[5px] hover:bg-[#ece8ffa8]`}
							>
								<p className="text-lg text-[#7451f8]">{data.icon}</p>
								<p className="link text-[18px] font-normal text-gray-700">
									{data.name}
								</p>
							</Link>
						);
					})}
					<p className="mt-4 mb-1 text-xs font-normal text-[#5c5c5c] ">
						USEFUL
					</p>
					{useful.map((data) => {
						return (
							<Link
								to={data.path}
								key={data.path}
								className={`link-hover ${
									locaton.pathname === data.path &&
									`${!dark ? "bg-[#ece8ffa8]" : "bg-[#212135]"}`
								} flex cursor-pointer items-center justify-start gap-2 p-[5px] hover:bg-[#ece8ffa8]`}
							>
								<p className="text-lg text-[#7451f8]">{data.icon}</p>
								<p className="link text-[18px] font-normal  text-gray-700">
									{data.name}
								</p>
							</Link>
						);
					})}
					<p className="mt-4 mb-1 text-xs font-normal text-[#5c5c5c] ">
						SERVICE
					</p>
					{service.map((data) => {
						return (
							<Link
								to={data.path}
								key={data.path}
								className={`link-hover ${
									locaton.pathname === data.path &&
									`${!dark ? "bg-[#ece8ffa8]" : "bg-[#212135]"}`
								} flex cursor-pointer items-center justify-start gap-2 p-[5px] hover:bg-[#ece8ffa8]`}
							>
								<p className="text-lg text-[#7451f8]">{data.icon}</p>
								<p className="link text-[18px] font-normal text-gray-700">
									{data.name}
								</p>
							</Link>
						);
					})}
					<p className="mt-4 mb-1 text-xs font-normal text-[#5c5c5c] ">USER</p>
					{user.map((data) => {
						return (
							<Link
								to={data.path}
								className={`link-hover ${
									locaton.pathname === data.path &&
									`${!dark ? "bg-[#ece8ffa8]" : "bg-[#212135]"}`
								} flex cursor-pointer items-center justify-start gap-2 p-[5px] hover:bg-[#ece8ffa8]`}
								key={data.path}
							>
								<p className="text-lg text-[#7451f8]">{data.icon}</p>
								<p className="link text-[18px] font-normal text-gray-700">
									{data.name}
								</p>
							</Link>
						);
					})}
				</ul>
			</div>
			<div className="m-6 flex items-center gap-2">
				<div
					onClick={() => setDark(false)}
					className="h-5 w-5 cursor-pointer rounded-sm border-1 border-[#7451f8] bg-[whitesmoke]
				"
				></div>
				<div
					onClick={() => setDark(true)}
					className=" h-5 w-5 cursor-pointer rounded-sm border-1 border-[#7451f8] bg-[#333]
				"
				></div>
			</div>
		</div>
	);
}

export default Sidebar;
