import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

function Sidebar() {
	return (
		<div className=" h-screen flex-[1] border-r-1 border-gray-100 bg-white">
			{/* top-div */}
			<div className="flex h-[50px] items-center justify-center">
				<span className="text-2xl font-bold text-purple-800">KamasDEV</span>
			</div>
			<hr className="h-0 border-1 border-gray-100" />
			<div className="center pl-4">
				<ul className="text-xl">
					<li>
						<DashboardIcon />
						<span>Dashboard</span>
					</li>
					<li>
						<PeopleAltIcon />
						<span>Users</span>
					</li>
					<li>
						<span>Dashboard</span>
					</li>
					<li>
						<span>Dashboard</span>
					</li>
					<li>
						<span>Dashboard</span>
					</li>
				</ul>
			</div>
			<div className="bottom">color options</div>
		</div>
	);
}

export default Sidebar;
