import { Card, CardContent } from "@/components/ui/card.jsx";
import { Download, Package, Users, TrendingUp } from "lucide-react";

const KpiCard = ({ title, value, subtitle, icon }) => (
  <Card className="border border-kpi-border bg-card shadow-kpi hover:shadow-card-hover transition-shadow duration-200">
    <CardContent className="p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
        <div className="h-9 w-9 rounded-lg bg-kpi-icon-bg flex items-center justify-center text-primary">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold text-card-foreground tracking-tight">{value}</p>
      <p className="text-xs text-muted-foreground mt-1.5">{subtitle}</p>
    </CardContent>
  </Card>
);

const KpiCards = () => {
  const kpis = [
    {
      title: "Total Downloads",
      value: "1.46B+",
      subtitle: "Across top 15 extensions",
      icon: <Download className="h-4 w-4" />,
    },
    {
      title: "Extensions Tracked",
      value: "9,538",
      subtitle: "Released from 2015–2025",
      icon: <Package className="h-4 w-4" />,
    },
    {
      title: "Top Publisher",
      value: "Microsoft",
      subtitle: "12 of top 15 extensions",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Peak Year",
      value: "2020",
      subtitle: "1,441 extensions released",
      icon: <TrendingUp className="h-4 w-4" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi) => (
        <KpiCard key={kpi.title} {...kpi} />
      ))}
    </div>
  );
};

export default KpiCards;
