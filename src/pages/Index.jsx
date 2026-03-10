import KpiCards from "@/components/KpiCards.jsx";
import ToggleChartCard from "@/components/ToggleChartCard.jsx";
import {
  TopExtensionsChart,
  TrendChart,
  CategoryDistributionChart,
  TopPublishersChart,
  AiVsNonAiChart,
  HighestReviewsChart,
  DownloadsVsReviewsChart,
} from "@/components/Charts.jsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-header-border bg-header-bg px-6 py-5 shadow-header">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-bold text-foreground tracking-tight">📊 VS Code Extensions Analytics</h1>
          <p className="text-sm text-muted-foreground mt-0.5">Insights from the VS Code Marketplace dataset</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        <KpiCards />

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
