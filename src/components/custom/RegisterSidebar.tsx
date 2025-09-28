import { Building, FileCheck, Users, UserCheck } from "lucide-react";
import { cn } from "../../lib/utils";


interface RegistrationSidebarProps {
  currentStep: number;
  completedSteps: number[];
  onStepClick: (step: number) => void;
}

const steps = [
  {
    id: 1,
    title: "Organization Info",
    description: "Basic company details",
    icon: Building,
  },
  {
    id: 2,
    title: "Certificates",
    description: "Upload certifications",
    icon: FileCheck,
  },
  {
    id: 3,
    title: "Worker Information",
    description: "Staff and operations",
    icon: Users,
  },
  {
    id: 4,
    title: "Manager Details",
    description: "Management information",
    icon: UserCheck,
  },
];

export function RegistrationSidebar({ currentStep, completedSteps, onStepClick }: RegistrationSidebarProps) {
  const getStepStatus = (stepId: number) => {
    if (completedSteps.includes(stepId)) return "completed";
    if (stepId === currentStep) return "current";
    return "pending";
  };

  const getStepStyles = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success text-success-foreground border-success";
      case "current":
        return "bg-gradient-primary text-primary-foreground border-primary shadow-elegant";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="w-80 bg-gradient-card shadow-card rounded-xl p-6 h-fit">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-2">Registration Steps</h2>
        <p className="text-sm text-muted-foreground">Complete all steps to finish registration</p>
      </div>

      <div className="space-y-4 text-black">
        {steps.map((step, index) => {
          const status = getStepStatus(step.id);
          const Icon = step.icon;
          const isClickable = completedSteps.includes(step.id) || step.id === currentStep;

          return (
            <div key={step.id} className="relative">
            
              
              <button
                onClick={() => isClickable && onStepClick(step.id)}
                disabled={!isClickable}
                className={cn(
                  "w-full p-4 rounded-lg border-2 transition-all duration-300 text-left",
                  getStepStyles(status),
                  isClickable ? "hover:shadow-hover cursor-pointer" : "cursor-not-allowed opacity-60"
                )}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
                      getStepStyles(status)
                    )}
                  >
                    <Icon className="h-6 w-6 text-black" />
                  </div>
                  <div className="flex-1 text-black">
                    <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                    <p className="text-xs opacity-90">{step.description}</p>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-accent rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-accent-foreground">Overall Progress</span>
          <span className="text-sm font-bold text-accent-foreground">
            {Math.round((completedSteps.length / steps.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-background rounded-full h-2">
          <div
            className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${(completedSteps.length / steps.length) * 100}%` }}
          />
        </div>
        <p className="text-xs text-accent-foreground/70 mt-2">
          {completedSteps.length} of {steps.length} steps completed
        </p>
      </div>
    </div>
  );
}