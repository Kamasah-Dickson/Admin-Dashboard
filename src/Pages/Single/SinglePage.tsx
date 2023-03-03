import React from "react";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import me from "../../assets/EgLF6Jmi_4x.jpg";

function SinglePage() {
	return (
		<div className="flex w-full">
			<Sidebar />
			<div className="flex-[6]">
				<Navbar />
				{/* top */}
				<div className="flex items-center gap-5 p-5">
					<div className="flex-1 p-5 shadow-md">
						<h1 className="text-2xl font-bold">Information </h1>
						<div className="flex items-center gap-5">
							<div className="h-[200px] w-[200px] rounded-full">
								<img
									src={me}
									className="h-full w-full rounded-full object-cover"
									alt="Kamasah Dickson"
								/>
							</div>
							details
						</div>
					</div>
					<div className="flex-[2] shadow-md"></div>
				</div>
				{/* bottom */}
				<div></div>
			</div>
		</div>
	);
}

export default SinglePage;
