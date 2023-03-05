import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function NotFound() {
	return (
		<div className="flex h-screen w-full">
			<Sidebar />
			<div className="flex-[5]">
				<Navbar />
				<div className="h-screen ">
					<h1 className="flex h-full items-center justify-center text-4xl">
						Page Under Construction🚧
					</h1>
				</div>
				{/* //chat container */}
			</div>
		</div>
	);
}

export default NotFound;
