import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "react-circular-progressbar/dist/styles.css";
import { useContext } from "react";
import { themeContextProvider } from "../context/darkModeContext";

function Featured() {
	const { dark } = useContext(themeContextProvider);

	return (
		<div
			className={`flex-[2] p-3 py-6 ${
				!dark ? "shadow-md" : "shadow-md shadow-[#000000a9]"
			}`}
		>
			{/* top */}
			<div className="flex justify-between text-[grey]">
				<h1 className="text-[17px]">Total Revenue</h1>
				<MoreVertOutlinedIcon fontSize="small" className="cursor-pointer" />
			</div>
			{/* bottom */}
			<div className="flex flex-col items-center justify-center gap-3 p-[20px]">
				<div className="h-[100px] w-[100px]">
					<CircularProgressbar strokeWidth={5} value={70} text="70%" />
				</div>
				<p className="font-bold text-[grey]">Total sales made today</p>
				<p className="text-3xl font-bold">$220</p>
				<p className="text-center text-[15px] font-light text-[grey]">
					Previous transaction processing. Last payments may not be included.
				</p>
				{/* summary */}

				<div className="mt-3 flex w-full items-center justify-between">
					<div className="text-center">
						<div className="mb-1 text-[15px] font-bold text-[gray]">
							This Week
						</div>
						<div className="flex items-center justify-center text-[16px] text-[red]">
							<KeyboardArrowDownIcon fontSize="small" />
							<p>$402.4K</p>
						</div>
					</div>
					<div className="text-center">
						<div className="mb-1 text-[15px] font-bold text-[gray]">
							Last Week
						</div>
						<div className="flex items-center justify-center text-[16px] text-[green]">
							<KeyboardArrowUpIcon fontSize="small" />
							<p>$652.4K</p>
						</div>
					</div>
					<div className="text-center">
						<div className="mb-1 text-[15px] font-bold text-[gray]">
							Last Month
						</div>
						<div className="flex items-center justify-center text-[16px] text-[green]">
							<KeyboardArrowUpIcon fontSize="small" />
							<p>$932.4K</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Featured;
