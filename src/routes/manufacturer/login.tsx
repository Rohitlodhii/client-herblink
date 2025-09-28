import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/manufacturer/login')({
  component: RouteComponent,
})



import { useState } from "react";



import { Factory, Shield, CheckCircle } from "lucide-react";

import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
 


function RouteComponent() {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mobile || !email) {
      alert("Missing Information\nPlease enter both mobile number and email address.");
      return;
    }

    if (mobile.length !== 10) {
      alert("Invalid Mobile Number\nPlease enter a valid 10-digit mobile number.");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("userMobile", mobile);
      localStorage.setItem("userEmail", email);
      router.navigate({
        to : "/manufacturer/verify-otp"
      })
    }, 1000);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl shadow-elegant mb-4">
            <Factory className="h-8 w-8 " />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Manufacturer Portal</h1>
          <p className="text-muted-foreground">Sign in to register your manufacturing unit</p>
        </div>

        <Card>
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">Welcome Back</CardTitle>
            <CardDescription>Enter your details to continue with registration</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="Enter your 10-digit mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="transition-smooth focus:shadow-hover"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="transition-smooth focus:shadow-hover"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full cursor-pointer hover:shadow-hover transition-smooth"
                disabled={isLoading}
              >
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-success" />
            <span>Secure</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <span>Verified</span>
          </div>
        </div>
      </div>
    </div>
  );
};

