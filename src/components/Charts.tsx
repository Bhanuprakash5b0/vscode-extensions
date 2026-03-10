import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  LineChart, Line, PieChart, Pie, Cell, Treemap,
} from "recharts";

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

const COLORS = ["#3b82f6", "#ef4444", "#10b981", "#a855f7", "#f97316", "#06b6d4", "#ec4899", "#84cc16"];

const formatDownloads = (value: number) => {
  if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `${(value / 1e6).toFixed(0)}M`;
  if (value >= 1e3) return `${(value / 1e3).toFixed(0)}K`;
  return value.toString();
};

export const TopExtensionsChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={topExtensionsData} layout="vertical" margin={{ left: 100, right: 30 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,88%)" />
      <XAxis type="number" tickFormatter={formatDownloads} fontSize={12} />
      <YAxis type="category" dataKey="name" fontSize={11} width={95} />
      <Tooltip formatter={(value: number) => [formatDownloads(value), "Downloads"]} />
      <Bar dataKey="downloads" fill="hsl(217,91%,50%)" radius={[0, 4, 4, 0]} />
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
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,88%)" />
      <XAxis dataKey="year" fontSize={12} />
      <YAxis fontSize={12} />
      <Tooltip />
      <Line type="monotone" dataKey="count" stroke="hsl(217,91%,50%)" strokeWidth={2} dot={{ r: 4, fill: "hsl(217,91%,50%)" }} name="Extensions Released" />
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
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={categoryData} margin={{ left: 120, right: 30 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,88%)" />
      <XAxis type="number" fontSize={12} />
      <YAxis type="category" dataKey="name" fontSize={11} width={115} />
      <Tooltip />
      <Bar dataKey="value" radius={[0, 4, 4, 0]} name="Extensions">
        {categoryData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie data={publisherData} cx="50%" cy="50%" outerRadius={110} dataKey="downloads" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`} fontSize={12}>
        {publisherData.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value: number) => [formatDownloads(value), "Downloads"]} />
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
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie data={aiData} cx="50%" cy="50%" outerRadius={100} innerRadius={50} dataKey="value" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`} fontSize={12}>
        <Cell fill="hsl(217,91%,50%)" />
        <Cell fill="hsl(160,60%,45%)" />
      </Pie>
      <Tooltip />
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
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,88%)" />
      <XAxis type="number" fontSize={12} />
      <YAxis type="category" dataKey="name" fontSize={11} width={95} />
      <Tooltip />
      <Bar dataKey="reviews" fill="hsl(160,60%,45%)" radius={[0, 4, 4, 0]} name="Reviews" />
    </BarChart>
  </ResponsiveContainer>
);

// ---- Downloads vs Reviews Scatter ----
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
    <BarChart data={scatterData} margin={{ left: 100, right: 30 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,13%,88%)" />
      <XAxis dataKey="name" fontSize={11} angle={-20} textAnchor="end" height={60} />
      <YAxis yAxisId="left" orientation="left" fontSize={12} label={{ value: "Downloads (M)", angle: -90, position: "insideLeft" }} />
      <YAxis yAxisId="right" orientation="right" fontSize={12} label={{ value: "Reviews", angle: 90, position: "insideRight" }} />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="downloads" fill="hsl(217,91%,50%)" name="Downloads (M)" radius={[4, 4, 0, 0]} />
      <Bar yAxisId="right" dataKey="reviews" fill="hsl(270,67%,67%)" name="Reviews" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);
