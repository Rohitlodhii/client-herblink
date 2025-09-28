import { useState } from "react";

import { FileCheck, Upload, X, FileText, CheckCircle } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface CertificateFile {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadDate: Date;
}

interface CertificatesData {
  qualityCertificates: CertificateFile[];
  safetyCertificates: CertificateFile[];
  environmentalCertificates: CertificateFile[];
  otherCertificates: CertificateFile[];
}

interface CertificatesFormProps {
  onComplete: (data: CertificatesData) => void;
  initialData?: Partial<CertificatesData>;
}

export function CertificatesForm({ onComplete, initialData = {} }: CertificatesFormProps) {
  const [certificates, setCertificates] = useState<CertificatesData>({
    qualityCertificates: initialData.qualityCertificates || [],
    safetyCertificates: initialData.safetyCertificates || [],
    environmentalCertificates: initialData.environmentalCertificates || [],
    otherCertificates: initialData.otherCertificates || [],
  });

  const [isLoading, setIsLoading] = useState(false);
  

  const certificateTypes = [
    {
      key: "qualityCertificates" as keyof CertificatesData,
      title: "Quality Certificates",
      description: "ISO 9001, BIS, etc.",
      examples: ["ISO 9001:2015", "BIS Certification", "Quality Management"]
    },
    {
      key: "safetyCertificates" as keyof CertificatesData,
      title: "Safety Certificates",
      description: "ISO 45001, Fire Safety, etc.",
      examples: ["ISO 45001:2018", "Fire Safety Certificate", "Factory Safety License"]
    },
    {
      key: "environmentalCertificates" as keyof CertificatesData,
      title: "Environmental Certificates",
      description: "ISO 14001, Pollution Control, etc.",
      examples: ["ISO 14001:2015", "Pollution Control Board", "Environmental Clearance"]
    },
    {
      key: "otherCertificates" as keyof CertificatesData,
      title: "Other Certificates",
      description: "Industry specific certificates",
      examples: ["Trade License", "GST Certificate", "Import-Export License"]
    }
  ];

  const handleFileUpload = (type: keyof CertificatesData, files: FileList | null) => {
    if (!files) return;

    const newFiles: CertificateFile[] = [];
    
    Array.from(files).forEach(file => {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert(`File too large\n${file.name} is larger than 5MB. Please upload a smaller file.`);
        return;
      }

      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedTypes.includes(file.type)) {
        alert(`Invalid file type\n${file.name} is not a supported format. Please upload PDF, JPG, or PNG files.`);
        return;
      }

      newFiles.push({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type,
        size: file.size,
        uploadDate: new Date(),
      });
    });

    if (newFiles.length > 0) {
      setCertificates(prev => ({
        ...prev,
        [type]: [...prev[type], ...newFiles]
      }));

      alert(`Files uploaded successfully\n${newFiles.length} file(s) have been uploaded.`);
    }
  };

  const handleRemoveFile = (type: keyof CertificatesData, fileId: string) => {
    setCertificates(prev => ({
      ...prev,
      [type]: prev[type].filter(file => file.id !== fileId)
    }));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getTotalFiles = () => {
    return certificateTypes.reduce((total, type) => total + certificates[type.key].length, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (getTotalFiles() === 0) {
      alert("No certificates uploaded\nPlease upload at least one certificate to continue.");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert("Certificates Saved\nYour certificates have been successfully uploaded and saved.");
      onComplete(certificates);
    }, 1000);
  };

  return (
    <Card className="shadow-card border-0 bg-gradient-card">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileCheck className="h-5 w-5 text-primary" />
          <span>Certificates Upload</span>
        </CardTitle>
        <CardDescription>
          Upload your manufacturing certificates and licenses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {certificateTypes.map((type) => (
            <div key={type.key} className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{type.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {type.examples.map((example, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {example}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <input
                  type="file"
                  id={type.key}
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={(e) => handleFileUpload(type.key, e.target.files)}
                  className="hidden"
                />
                <label
                  htmlFor={type.key}
                  className="cursor-pointer flex flex-col items-center space-y-2"
                >
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">
                    Click to upload or drag and drop
                  </span>
                  <span className="text-xs text-muted-foreground">
                    PDF, JPG, PNG up to 5MB each
                  </span>
                </label>
              </div>

              {certificates[type.key].length > 0 && (
                <div className="space-y-2">
                  {certificates[type.key].map((file) => (
                    <div
                      key={file.id}
                      className="flex items-center justify-between p-3 bg-accent rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <FileText className="h-4 w-4 text-accent-foreground" />
                        <div>
                          <p className="text-sm font-medium text-accent-foreground">{file.name}</p>
                          <p className="text-xs text-accent-foreground/70">
                            {formatFileSize(file.size)} • Uploaded {file.uploadDate.toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveFile(type.key, file.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {getTotalFiles() > 0 && (
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium text-success-foreground">
                  {getTotalFiles()} certificate(s) uploaded successfully
                </span>
              </div>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full cursor-pointer hover:shadow-hover transition-smooth"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Certificates"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}