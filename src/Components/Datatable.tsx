import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useLocation } from "react-router-dom";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", width: 70 },
	{ field: "firstName", headerName: "First name", width: 130 },
	{ field: "lastName", headerName: "Last name", width: 130 },
	{
		field: "age",
		headerName: "Age",
		type: "number",
		width: 90,
	},
	{
		field: "fullName",
		headerName: "Full name",
		description: "This column has a value getter and is not sortable.",
		sortable: false,
		width: 160,
		renderCell: (params) => {
			return (
				<>
					<div className="mr-3 h-[30px] w-[30px]">
						<img
							className="h-[30px] w-[30px] rounded-full object-cover"
							src={params.row.img}
							alt="avatar"
						/>
					</div>
					<span>{params.row.lastName}</span>
					<span>{params.row.age}</span>
				</>
			);
		},
	},
	{
		field: "status",
		headerName: "Status",
		width: 130,
		renderCell: (params) => {
			return (
				<span
					style={
						params.row.status === "Pending"
							? {
									color: "goldenrod",
									backgroundColor: "rgba(189,189,3,0.103)",
									padding: "3px 5px",
									borderRadius: "5px",
							  }
							: params.row.status === "active"
							? {
									color: "green",
									backgroundColor: "rgba(0,128,0,0.151)",
									padding: "3px 5px",
									borderRadius: "5px",
							  }
							: {
									color: "crimson",
									backgroundColor: "#ff003349",
									padding: "3px 5px",
									borderRadius: "5px",
							  }
					}
				>
					{params.row.status}
				</span>
			);
		},
	},
];

const rows = [
	{
		id: 1,
		lastName: "Snow",
		firstName: "Jon",
		age: 35,
		status: "active",
		img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
	},
	{
		id: 2,
		lastName: "Lannister",
		img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
		firstName: "Cersei",
		status: "passive",

		age: 42,
	},
	{
		id: 3,
		img: "https://images.unsplash.com/photo-1588731247530-4076fc99173e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		lastName: "Lannister",
		firstName: "Jaime",
		status: "active",

		age: 45,
	},
	{
		id: 4,
		img: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80",
		lastName: "Stark",
		firstName: "Arya",
		status: "Pending",
		age: 16,
	},
	{
		id: 5,
		img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
		lastName: "Targaryen",
		firstName: "Daenerys",
		status: "passive",
		age: null,
	},
	{
		id: 6,
		img: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
		lastName: "Melisandre",
		firstName: null,
		age: 150,
		status: "passive",
	},
	{
		id: 7,
		img: "https://images.unsplash.com/photo-1576110598658-096ae24cdb97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		lastName: "Clifford",
		firstName: "Ferrara",
		age: 44,
		status: "active",
	},
	{
		id: 8,
		img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		lastName: "Frances",
		firstName: "Rossini",
		age: 36,
		status: "Pending",
	},
	{
		id: 9,
		img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
		lastName: "Roxie",
		firstName: "Harvey",
		age: 65,
		status: "Pending",
	},
];

function Datatable() {
	const [data, setData] = useState(rows);
	const { pathname } = useLocation();

	function handleDelete(id: number) {
		setData(data.filter((data) => data.id !== id));
	}
	const actionColumn = [
		{
			field: "Action",
			width: 200,
			renderCell: (params: any) => {
				return (
					<div className="flex items-center gap-4">
						<Link to="/users/test">
							<div className="viewButton cursor-pointer rounded-md border-1 border-dotted border-[darkblue] py-[2px] px-[5px] text-[darkblue]">
								View
							</div>
						</Link>
						<div
							onClick={() => handleDelete(params.row.id)}
							className="deleteButton cursor-pointer rounded-md border-1 border-dotted border-[crimson] py-[2px] px-[5px] text-[crimson]"
						>
							Delete
						</div>
					</div>
				);
			},
		},
	];
	return (
		<div className="p-5">
			<div className="h-[600px]">
				<div className="mb-[10px] flex  w-full items-center justify-between">
					<h1 className="text-[20px]">Add New User</h1>
					<Link style={{ textDecoration: "none" }} to={`${pathname}/new`}>
						<p className=" rounded-lg border-1 border-[green] py-1 px-3 text-[16px] text-[green]">
							Add New
						</p>
					</Link>
				</div>
				<DataGrid
					className="data-grid"
					rows={data}
					columns={columns.concat(actionColumn)}
					checkboxSelection
				/>
			</div>
		</div>
	);
}

export default Datatable;
