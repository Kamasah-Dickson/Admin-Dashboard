import { useState } from "react";
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

type Files = {
	onChange: (files: FileList | null) => void;
};
function NewPage({ title, inputs }: inputProp) {
	const [file, setFile] = useState<File | null>(null);
	console.log(file, typeof file);

	function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
		const newFile = event.target.files?.[0];
		if (newFile) {
			setFile(newFile);
		}
	}

	return (
		<div className="flex w-full">
			<Sidebar />
			<div className="flex-[5]">
				<Navbar />
				<div className="p-5">
					<div className="mb-2">
						<h1 className="text-2xl text-[lightgrey]">{title}</h1>
					</div>
					<div className="mx-auto mt-5 flex w-full items-center justify-between gap-3 p-5 shadow-md">
						<div className="flex-1">
							{file ? (
								<div className="mx-auto flex h-[250px] w-[250px] cursor-pointer items-center justify-center rounded-full bg-[grey]">
									<img
										className="h-full w-full rounded-full object-cover"
										src={URL.createObjectURL(file)}
										alt=""
									/>
								</div>
							) : (
								<div className="mx-auto  flex h-[250px] w-[250px] cursor-pointer items-center justify-center rounded-full bg-[grey]">
									<CameraAltIcon fontSize="large" />
								</div>
							)}
						</div>
						<div className="flex-[2]">
							<form className="flex flex-wrap justify-around gap-6">
								<div className="w-[40%]">
									<label htmlFor="file" className="cursor-pointer">
										Image: <DriveFolderUploadIcon fontSize="large" />
									</label>
									<input
										onChange={handleFileChange}
										className="hidden"
										type="file"
										id="file"
									/>
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
