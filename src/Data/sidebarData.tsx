import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CategoryIcon from "@mui/icons-material/Category";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TuneIcon from "@mui/icons-material/Tune";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export const user = [
	{
		icon: <AccountCircleIcon />,
		name: "Profile",
		path: "profile",
	},
	{
		icon: <ExitToAppIcon />,
		name: "Logout",
		path: "logout",
	},
];
export const main = [
	{
		icon: <DashboardIcon />,
		name: "Dashboard",
		path: "/",
	},
];

export const lists = [
	{
		icon: <PeopleAltIcon />,
		name: "Users",
		path: "/users",
	},
	{
		icon: <CategoryIcon />,
		name: "Products",
		path: "/products",
	},
	{
		icon: <CreditCardIcon />,
		name: "Orders",
		path: "/orders",
	},
	{
		icon: <LocalShippingIcon />,
		name: "Delivery",
		path: "/delivery",
	},
];
export const useful = [
	{
		icon: <AutoGraphIcon />,
		name: "Stats",
		path: "/stats",
	},
	{
		icon: <NotificationsActiveIcon />,
		name: "Notification",
		path: "/notification",
	},
];
export const service = [
	{
		icon: <HealthAndSafetyIcon />,
		name: "System health",
		path: "/system%20health",
	},
	{
		icon: <PsychologyIcon />,
		name: "Logs",
		path: "/Logs",
	},
	{
		icon: <TuneIcon />,
		name: "Settings",
		path: "/settings",
	},
];
