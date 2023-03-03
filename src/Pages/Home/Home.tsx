import Chart from "../../Components/Chart";
import Featured from "../../Components/Featured";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Widgets from "../../Components/Widgets";

function Home() {
	return (
		<div className="mx-auto flex max-w-[1440px] ">
			<Sidebar />
			<div className="flex-[6]">
				<Navbar />
				<div className="mt-5 flex">
					<Widgets type="user" />
					<Widgets type="order" />
					<Widgets type="earnings" />
					<Widgets type="balance" />
				</div>
				{/* //chat container */}
				<div className="mt-5 flex items-center justify-between gap-3 px-5">
					<Featured />
					<Chart />
				</div>
			</div>
		</div>
	);
}

export default Home;
