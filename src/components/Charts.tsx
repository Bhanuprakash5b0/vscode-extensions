import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  LineChart, Line, PieChart, Pie, Cell,
} from "recharts";

const BLUE_PALETTE = [
  "#3b82f6", "#60a5fa", "#2563eb", "#38bdf8", "#0ea5e9",
  "#06b6d4", "#0891b2", "#7dd3fc", "#93c5fd", "#1d4ed8",
  "#818cf8", "#a5b4fc",
];

const GRID_COLOR = "hsl(210,30%,88%)";

const formatDownloads = (value: number) => {
  if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `${(value / 1e6).toFixed(0)}M`;
  if (value >= 1e3) return `${(value / 1e3).toFixed(0)}K`;
  return value.toString();
};

const customTooltipStyle = {
  backgroundColor: "hsl(210,50%,99%)",
  border: "1px solid hsl(210,30%,85%)",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(148,180,214,0.15)",
  fontSize: "12px",
};

// ---- Top Extensions by Downloads ----
const topExtensionsData = [
  { name: "Python", downloads: 191868922, publisher: "Microsoft" },
  { name: "Pylance", downloads: 159723850, publisher: "Microsoft" },
  { name: "Jupyter", downloads: 97904194, publisher: "Microsoft" },
  { name: "Python Debugger", downloads: 97177985, publisher: "Microsoft" },
  { name: "C/C++", downloads: 90573086, publisher: "Microsoft" },
  { name: "Jupyter Keymap", downloads: 77742068, publisher: "Microsoft" },
  { name: "Live Server", downloads: 70873297, publisher: "Ritwick Dey" },
  { name: "Prettier", downloads: 62779089, publisher: "Prettier" },
  { name: "GitHub Copilot", downloads: 58940446, publisher: "GitHub" },
  { name: "IntelliCode", downloads: 59951008, publisher: "Microsoft" },
];

export const TopExtensionsChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={topExtensionsData} layout="vertical" margin={{ left: 100, right: 30 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
      <XAxis type="number" tickFormatter={formatDownloads} fontSize={12} stroke="hsl(215,15%,48%)" />
      <YAxis type="category" dataKey="name" fontSize={11} width={95} stroke="hsl(215,15%,48%)" />
      <Tooltip formatter={(value: number) => [formatDownloads(value), "Downloads"]} contentStyle={customTooltipStyle} />
      <Bar dataKey="downloads" radius={[0, 6, 6, 0]}>
        {topExtensionsData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={BLUE_PALETTE[index % BLUE_PALETTE.length]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

// ---- Trend of Extension Releases ----
const trendData = [
  { year: 2015, count: 259 },
  { year: 2016, count: 814 },
  { year: 2017, count: 1236 },
  { year: 2018, count: 1285 },
  { year: 2019, count: 1400 },
  { year: 2020, count: 1441 },
  { year: 2021, count: 1199 },
  { year: 2022, count: 815 },
  { year: 2023, count: 628 },
  { year: 2024, count: 330 },
  { year: 2025, count: 131 },
];

export const TrendChart = () => (
  <ResponsiveContainer width="100%" height={350}>
    <LineChart data={trendData} margin={{ left: 10, right: 30 }}>
      <defs>
        <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.15} />
          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
      <XAxis dataKey="year" fontSize={12} stroke="hsl(215,15%,48%)" />
      <YAxis fontSize={12} stroke="hsl(215,15%,48%)" />
      <Tooltip contentStyle={customTooltipStyle} />
      <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2.5} dot={{ r: 5, fill: "#3b82f6", strokeWidth: 2, stroke: "#dbeafe" }} activeDot={{ r: 7, fill: "#2563eb" }} name="Extensions Released" fill="url(#trendGradient)" />
    </LineChart>
  </ResponsiveContainer>
);

// ---- Distribution by Category (always visible) ----
const categoryData = [
  { name: "Programming Languages", value: 3200 },
  { name: "Snippets", value: 1800 },
  { name: "Linters", value: 1100 },
  { name: "Debuggers", value: 950 },
  { name: "Themes", value: 870 },
  { name: "Formatters", value: 620 },
  { name: "Extension Packs", value: 480 },
  { name: "Data Science", value: 410 },
  { name: "Machine Learning", value: 350 },
  { name: "Testing", value: 290 },
  { name: "Education", value: 210 },
  { name: "AI/Chat", value: 180 },
];

export const CategoryDistributionChart = () => (
  <ResponsiveContainer width="100%" height={420}>
    <BarChart data={categoryData} layout="vertical" margin={{ left: 130, right: 30 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
      <XAxis type="number" fontSize={12} stroke="hsl(215,15%,48%)" />
      <YAxis type="category" dataKey="name" fontSize={11} width={125} stroke="hsl(215,15%,48%)" />
      <Tooltip contentStyle={customTooltipStyle} />
      <Bar dataKey="value" radius={[0, 6, 6, 0]} name="Extensions">
        {categoryData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={BLUE_PALETTE[index % BLUE_PALETTE.length]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

// ---- Top Publishers by Total Downloads ----
const publisherData = [
  { name: "Microsoft", downloads: 1069993609 },
  { name: "Ritwick Dey", downloads: 70873297 },
  { name: "Prettier", downloads: 62779089 },
  { name: "GitHub", downloads: 58940446 },
];

export const TopPublishersChart = () => (
  <ResponsiveContainer width="100%" height={320}>
    <PieChart>
      <Pie data={publisherData} cx="50%" cy="50%" outerRadius={110} innerRadius={45} dataKey="downloads" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`} fontSize={12} stroke="hsl(210,50%,99%)" strokeWidth={2}>
        {publisherData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={BLUE_PALETTE[index]} />
        ))}
      </Pie>
      <Tooltip formatter={(value: number) => [formatDownloads(value), "Downloads"]} contentStyle={customTooltipStyle} />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

// ---- AI vs Non-AI Extensions ----
const aiData = [
  { name: "Non-AI", value: 8200 },
  { name: "AI-Powered", value: 1338 },
];

export const AiVsNonAiChart = () => (
  <ResponsiveContainer width="100%" height={320}>
    <PieChart>
      <Pie data={aiData} cx="50%" cy="50%" outerRadius={100} innerRadius={50} dataKey="value" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`} fontSize={12} stroke="hsl(210,50%,99%)" strokeWidth={2}>
        <Cell fill="#3b82f6" />
        <Cell fill="#06b6d4" />
      </Pie>
      <Tooltip contentStyle={customTooltipStyle} />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

// ---- Extensions with Highest Reviews ----
const reviewData = [
  { name: "Python", reviews: 1250 },
  { name: "C/C++", reviews: 980 },
  { name: "Live Server", reviews: 870 },
  { name: "Prettier", reviews: 760 },
  { name: "GitHub Copilot", reviews: 720 },
  { name: "Pylance", reviews: 650 },
  { name: "IntelliCode", reviews: 580 },
  { name: "Jupyter", reviews: 520 },
];

export const HighestReviewsChart = () => (
  <ResponsiveContainer width="100%" height={350}>
    <BarChart data={reviewData} layout="vertical" margin={{ left: 100, right: 30 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
      <XAxis type="number" fontSize={12} stroke="hsl(215,15%,48%)" />
      <YAxis type="category" dataKey="name" fontSize={11} width={95} stroke="hsl(215,15%,48%)" />
      <Tooltip contentStyle={customTooltipStyle} />
      <Bar dataKey="reviews" radius={[0, 6, 6, 0]} name="Reviews">
        {reviewData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={BLUE_PALETTE[index % BLUE_PALETTE.length]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

// ---- Downloads vs Reviews ----
const scatterData = [
  { name: "Python", downloads: 191, reviews: 1250 },
  { name: "Pylance", downloads: 159, reviews: 650 },
  { name: "Jupyter", downloads: 97, reviews: 520 },
  { name: "C/C++", downloads: 90, reviews: 980 },
  { name: "Live Server", downloads: 70, reviews: 870 },
  { name: "Prettier", downloads: 62, reviews: 760 },
  { name: "GitHub Copilot", downloads: 58, reviews: 720 },
  { name: "IntelliCode", downloads: 59, reviews: 580 },
];

export const DownloadsVsReviewsChart = () => (
  <ResponsiveContainer width="100%" height={350}>
    <BarChart data={scatterData} margin={{ left: 20, right: 20 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
      <XAxis dataKey="name" fontSize={11} angle={-20} textAnchor="end" height={60} stroke="hsl(215,15%,48%)" />
      <YAxis yAxisId="left" orientation="left" fontSize={12} stroke="hsl(215,15%,48%)" label={{ value: "Downloads (M)", angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "hsl(215,15%,48%)" } }} />
      <YAxis yAxisId="right" orientation="right" fontSize={12} stroke="hsl(215,15%,48%)" label={{ value: "Reviews", angle: 90, position: "insideRight", style: { fontSize: 11, fill: "hsl(215,15%,48%)" } }} />
      <Tooltip contentStyle={customTooltipStyle} />
      <Legend />
      <Bar yAxisId="left" dataKey="downloads" fill="#3b82f6" name="Downloads (M)" radius={[4, 4, 0, 0]} />
      <Bar yAxisId="right" dataKey="reviews" fill="#60a5fa" name="Reviews" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);
