import Chart from "../../Components/Chart";
import Featured from "../../Components/Featured";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Tables from "../../Components/Table";
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
					<Chart aspect={2 / 1} title={"Last 5 Months (Revenue)"} />
				</div>
				{/* list-container */}

				<div className="mt-14 px-5">
					<div className="shadow-lg">
						<div className="px-5 py-2 text-xl font-medium text-[grey]">
							Latest Transactions
						</div>
						<Tables />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
