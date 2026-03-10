import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area,
} from "recharts";

const GRID_COLOR = "hsl(210,30%,88%)";

const PALETTES = {
  ocean: ["#0ea5e9", "#38bdf8", "#7dd3fc", "#0284c7", "#0369a1", "#bae6fd", "#075985", "#e0f2fe", "#0c4a6e", "#67e8f9"],
  sunset: ["#f97316", "#fb923c", "#fdba74", "#ea580c", "#c2410c", "#fed7aa", "#9a3412", "#ffedd5", "#f59e0b", "#fbbf24"],
  forest: ["#10b981", "#34d399", "#6ee7b7", "#059669", "#047857", "#a7f3d0", "#065f46", "#d1fae5", "#14b8a6", "#2dd4bf"],
  berry: ["#8b5cf6", "#a78bfa", "#c4b5fd", "#7c3aed", "#6d28d9", "#ddd6fe", "#5b21b6", "#ede9fe", "#a855f7", "#c084fc"],
  coral: ["#f43f5e", "#fb7185", "#fda4af", "#e11d48", "#be123c", "#fecdd3", "#9f1239", "#ffe4e6", "#ef4444", "#f87171"],
  teal: ["#14b8a6", "#2dd4bf", "#5eead4", "#0d9488", "#0f766e", "#99f6e4", "#115e59", "#ccfbf1", "#06b6d4", "#22d3ee"],
};

const formatDownloads = (value) => {
  if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
  if (value >= 1e6) return `${(value / 1e6).toFixed(0)}M`;
  if (value >= 1e3) return `${(value / 1e3).toFixed(0)}K`;
  return value.toString();
};

const tooltipStyle = (bg, border) => ({
  backgroundColor: bg,
  border: `1px solid ${border}`,
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  fontSize: "12px",
});

const topExtensionsData = [
  { name: "Python", downloads: 191868922 },
  { name: "Pylance", downloads: 159723850 },
  { name: "Jupyter", downloads: 97904194 },
  { name: "Python Debugger", downloads: 97177985 },
  { name: "C/C++", downloads: 90573086 },
  { name: "Jupyter Keymap", downloads: 77742068 },
  { name: "Live Server", downloads: 70873297 },
  { name: "Prettier", downloads: 62779089 },
  { name: "GitHub Copilot", downloads: 58940446 },
  { name: "IntelliCode", downloads: 59951008 },
];

export const TopExtensionsChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={topExtensionsData} layout="vertical" margin={{ left: 100, right: 30 }}>
      <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
      <XAxis type="number" tickFormatter={formatDownloads} fontSize={12} stroke="#64748b" />
      <YAxis type="category" dataKey="name" fontSize={11} width={95} stroke="#64748b" />
      <Tooltip formatter={(value) => [formatDownloads(value), "Downloads"]} contentStyle={tooltipStyle("#f0f9ff", "#bae6fd")} />
      <Bar dataKey="downloads" radius={[0, 6, 6, 0]}>
        {topExtensionsData.map((_, i) => (
          <Cell key={i} fill={PALETTES.ocean[i % PALETTES.ocean.length]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

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
    <AreaChart data={trendData} margin={{ left: 10, right: 30 }}>
      <defs>
        <linearGradient id="sunsetGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
          <stop offset="95%" stopColor="#f97316" stopOpacity={0.02} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
      <XAxis dataKey="year" fontSize={12} stroke="#64748b" />
      <YAxis fontSize={12} stroke="#64748b" />
      <Tooltip contentStyle={tooltipStyle("#fff7ed", "#fed7aa")} />
      <Area type="monotone" dataKey="count" stroke="#f97316" strokeWidth={2.5} fill="url(#sunsetGrad)" dot={{ r: 5, fill: "#f97316", strokeWidth: 2, stroke: "#ffedd5" }} activeDot={{ r: 7, fill: "#ea580c" }} name="Extensions Released" />
    </AreaChart>
  </ResponsiveContainer>
);

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
      <XAxis type="number" fontSize={12} stroke="#64748b" />
      <YAxis type="category" dataKey="name" fontSize={11} width={125} stroke="#64748b" />
      <Tooltip contentStyle={tooltipStyle("#ecfdf5", "#a7f3d0")} />
      <Bar dataKey="value" radius={[0, 6, 6, 0]} name="Extensions">
        {categoryData.map((_, i) => (
          <Cell key={i} fill={PALETTES.forest[i % PALETTES.forest.length]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

const publisherData = [
  { name: "Microsoft", downloads: 1069993609 },
  { name: "Ritwick Dey", downloads: 70873297 },
  { name: "Prettier", downloads: 62779089 },
  { name: "GitHub", downloads: 58940446 },
];

export const TopPublishersChart = () => (
  <ResponsiveContainer width="100%" height={320}>
    <PieChart>
      <Pie data={publisherData} cx="50%" cy="50%" outerRadius={110} innerRadius={50} dataKey="downloads" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`} fontSize={12} stroke="#faf5ff" strokeWidth={3}>
        {publisherData.map((_, i) => (
          <Cell key={i} fill={PALETTES.berry[i]} />
        ))}
      </Pie>
      <Tooltip formatter={(value) => [formatDownloads(value), "Downloads"]} contentStyle={tooltipStyle("#faf5ff", "#ddd6fe")} />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

const aiData = [
  { name: "Non-AI", value: 8200 },
  { name: "AI-Powered", value: 1338 },
];

export const AiVsNonAiChart = () => (
  <ResponsiveContainer width="100%" height={320}>
    <PieChart>
      <Pie data={aiData} cx="50%" cy="50%" outerRadius={100} innerRadius={55} dataKey="value" nameKey="name" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`} fontSize={12} stroke="#fff1f2" strokeWidth={3}>
        <Cell fill="#f43f5e" />
        <Cell fill="#fda4af" />
      </Pie>
      <Tooltip contentStyle={tooltipStyle("#fff1f2", "#fecdd3")} />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

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
      <XAxis type="number" fontSize={12} stroke="#64748b" />
      <YAxis type="category" dataKey="name" fontSize={11} width={95} stroke="#64748b" />
      <Tooltip contentStyle={tooltipStyle("#f0fdfa", "#99f6e4")} />
      <Bar dataKey="reviews" radius={[0, 6, 6, 0]} name="Reviews">
        {reviewData.map((_, i) => (
          <Cell key={i} fill={PALETTES.teal[i % PALETTES.teal.length]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

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
      <XAxis dataKey="name" fontSize={11} angle={-20} textAnchor="end" height={60} stroke="#64748b" />
      <YAxis yAxisId="left" orientation="left" fontSize={12} stroke="#64748b" label={{ value: "Downloads (M)", angle: -90, position: "insideLeft", style: { fontSize: 11, fill: "#64748b" } }} />
      <YAxis yAxisId="right" orientation="right" fontSize={12} stroke="#64748b" label={{ value: "Reviews", angle: 90, position: "insideRight", style: { fontSize: 11, fill: "#64748b" } }} />
      <Tooltip contentStyle={tooltipStyle("#f8fafc", "#e2e8f0")} />
      <Legend />
      <Bar yAxisId="left" dataKey="downloads" fill="#6366f1" name="Downloads (M)" radius={[4, 4, 0, 0]} />
      <Bar yAxisId="right" dataKey="reviews" fill="#f59e0b" name="Reviews" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);
