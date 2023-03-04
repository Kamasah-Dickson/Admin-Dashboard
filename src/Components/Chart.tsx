import {
	AreaChart,
	Area,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "January",
		Total: 6500,
	},
	{
		name: "February",
		Total: 2100,
	},
	{
		name: "March",
		Total: 5300,
	},
	{
		name: "April",
		Total: 2200,
	},
	{
		name: "May",
		Total: 2700,
	},
];

type aspectRatio = number;

interface aspectProp {
	aspect: aspectRatio;
	title: string;
}

function Chart({ aspect, title }: aspectProp) {
	return (
		<div className="flex-[4] shadow-md">
			<div className="p-2 text-lg text-[gray]">{title}</div>
			<ResponsiveContainer width="100%" aspect={aspect}>
				<AreaChart
					width={730}
					height={250}
					data={data}
					margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
							<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
						</linearGradient>
					</defs>
					<XAxis dataKey="name" stroke="gray" />
					<CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
					<Tooltip />
					<Area
						type="monotone"
						dataKey="Total"
						stroke="#8884d8"
						fillOpacity={1}
						fill="url(#total)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}

export default Chart;
