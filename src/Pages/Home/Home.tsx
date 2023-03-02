import Sidebar from "../../Components/Sidebar";

function Home() {
	return (
		<div className="flex ">
			<Sidebar />
			{/* //home-container */}
			<div className="flex-[6]">container</div>
		</div>
	);
}

export default Home;
