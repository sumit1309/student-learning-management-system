import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
const data = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 40 },
  { name: "Mar", value: 60 },
  { name: "Apr", value: 50 },
  { name: "May", value: 80 }
];
function Chart() {
  return (
    <LineChart width={400} height={200} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="value" />
    </LineChart>
  );
}

export default Chart;