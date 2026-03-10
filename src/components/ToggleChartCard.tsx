import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ToggleChartCardProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  alwaysVisible?: boolean;
}

const ToggleChartCard = ({ title, children, defaultOpen = false, alwaysVisible = false }: ToggleChartCardProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || alwaysVisible);

  return (
    <Card className="border border-kpi-border bg-card shadow-card hover:shadow-card-hover transition-all duration-200 animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between pb-2 px-5 pt-4">
        <CardTitle className="text-base font-semibold text-card-foreground">{title}</CardTitle>
        {!alwaysVisible && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="border-kpi-border bg-kpi-bg text-muted-foreground hover:bg-toggle-hover hover:text-foreground transition-colors text-xs px-3"
          >
            {isOpen ? <ChevronUp className="h-3.5 w-3.5 mr-1" /> : <ChevronDown className="h-3.5 w-3.5 mr-1" />}
            {isOpen ? "Hide" : "Show"}
          </Button>
        )}
      </CardHeader>
      {isOpen && (
        <CardContent className="pt-0 px-5 pb-5 animate-fade-in">
          {children}
        </CardContent>
      )}
    </Card>
  );
};

export default ToggleChartCard;
