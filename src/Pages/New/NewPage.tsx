import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

type inputs = {
	id: string;
	label: string;
	type: string;
	placeholder: string;
}[];

interface inputProp {
	inputs: inputs;
	title: string;
}

function NewPage({ title, inputs }: inputProp) {
	return (
		<div className="flex w-full">
			<Sidebar />
			<div className="flex-[6]">
				<Navbar />
				<div className="p-5">
					<div className="shadow-sm">
						<h1 className="text-2xl text-[lightgrey]">{title}</h1>
					</div>
					<div className="mt-5 flex w-full items-center justify-between p-5 shadow-md">
						<div className="flex-1">
							<div className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[grey]">
								<CameraAltIcon fontSize="large" />
							</div>
						</div>
						<div className="flex-[2]">
							<form className="flex flex-wrap justify-around gap-6">
								<div className="w-[40%]">
									<label htmlFor="file" className="cursor-pointer">
										Image: <DriveFolderUploadIcon />
									</label>
									<input className="hidden" type="file" id="file" />
								</div>
								{inputs.map((data) => {
									return (
										<div key={data.id} className="w-[40%]">
											<label htmlFor="">{data.label}</label>
											<input type={data.type} placeholder={data.placeholder} />
										</div>
									);
								})}

								<button>Send</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewPage;
