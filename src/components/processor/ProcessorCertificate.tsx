import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { FileCheck, Upload, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
  foodLicense: z.any().optional(),
  pollutionClearance: z.any().optional(),
  fireSafety: z.any().optional(),
  qualityCertification: z.any().optional(),
  gstCertificate: z.any().optional(),
  additionalCerts: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ProcessorCertificatesFormProps {
  onSubmit: () => void;
}

const certificateTypes = [
  { key: "foodLicense", label: "Food License/FSSAI", required: true },
  { key: "pollutionClearance", label: "Pollution Clearance Certificate", required: true },
  { key: "fireSafety", label: "Fire Safety Certificate", required: false },
  { key: "qualityCertification", label: "Quality Certification (ISO/BIS)", required: false },
  { key: "gstCertificate", label: "GST Registration Certificate", required: true },
];

export function ProcessorCertificatesForm({ onSubmit }: ProcessorCertificatesFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, File>>({});

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      additionalCerts: "",
    },
  });

  const handleFileUpload = (certificateKey: string, file: File | null) => {
    if (file) {
      setUploadedFiles(prev => ({ ...prev, [certificateKey]: file }));
      alert(`File Uploaded\n${file.name} has been uploaded successfully`);
    } else {
      setUploadedFiles(prev => {
        const updated = { ...prev };
        delete updated[certificateKey];
        return updated;
      });
    }
  };

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    // Check if required certificates are uploaded
    const requiredCerts = certificateTypes.filter(cert => cert.required);
    const missingCerts = requiredCerts.filter(cert => !uploadedFiles[cert.key]);
    
    if (missingCerts.length > 0) {
      alert(`Missing Required Certificates\nPlease upload: ${missingCerts.map(cert => cert.label).join(", ")}`);
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log("Certificates form data:", { ...data, uploadedFiles });
      alert("Certificates Saved\nYour certificates have been uploaded successfully");
      onSubmit();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="border-none shadow-none">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
            <FileCheck className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <CardTitle className="text-xl font-bold text-foreground">Certificates Upload</CardTitle>
            <CardDescription className="text-muted-foreground">
              Upload your processing plant certificates and licenses
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {certificateTypes.map((cert) => (
                <div key={cert.key} className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center space-x-2">
                    <FileCheck className="h-4 w-4" />
                    <span>{cert.label}</span>
                    {cert.required && <span className="text-destructive">*</span>}
                  </label>
                  
                  <div className="border-2 border-dashed border-border rounded-lg p-6 transition-colors hover:border-primary/50">
                    {uploadedFiles[cert.key] ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <FileCheck className="h-8 w-8 text-success" />
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {uploadedFiles[cert.key].name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {(uploadedFiles[cert.key].size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => handleFileUpload(cert.key, null)}
                          className="text-destructive hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">
                            PDF, JPG, PNG up to 10MB
                          </p>
                        </div>
                        <Input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(cert.key, file);
                          }}
                          className="mt-4"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <FormField
              control={form.control}
              name="additionalCerts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Certificates Information (Optional)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="List any additional certificates or provide notes about your certifications"
                      rows={3}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="bg-accent rounded-lg p-4">
              <h4 className="font-semibold text-accent-foreground mb-2">Important Notes:</h4>
              <ul className="text-sm text-accent-foreground/80 space-y-1">
                <li>• All certificates should be valid and not expired</li>
                <li>• Upload clear, readable copies of certificates</li>
                <li>• File size should not exceed 10MB per certificate</li>
                <li>• Accepted formats: PDF, JPG, PNG</li>
              </ul>
            </div>

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isLoading}
                className=" hover:opacity-90 transition-opacity px-8"
              >
                {isLoading ? "Saving..." : "Save & Continue"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}