import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import SmsIcon from "@mui/icons-material/Sms";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import me from "../assets/EgLF6Jmi_4x.jpg";
import { themeContextProvider } from "../context/darkModeContext";
import { useContext } from "react";

function Navbar() {
	const { dark, setDark } = useContext(themeContextProvider);

	return (
		<div>
			<div className="navbar flex w-full items-center justify-between border-b-1 px-5">
				<div className="search flex items-center justify-center border-1">
					<input
						className=" border-none bg-transparent px-1 outline-none placeholder:text-[14px]"
						type="text"
						placeholder="search..."
					/>
					<SearchIcon
						className="icon cursor-pointer text-[grey]"
						fontSize="medium"
					/>
				</div>
				<div className="flex h-[50px] items-center gap-7 text-sm text-[#555]">
					<div className="icon flex cursor-pointer items-center gap-2">
						<LanguageIcon fontSize="small" />
						English
					</div>
					<div
						onClick={() => setDark(!dark)}
						className="icon mr-1 flex cursor-pointer items-center"
					>
						{!dark ? (
							<DarkModeIcon fontSize="small" />
						) : (
							<LightModeIcon fontSize="small" />
						)}
					</div>
					<div className="icon mr-1 flex cursor-pointer items-center">
						<FullscreenExitIcon fontSize="small" />
					</div>
					<div className="icon relative mr-1 flex cursor-pointer items-center">
						<NotificationsNoneIcon fontSize="small" />
						<div className="absolute top-[-6px] left-[10px] flex h-4 w-4 items-center justify-center rounded-full bg-[red] text-center text-[10px] font-bold text-white">
							1
						</div>
					</div>
					<div className="icon relative mr-1 flex cursor-pointer items-center">
						<SmsIcon fontSize="small" />
						<div className="absolute top-[-6px] left-[10px] flex h-4 w-4 items-center justify-center rounded-full bg-[red] text-center text-[10px] font-bold text-white">
							2
						</div>
					</div>
					<div className="icon mr-1 flex cursor-pointer items-center">
						<FormatListNumberedIcon fontSize="small" />
					</div>
					<div className="mr-1 flex h-10 w-10 cursor-pointer items-center rounded-full object-cover">
						<img
							src={me}
							alt="Kamasah Dickson"
							className="h-full w-full rounded-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
