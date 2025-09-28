import { useState } from "react";

import { Users, Clock, IndianRupee } from "lucide-react";
 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface WorkersData {
  totalWorkers: string;
  maleWorkers: string;
  femaleWorkers: string;
  skilledWorkers: string;
  unskilledWorkers: string;
  workingHours: string;
  shiftsPerDay: string;
  workingDays: string;
  averageSalary: string;
  minimumWage: string;
  maximumWage: string;
  benefitsProvided: string;
  safetyTraining: string;
  workEnvironment: string;
}

interface WorkersFormProps {
  onComplete: (data: WorkersData) => void;
  initialData?: Partial<WorkersData>;
}

export function WorkersForm({ onComplete, initialData = {} }: WorkersFormProps) {
  const [formData, setFormData] = useState<WorkersData>({
    totalWorkers: initialData.totalWorkers || "",
    maleWorkers: initialData.maleWorkers || "",
    femaleWorkers: initialData.femaleWorkers || "",
    skilledWorkers: initialData.skilledWorkers || "",
    unskilledWorkers: initialData.unskilledWorkers || "",
    workingHours: initialData.workingHours || "",
    shiftsPerDay: initialData.shiftsPerDay || "",
    workingDays: initialData.workingDays || "",
    averageSalary: initialData.averageSalary || "",
    minimumWage: initialData.minimumWage || "",
    maximumWage: initialData.maximumWage || "",
    benefitsProvided: initialData.benefitsProvided || "",
    safetyTraining: initialData.safetyTraining || "",
    workEnvironment: initialData.workEnvironment || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const requiredFields = ['totalWorkers', 'workingHours', 'shiftsPerDay', 'workingDays', 'averageSalary'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof WorkersData]);
    
    if (missingFields.length > 0) {
      alert("Missing Information\nPlease fill in all required fields.");
      return;
    }

    const totalWorkers = parseInt(formData.totalWorkers);
    const maleWorkers = parseInt(formData.maleWorkers) || 0;
    const femaleWorkers = parseInt(formData.femaleWorkers) || 0;

    if (maleWorkers + femaleWorkers > totalWorkers) {
      alert("Invalid Data\nMale + Female workers cannot exceed total workers.");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Worker Information Saved\nYour worker details have been successfully saved.");
      onComplete(formData);
    }, 1000);
  };

  const handleChange = (field: keyof WorkersData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card >
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-primary" />
          <span>Worker Information</span>
        </CardTitle>
        <CardDescription>
          Provide details about your workforce and working conditions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Worker Count Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Workforce Composition</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="totalWorkers">Total Workers *</Label>
                <Input
                  id="totalWorkers"
                  type="number"
                  value={formData.totalWorkers}
                  onChange={(e) => handleChange("totalWorkers", e.target.value)}
                  placeholder="Enter total number"
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maleWorkers">Male Workers</Label>
                <Input
                  id="maleWorkers"
                  type="number"
                  value={formData.maleWorkers}
                  onChange={(e) => handleChange("maleWorkers", e.target.value)}
                  placeholder="Number of male workers"
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="femaleWorkers">Female Workers</Label>
                <Input
                  id="femaleWorkers"
                  type="number"
                  value={formData.femaleWorkers}
                  onChange={(e) => handleChange("femaleWorkers", e.target.value)}
                  placeholder="Number of female workers"
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="skilledWorkers">Skilled Workers</Label>
                <Input
                  id="skilledWorkers"
                  type="number"
                  value={formData.skilledWorkers}
                  onChange={(e) => handleChange("skilledWorkers", e.target.value)}
                  placeholder="Number of skilled workers"
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="unskilledWorkers">Unskilled Workers</Label>
                <Input
                  id="unskilledWorkers"
                  type="number"
                  value={formData.unskilledWorkers}
                  onChange={(e) => handleChange("unskilledWorkers", e.target.value)}
                  placeholder="Number of unskilled workers"
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
            </div>
          </div>

          {/* Working Hours Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Working Hours & Schedule</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="workingHours">Working Hours/Day *</Label>
                <Select value={formData.workingHours} onValueChange={(value) => handleChange("workingHours", value)}>
                  <SelectTrigger className="transition-smooth focus:shadow-hover">
                    <SelectValue placeholder="Select hours" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="8">8 Hours</SelectItem>
                    <SelectItem value="9">9 Hours</SelectItem>
                    <SelectItem value="10">10 Hours</SelectItem>
                    <SelectItem value="12">12 Hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="shiftsPerDay">Shifts per Day *</Label>
                <Select value={formData.shiftsPerDay} onValueChange={(value) => handleChange("shiftsPerDay", value)}>
                  <SelectTrigger className="transition-smooth focus:shadow-hover">
                    <SelectValue placeholder="Select shifts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Shift</SelectItem>
                    <SelectItem value="2">2 Shifts</SelectItem>
                    <SelectItem value="3">3 Shifts</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="workingDays">Working Days/Week *</Label>
                <Select value={formData.workingDays} onValueChange={(value) => handleChange("workingDays", value)}>
                  <SelectTrigger className="transition-smooth focus:shadow-hover">
                    <SelectValue placeholder="Select days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 Days</SelectItem>
                    <SelectItem value="6">6 Days</SelectItem>
                    <SelectItem value="7">7 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Salary Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
              <IndianRupee className="h-5 w-5" />
              <span>Salary Information</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="averageSalary">Average Monthly Salary *</Label>
                <Input
                  id="averageSalary"
                  type="number"
                  value={formData.averageSalary}
                  onChange={(e) => handleChange("averageSalary", e.target.value)}
                  placeholder="₹ Average salary"
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minimumWage">Minimum Wage</Label>
                <Input
                  id="minimumWage"
                  type="number"
                  value={formData.minimumWage}
                  onChange={(e) => handleChange("minimumWage", e.target.value)}
                  placeholder="₹ Minimum wage"
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maximumWage">Maximum Wage</Label>
                <Input
                  id="maximumWage"
                  type="number"
                  value={formData.maximumWage}
                  onChange={(e) => handleChange("maximumWage", e.target.value)}
                  placeholder="₹ Maximum wage"
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
            </div>
          </div>

          {/* Benefits and Environment */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="benefitsProvided">Benefits Provided to Workers</Label>
              <Textarea
                id="benefitsProvided"
                value={formData.benefitsProvided}
                onChange={(e) => handleChange("benefitsProvided", e.target.value)}
                placeholder="List benefits like PF, ESI, medical insurance, bonus, etc."
                className="min-h-[80px] transition-smooth focus:shadow-hover"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="safetyTraining">Safety Training Programs</Label>
              <Textarea
                id="safetyTraining"
                value={formData.safetyTraining}
                onChange={(e) => handleChange("safetyTraining", e.target.value)}
                placeholder="Describe safety training and protocols"
                className="min-h-[80px] transition-smooth focus:shadow-hover"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="workEnvironment">Work Environment Description</Label>
              <Textarea
                id="workEnvironment"
                value={formData.workEnvironment}
                onChange={(e) => handleChange("workEnvironment", e.target.value)}
                placeholder="Describe working conditions, facilities, etc."
                className="min-h-[80px] transition-smooth focus:shadow-hover"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full  hover:shadow-hover transition-smooth"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Worker Information"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}