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
    <Card className="border border-border bg-card shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold text-card-foreground">{title}</CardTitle>
        {!alwaysVisible && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            className="text-muted-foreground hover:text-foreground"
          >
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            <span className="ml-1 text-xs">{isOpen ? "Hide" : "Show"}</span>
          </Button>
        )}
      </CardHeader>
      {isOpen && (
        <CardContent className="pt-0">
          {children}
        </CardContent>
      )}
    </Card>
  );
};

export default ToggleChartCard;
