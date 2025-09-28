import { useState } from "react";

import { Building, MapPin, Hash, Package } from "lucide-react";
 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface OrganizationData {
  organizationName: string;
  address: string;
  manufacturerId: string;
  productsMade: string;
  establishedYear: string;
  annualTurnover: string;
  certificationLevel: string;
  description: string;
}

interface OrganizationFormProps {
  onComplete: (data: OrganizationData) => void;
  initialData?: Partial<OrganizationData>;
}

export function OrganizationForm({ onComplete, initialData = {} }: OrganizationFormProps) {
  const [formData, setFormData] = useState<OrganizationData>({
    organizationName: initialData.organizationName || "",
    address: initialData.address || "",
    manufacturerId: initialData.manufacturerId || "",
    productsMade: initialData.productsMade || "",
    establishedYear: initialData.establishedYear || "",
    annualTurnover: initialData.annualTurnover || "",
    certificationLevel: initialData.certificationLevel || "",
    description: initialData.description || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.organizationName || !formData.address || !formData.manufacturerId || !formData.productsMade) {
      alert("Missing Information\nPlease fill in all required fields.");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Organization Information Saved\nYour organization details have been successfully saved.");
      onComplete(formData);
    }, 1000);
  };

  const handleChange = (field: keyof OrganizationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card >
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Building className="h-5 w-5 text-primary" />
          <span>Organization Information</span>
        </CardTitle>
        <CardDescription>
          Provide details about your manufacturing organization
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="organizationName">Organization Name *</Label>
              <Input
                id="organizationName"
                value={formData.organizationName}
                onChange={(e) => handleChange("organizationName", e.target.value)}
                placeholder="Enter organization name"
                className="transition-smooth focus:shadow-hover"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="manufacturerId">Manufacturer ID *</Label>
              <div className="relative">
                <Hash className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="manufacturerId"
                  value={formData.manufacturerId}
                  onChange={(e) => handleChange("manufacturerId", e.target.value)}
                  placeholder="MFG-XXXX-XXXX"
                  className="pl-10 transition-smooth focus:shadow-hover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Complete Address *</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Enter complete address with PIN code"
                className="pl-10 min-h-[80px] transition-smooth focus:shadow-hover"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="productsMade">Products Manufactured *</Label>
            <div className="relative">
              <Package className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Textarea
                id="productsMade"
                value={formData.productsMade}
                onChange={(e) => handleChange("productsMade", e.target.value)}
                placeholder="List the main products manufactured"
                className="pl-10 min-h-[80px] transition-smooth focus:shadow-hover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="establishedYear">Established Year</Label>
              <Select value={formData.establishedYear} onValueChange={(value) => handleChange("establishedYear", value)}>
                <SelectTrigger className="transition-smooth focus:shadow-hover">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map(year => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="annualTurnover">Annual Turnover</Label>
              <Select value={formData.annualTurnover} onValueChange={(value) => handleChange("annualTurnover", value)}>
                <SelectTrigger className="transition-smooth focus:shadow-hover">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1cr">₹0 - 1 Crore</SelectItem>
                  <SelectItem value="1-5cr">₹1 - 5 Crores</SelectItem>
                  <SelectItem value="5-10cr">₹5 - 10 Crores</SelectItem>
                  <SelectItem value="10-50cr">₹10 - 50 Crores</SelectItem>
                  <SelectItem value="50cr+">₹50+ Crores</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="certificationLevel">Quality Certification Level</Label>
            <Select value={formData.certificationLevel} onValueChange={(value) => handleChange("certificationLevel", value)}>
              <SelectTrigger className="transition-smooth focus:shadow-hover">
                <SelectValue placeholder="Select certification level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="iso-9001">ISO 9001</SelectItem>
                <SelectItem value="iso-14001">ISO 14001</SelectItem>
                <SelectItem value="iso-45001">ISO 45001</SelectItem>
                <SelectItem value="bis">BIS Certification</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="none">No Certification</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Additional Information</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              placeholder="Any additional information about your organization"
              className="min-h-[100px] transition-smooth focus:shadow-hover"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full  hover:shadow-hover transition-smooth"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Organization Information"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}