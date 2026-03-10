import KpiCards from "@/components/KpiCards";
import ToggleChartCard from "@/components/ToggleChartCard";
import {
  TopExtensionsChart,
  TrendChart,
  CategoryDistributionChart,
  TopPublishersChart,
  AiVsNonAiChart,
  HighestReviewsChart,
  DownloadsVsReviewsChart,
} from "@/components/Charts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-6 py-4">
        <h1 className="text-xl font-bold text-foreground">VS Code Extensions Analytics</h1>
        <p className="text-sm text-muted-foreground">Insights from the VS Code Marketplace dataset</p>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <KpiCards />

        {/* Always visible */}
        <ToggleChartCard title="Distribution of VS Code Extensions by Category" alwaysVisible>
          <CategoryDistributionChart />
        </ToggleChartCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ToggleChartCard title="Top Extensions by Downloads">
            <TopExtensionsChart />
          </ToggleChartCard>

          <ToggleChartCard title="Trend of Extension Releases Over Years">
            <TrendChart />
          </ToggleChartCard>

          <ToggleChartCard title="Top Publishers by Total Downloads">
            <TopPublishersChart />
          </ToggleChartCard>

          <ToggleChartCard title="AI vs Non-AI Extensions">
            <AiVsNonAiChart />
          </ToggleChartCard>

          <ToggleChartCard title="Extensions with Highest User Reviews">
            <HighestReviewsChart />
          </ToggleChartCard>

          <ToggleChartCard title="Downloads vs Reviews Relationship">
            <DownloadsVsReviewsChart />
          </ToggleChartCard>
        </div>
      </main>
    </div>
  );
};

export default Index;
