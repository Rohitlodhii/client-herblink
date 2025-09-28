import { useState } from "react";

import { UserCheck, Mail, Phone, MapPin, Upload, Camera } from "lucide-react";
 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface ManagerData {
  name: string;
  email: string;
  mobile: string;
  address: string;
  designation: string;
  experience: string;
  qualification: string;
  emergencyContact: string;
  photo?: string;
  additionalInfo: string;
}

interface ManagerFormProps {
  onComplete: (data: ManagerData) => void;
  initialData?: Partial<ManagerData>;
}

export function ManagerForm({ onComplete, initialData = {} }: ManagerFormProps) {
  const [formData, setFormData] = useState<ManagerData>({
    name: initialData.name || "",
    email: initialData.email || "",
    mobile: initialData.mobile || "",
    address: initialData.address || "",
    designation: initialData.designation || "",
    experience: initialData.experience || "",
    qualification: initialData.qualification || "",
    emergencyContact: initialData.emergencyContact || "",
    photo: initialData.photo || "",
    additionalInfo: initialData.additionalInfo || "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string>(initialData.photo || "");
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const requiredFields = ['name', 'email', 'mobile', 'address', 'designation'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof ManagerData]);
    
    if (missingFields.length > 0) {
      alert("Missing Information\nPlease fill in all required fields.");
      return;
    }

    if (formData.mobile.length !== 10) {
      alert("Invalid Mobile Number\nPlease enter a valid 10-digit mobile number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Invalid Email\nPlease enter a valid email address.");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Manager Information Saved\nManager details have been successfully saved.");
      onComplete(formData);
    }, 1000);
  };

  const handleChange = (field: keyof ManagerData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      alert("File too large\nPlease upload a photo smaller than 2MB.");
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(file.type)) {
      alert("Invalid file type\nPlease upload a JPG or PNG image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPhotoPreview(result);
      setFormData(prev => ({ ...prev, photo: result }));
    };
    reader.readAsDataURL(file);

    alert("Photo uploaded\nManager photo has been successfully uploaded.");
  };

  return (
    <Card >
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <UserCheck className="h-5 w-5 text-primary" />
          <span>Manager Information</span>
        </CardTitle>
        <CardDescription>
          Provide details about the authorized manager or contact person
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Photo Upload Section */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="w-24 h-24 border-4 border-border">
                <AvatarImage src={photoPreview} alt="Manager photo" />
                <AvatarFallback className="text-xl">
                  <Camera className="h-8 w-8 text-muted-foreground" />
                </AvatarFallback>
              </Avatar>
              <label
                htmlFor="photo-upload"
                className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2 cursor-pointer hover:bg-primary-dark transition-colors shadow-elegant"
              >
                <Upload className="h-4 w-4" />
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Upload manager's photo (JPG/PNG, max 2MB)
            </p>
          </div>

          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter full name"
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="designation">Designation *</Label>
                <Input
                  id="designation"
                  value={formData.designation}
                  onChange={(e) => handleChange("designation", e.target.value)}
                  placeholder="e.g., Plant Manager, Operations Head"
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="manager@company.com"
                    className="pl-10 transition-smooth focus:shadow-hover"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="10-digit mobile number"
                    className="pl-10 transition-smooth focus:shadow-hover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyContact">Emergency Contact Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="emergencyContact"
                  type="tel"
                  value={formData.emergencyContact}
                  onChange={(e) => handleChange("emergencyContact", e.target.value.replace(/\D/g, '').slice(0, 10))}
                  placeholder="Alternative contact number"
                  className="pl-10 transition-smooth focus:shadow-hover"
                />
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
          </div>

          {/* Professional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Professional Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="qualification">Educational Qualification</Label>
                <Input
                  id="qualification"
                  value={formData.qualification}
                  onChange={(e) => handleChange("qualification", e.target.value)}
                  placeholder="e.g., B.Tech, MBA, Diploma"
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input
                  id="experience"
                  type="number"
                  value={formData.experience}
                  onChange={(e) => handleChange("experience", e.target.value)}
                  placeholder="Years in manufacturing"
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleChange("additionalInfo", e.target.value)}
                placeholder="Any additional relevant information about the manager"
                className="min-h-[100px] transition-smooth focus:shadow-hover"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full  hover:shadow-hover transition-smooth"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Manager Information"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}