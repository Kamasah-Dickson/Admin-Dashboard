import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Widgets from "../../Components/Widgets";

function Home() {
	return (
		<div className="flex ">
			<Sidebar />
			<div className="flex-[6]">
				<Navbar />
				<div className="flex">
					<Widgets />
				</div>
			</div>
		</div>
	);
}

export default Home;
