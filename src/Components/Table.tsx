import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Tables() {
	const rows = [
		{
			id: 1001,
			product: "iPhone 13",
			img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
			customer: "John Doe",
			date: "2022-09-20",
			amount: 1200,
			status: "Pending",
			method: "Credit Card",
		},
		{
			id: 1002,
			product: "MacBook Pro",
			img: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
			customer: "Jane Doe",
			date: "2022-08-15",
			amount: 2500,
			status: "Approved",
			method: "PayPal",
		},
		{
			id: 1003,
			product: "Samsung Galaxy S",
			img: "https://images.unsplash.com/photo-1588731247530-4076fc99173e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
			customer: "Bob Smith",
			date: "2022-07-05",
			amount: 800,
			status: "Approved",
			method: "Debit Card",
		},
		{
			id: 1004,
			product: "iPad Air",
			img: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80",
			customer: "Sara Johnson",
			date: "2022-11-02",
			amount: 900,
			status: "Pending",
			method: "Bank Transfer",
		},
		{
			id: 1005,
			product: "Sony PlayStation 5",
			img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
			customer: "David Brown",
			date: "2022-12-18",
			amount: 499,
			status: "Pending",
			method: "Credit Card",
		},
		{
			id: 1006,
			product: "Nintendo Switch",
			img: "https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
			customer: "Laura Wilson",
			date: "2022-10-30",
			amount: 299,
			status: "Approved",
			method: "PayPal",
		},
		{
			id: 1007,
			product: "Dell XPS 13",
			img: "https://images.unsplash.com/photo-1576110598658-096ae24cdb97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
			customer: "Mark Taylor",
			date: "2022-06-11",
			amount: 1599,
			status: "Approved",
			method: "Debit Card",
		},
		{
			id: 1008,
			product: "Bose QuietComfort 35 II",
			img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
			customer: "Emily Davis",
			date: "2022-11-27",
			amount: 349,
			status: "Pending",
			method: "Credit Card",
		},
		{
			id: 1009,
			product: "Amazon Echo Dot",
			img: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
			customer: "Alex Johnson",
			date: "2022-10-02",
			amount: 49,
			status: "Approved",
			method: "PayPal",
		},
	];

	return (
		<TableContainer component={Paper} className="my-5">
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Tracking ID</TableCell>
						<TableCell>Product</TableCell>
						<TableCell>Customer</TableCell>
						<TableCell>Date</TableCell>
						<TableCell>Amount</TableCell>
						<TableCell>Payment Method</TableCell>
						<TableCell>Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.id}</TableCell>
							<TableCell>{row.product}</TableCell>
							<TableCell>
								<div className="flex items-center justify-start">
									<div className="mr-3 h-[35px] w-[35px]">
										<img
											className="mr-3 h-full w-full rounded-full object-cover"
											src={row.img}
											alt={row.customer}
										/>
									</div>
									<p>{row.customer}</p>
								</div>
							</TableCell>
							<TableCell>{row.date}</TableCell>
							<TableCell>{row.amount}</TableCell>
							<TableCell>{row.method}</TableCell>
							<TableCell>
								<span
									style={
										row.status === "Pending"
											? {
													color: "goldenrod",
													backgroundColor: "rgba(189,189,3,0.103)",
													padding: "5px",
													borderRadius: "5px",
											  }
											: {
													color: "green",
													backgroundColor: "rgba(0,128,0,0.151)",
													padding: "5px",
													borderRadius: "5px",
											  }
									}
								>
									{row.status}
								</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default Tables;
