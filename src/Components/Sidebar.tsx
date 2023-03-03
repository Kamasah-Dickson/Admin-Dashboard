import { Link } from "react-router-dom";
import { lists, main, service, useful, user } from "../Data/sidebarData";

function Sidebar() {
	return (
		<div className=" h-screen flex-[1] border-r-1 border-gray-100 bg-white">
			{/* top-div */}
			<div className="flex h-[50px] items-center justify-center">
				<span className="cursor-pointer text-2xl font-bold text-purple-800">
					KamasDEV
				</span>
			</div>
			<hr className="h-0 border-1 border-gray-100" />
			<div className="center pl-4">
				<ul className="text-xl">
					<p className="mt-4 mb-1 text-xs font-normal text-[#5c5c5c]">MAIN</p>
					{main.map((data) => {
						return (
							<li
								key={data.path}
								className="flex cursor-pointer items-center justify-start gap-2 p-[5px] hover:bg-[#ece8ffa8]"
							>
								<p className="text-lg text-[#7451f8]">{data.icon}</p>
								<p className="text-[18px] font-normal  text-gray-700">
									{data.name}
								</p>
							</li>
						);
					})}
					<p className="mt-4 mb-1 text-xs font-normal text-[#5c5c5c] ">LISTS</p>
					{lists.map((data) => {
						return (
							<li
								key={data.path}
								className="flex cursor-pointer items-center justify-start gap-2 p-[5px]  hover:bg-[#ece8ffa8]"
							>
								<p className="text-lg text-[#7451f8]">{data.icon}</p>
								<p className="text-[18px] font-normal text-gray-700">
									{data.name}
								</p>
							</li>
						);
					})}
					<p className="mt-4 mb-1 text-xs font-normal text-[#5c5c5c] ">
						USEFUL
					</p>
					{useful.map((data) => {
						return (
							<li
								key={data.path}
								className="flex cursor-pointer items-center justify-start gap-2 p-[5px]  hover:bg-[#ece8ffa8]"
							>
								<p className="text-lg text-[#7451f8]">{data.icon}</p>
								<p className="text-[18px] font-normal  text-gray-700">
									{data.name}
								</p>
							</li>
						);
					})}
					<p className="mt-4 mb-1 text-xs font-normal text-[#5c5c5c] ">
						SERVICE
					</p>
					{service.map((data) => {
						return (
							<li
								key={data.path}
								className="flex cursor-pointer items-center justify-start gap-2 p-[5px]  hover:bg-[#ece8ffa8]"
							>
								<p className="text-lg text-[#7451f8]">{data.icon}</p>
								<p className="text-[18px] font-normal text-gray-700">
									{data.name}
								</p>
							</li>
						);
					})}
					<p className="mt-4 mb-1 text-xs font-normal text-[#5c5c5c] ">USER</p>
					{user.map((data) => {
						return (
							<li
								className="flex cursor-pointer items-center justify-start gap-2 p-[5px]  hover:bg-[#ece8ffa8]"
								key={data.path}
							>
								<p className="text-lg text-[#7451f8]">{data.icon}</p>
								<p className="text-[18px] font-normal text-gray-700">
									{data.name}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="m-6 flex items-center gap-2">
				<div
					className="h-5 w-5 cursor-pointer rounded-sm border-1 border-[#7451f8] bg-[whitesmoke]
				"
				></div>
				<div
					className=" h-5 w-5 cursor-pointer rounded-sm border-1 border-[#7451f8] bg-[#333]
				"
				></div>
			</div>
		</div>
	);
}

export default Sidebar;
