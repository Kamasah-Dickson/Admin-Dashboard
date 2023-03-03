import Datatable from "../../Components/Datatable";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

function List() {
	return (
		<div className="flex w-full">
			<Sidebar />
			<div className="flex-[6]">
				<Navbar />
				<Datatable />
			</div>
		</div>
	);
}

export default List;
