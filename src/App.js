import './App.css';
import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';

// Sample chart data
const pdata = [
	{
		date: '15 Feb',
		student: 11,
		value: 55
	},
	{
		date: '18 Feb',
		student: 15,
		value: 70
	},
	{
		date: '21 Feb',
		student: 5,
		value: 85
	},
	{
		date: '24 Feb',
		student: 10,
		value: 100
	},
	{
		date: '27 Feb',
		student: 9,
		value: 115
	},
	{
		date: '30 Feb',
		student: 10,
		value: 130
	},
];

function App() {
	return (
		<>
			<h1 className="text-heading">
				APR History
			</h1>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={pdata} margin={{ right: 300 }}>
					<CartesianGrid />
					<XAxis dataKey="date"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
			
					<Line dataKey="value"
						stroke="red" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

export default App;
