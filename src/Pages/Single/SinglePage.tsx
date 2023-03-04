import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import me from "../../assets/EgLF6Jmi_4x.jpg";
import Chart from "../../Components/Chart";
import Tables from "../../Components/Table";

function SinglePage() {
	return (
		<div className="flex w-full">
			<Sidebar />
			<div className="flex-[6]">
				<Navbar />
				{/* top */}
				<div className="flex items-center gap-5 p-5">
					<div className="relative h-full flex-1 p-5 shadow-md">
						<div className="absolute top-5 right-5 cursor-pointer rounded-sm bg-[#7551f813] p-1 text-sm text-[#7451f8]">
							Edit
						</div>
						<h1 className="mb-5 text-2xl font-bold text-[lightgray]">
							Information
						</h1>
						<div className="flex items-center gap-5">
							<div className="h-[170px] w-[170px] rounded-full">
								<img
									src={me}
									className="h-full w-full rounded-full object-cover"
									alt="Kamasah Dickson"
								/>
							</div>
							{/* details */}
							<div>
								<h1 className="mb-3 text-[#555]">Kamasah Dickson</h1>
								<div className="mb-1 text-base">
									<span className="text-md font-bold text-[black]">Email:</span>
									<span className="text-md ml-1 text-[gray]">
										kamasahdickson19@gmail.com
									</span>
								</div>
								<div className="mb-1 text-base">
									<span className="text-md font-bold text-[black]">Phone:</span>
									<span className="text-md ml-1 text-[gray]">
										+233594571065
									</span>
								</div>
								<div className="mb-1 text-base">
									<span className="text-md font-bold text-[black]">
										Address:
									</span>
									<span className="text-md ml-1 text-[gray]">
										East Legon, Accra Ghana
									</span>
								</div>
								<div className="mb-1 text-base">
									<span className="text-md font-bold text-[black]">
										Country:
									</span>
									<span className="text-md ml-1 text-[gray]">Ghana</span>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-[2]">
						<Chart aspect={3 / 1} title="User spending (Last 5  months)" />
					</div>
				</div>
				{/* bottom */}
				<div className="p-5">
					<h1 className="mb-5 text-2xl font-bold text-[lightgray]">
						Last Transactions
					</h1>
					<Tables />
				</div>
			</div>
		</div>
	);
}

export default SinglePage;
