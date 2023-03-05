import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import { useContext } from "react";
import { themeContextProvider } from "../context/darkModeContext";
import { Link } from "react-router-dom";

type Widget = "user" | "order" | "earnings" | "balance";

interface WidgetProp {
	type: Widget;
}

function Widgets({ type }: WidgetProp) {
	let data;

	const diff = 30;

	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				amount: 200,
				link: "See all users",
				icon: <PersonIcon fontSize="medium" className=" text-[crimson]" />,
				bg: " bg-[#ff003349]",
			};
			break;
		case "order":
			data = {
				title: "ORDERS",
				isMoney: false,
				amount: 765,
				link: "View all orders",
				icon: (
					<ShoppingCartOutlinedIcon
						fontSize="medium"
						className="text-[goldenrod]"
					/>
				),
				bg: "bg-[rgba(218,165,32,0.2)]",
			};
			break;
		case "earnings":
			data = {
				title: "EARNINGS",
				isMoney: true,
				amount: 483,
				link: "View net earnings",
				icon: (
					<AttachMoneyOutlinedIcon fontSize="medium" className="text-[green]" />
				),
				bg: "bg-[rgba(0,128,0,0.2)]",
			};
			break;
		case "balance":
			data = {
				title: "BALANCE",
				isMoney: true,
				link: "See details",
				amount: 897,
				icon: (
					<AccountBalanceOutlinedIcon
						fontSize="medium"
						className="text-[purple]"
					/>
				),
				bg: "bg-[rgba(128,0,128,0.2)]",
			};
			break;
		default:
			break;
	}
	const { dark } = useContext(themeContextProvider);
	return (
		<div className="flex w-full items-center justify-between gap-5 rounded-md px-5 ">
			<div
				className={`flex w-full justify-between p-3 
					${!dark ? "shadow-md" : "shadow-md shadow-[#000000]"}
			`}
			>
				<div className="flex flex-col">
					<span className="text-lg text-[14px] font-bold text-[rgb(163,161,161)]">
						{data?.title}
					</span>
					<span className="text-[28px] font-light">
						{data?.isMoney && "$"}
						{data?.amount}
					</span>
					<Link to="/users">
						<span className="border-b-2 text-[14px] ">{data?.link}</span>
					</Link>
				</div>
				<div className="flex flex-col items-end justify-between ">
					<div className="flex items-start text-[green]">
						<KeyboardArrowUpIcon />
						<div>{diff}%</div>
					</div>
					<div className={` ${data?.bg} rounded-lg p-1`}>{data?.icon}</div>
				</div>
			</div>
		</div>
	);
}

export default Widgets;
